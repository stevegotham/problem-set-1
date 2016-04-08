// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.

var letterCapitalize = function(string) {
    var stringArray = string.split(' ');
    for (var i=0; i<stringArray.length;i++) {
       stringArray[i] = upper(stringArray[i]);
    }
    var stringArray = stringArray.join(' ');
    console.log(stringArray);
}
var upper = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.

var wordCount = function(string) {
    var stringArray = string.split(' ');
    return stringArray.length;
}

// Bonus:

// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

function primmeTime(num) {
	var x = Math.sqrt(num);
	if (num % 2 === 0 && num !==2 || num === 1) {
		return false;
	}
	for (var i=3;i<=x;i+=2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}