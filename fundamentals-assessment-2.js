var two = 2;
var myArrayFour = [1, two, "three", "4", 5, "six", "7", 8];

//YOUR CODE BELOW

var myArray = ["These", "are", "the", 7, "values", "of", "myArray"];


	var printAll = function (array){
	for (var i = 0; i < myArray.length; i++ ) {
		var element = myArray[i];
  		console.log(element);
	}

}

printAll(myArray);


myArrayOne = ["abc", 2, "three", 4, "fifth value", "fifth index", "Beyonce"];


var longArray = function (array){
	if (array.length >= 7) {
		console.log ('True')
		} else {
		console.log ('False')
	}
}

longArray(myArrayOne);



myArrayTwo = [10, 24, 32, true, "Kanye"];
	

var countNums = function(array) {
	var counter = 0 
	for (var i =0; i< myArrayTwo.length; i++){
		var element = myArrayTwo[i];
  		// console.log(element)	
	
	if (typeof myArrayTwo[i] === "number") {
			console.log ("increment a counter")
		}
		return counter 
		}
	}


countNums(myArrayTwo);
	