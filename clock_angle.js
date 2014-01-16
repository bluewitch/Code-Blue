/*
Given a 12-hour analog clock, compute in degree the smaller angle between the hour and minute hands. 
Be as precise as you can.
*/

// h = 1..12, m = 0..59
function angle(h,m) {
hAngle = 0.5 * (h * 60 + m);
mAngle = 6 * m;
angle = Math.abs(hAngle - mAngle);
angle = Math.min(angle, 360 - angle);
return angle;
}
