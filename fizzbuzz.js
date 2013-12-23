//fizzbuzz.js
"use strict";


	var input = [];
	for (i = 1; i <= 100; ++i) {
		input[i - 1] = i;
	}


	var divisibleBy = function(what, inputList) {
		return inputList.filter(function(item, index) {
			return !(item % what);
		});
	};


	var fizzes = divisibleBy(3, input);
	var buzzes = divisibleBy(5, input);
	var fizzbuzzes = divisibleBy(15, input);


	var transform = function(to, onWhat) {
		return function(item, index) {
			onWhat[item - 1] = to; 
		};
	};


	fizzes.each(transform("Fizz", input));
	buzzes.each(transform("Buzz", input));
	fizzbuzzes.each(transform("FizzBuzz", input));


	input.each(function(item, index) {
		document.write(item + "<br>");
	});
