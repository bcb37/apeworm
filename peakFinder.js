//Finds the peaks of the curve
//Pass an array of numbers as param
//Use this file only after you have passed your array through the smoothCurve function twice
//returns an array with the positions of all the peaks found

function peaksFinder(smoothedArray) {
	var peakPositions = new Array();
	var previousNum;
	var currentNum;
	var nextNum;

	for(var i = 0; i < smoothedArray.length; i++) {
		if(i == 0) {
			previousNum = 0;
			currentNum = smoothedArray[i];
			nextNum = smoothedArray[i+1];
		}
		else if(i == smoothedArray.length - 1) {
			previousNum = smoothedArray[i-1];
			currentNum = smoothedArray[i];
			nextNum = 0;
		}
		else {
			previousNum = smoothedArray[i-1];
			currentNum = smoothedArray[i];
			nextNum = smoothedArray[i+1];
		}
		
		 if(currentNum >= previousNum && currentNum <= nextNum)
			peakPositions.push(i);
	}
	return peakPositions;
}





/*
function peaksFinder(y) {
	var lastNumber;
	var currentNumber;
	var nextNumber;

	for(var i = 0; i < y.length; i++) {
		if(i == 0) {
			currentNumber = y[i];
			nextNumber = y[i+1];
			if(checkPossiblePeak(0, currentNumber, nextNumber) == "true")
				confirmPeak
		}
		else if(i == y.length - 1) {
			currentNumber = y[i];
			lastNumber = y[i-1];
			if(checkPossiblePeak(lastNumber, currentNumber, currentNumber + 1) == "true")	 
				confirmPeak();

		}
		else {
			currentNumber = y[i];
			lastNumber = y[i-1];
			nextNumber = y[i+1];
			if(checkPossiblePeak(lastNumber, currentNumber, nextNumber) == "true")
				confirmPeak();

		}

	}

}



function checkPossiblePeak(lastNumber, currentNumber, nextNumber) {
	if(lastNumber < currentNumber && currentNumber < nextNumber)
		return "true";
	else
		return "false"
}



//Takes an array of 20 numbers to the left and 20 numbers to the right of currentNumber
//Checks a threshold to make sure that the peak found is a big peak rather and a small peak
//returns true if found a big peak

function confirmPeak(leftSubArray, rightSubArray, currentNumber) {




}



function returnSubArray(originalArray, currentPosition, left_right, subArraySize) {
	var size = subArraySize;
	var i = currentPosition;
	if(left_right == "left") {

	}
	else if(left_right == "right") {

	}

}
*/
