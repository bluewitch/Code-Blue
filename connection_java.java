/*
This is a 32 line Scala program. Yes Scala instead of Java but it is based on the exact same SocketServer that the author claims his program uses. It will sit there and listen for a connection, then do a simple imitation of HTTP. It even optionally supports HTTP Keep Alive.
*/

import java.net.*;
import java.io.*;
import scala.concurrent.*;
import java.util.concurrent.Executors;

object Main {
  implicit val threadpool = ExecutionContext.fromExecutor(Executors.newCachedThreadPool())
 
  def handleConnection(socket: Socket) = {
    val in = io.Source.fromInputStream(socket.getInputStream).getLines
    val out = new OutputStreamWriter(socket.getOutputStream)
    var close = false
    while (!close && in.hasNext) {
      val req = in.takeWhile(_!="").toList
      close = !req.exists(_.equalsIgnoreCase("Connection: Keep-Alive"))
    
      out.write("HTTP/1.0 200 OK\r\n" +
        (if (!close) "Connection: Keep-Alive\r\n" else "")+
        "Content-Length: 0\r\n\r\n")
      out.flush
    }
    socket.close
  }

  def main(args: Array[String]) = {
    val server = new ServerSocket(5555)
    while (true) {
      val connection = server.accept
      Future(handleConnection(connection))
    }
  }
}
