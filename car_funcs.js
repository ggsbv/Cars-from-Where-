const assert = require('assert');
var test_data = require('./test_data.js');
/* 	regNumConverter takes in a registration location identifier such as 'CL' and
		returns the town name that the registration number represents
*/
var regNumConverter = function(regNum){

	switch(regNum){
		case 'CJ':
		regNum = 'Paarl';
		break;

		case 'CY':
		regNum = 'Bellville';
		break;

		case 'CL':
		regNum = 'Stellenbosch';
		break;

		case 'CK':
		regNum = 'Malmesbury';
		break;

		case 'CA':
		regNum = 'Cape Town';
		break;

		case 'CF':
		regNum = 'Kuilsriver';
		break;

		default:
		regNum = regNum;
	}
	return regNum;
}
// What make is the most popular?
function mostPopularCar(list){
	var mostPopular = '';
  	var maxNum = 0;
  	var mapMake = {};

  	for(i = 0; i < list.length; i++){
    	var currentObj = list[i];
      var currentMake = currentObj.make;

      	if(mapMake[currentMake] === undefined){
        	mapMake[currentMake] = 0;
        }

      	mapMake[currentMake]++;
    }

  	for(current in mapMake){
    	var currentTotal = mapMake[current];

      	if(currentTotal > maxNum){
           	maxNum = currentTotal;
          	mostPopular = current;
        }
    }
  	return mostPopular;
}
// How many Nissans are from Malmesbury?
var nissansFromCK = function(list){
  var counter = 0;
  for(i = 0; i < list.length; i++){
    var currentObj = list[i];
    var currentMake = currentObj.make;
    if(currentMake === 'Nissan'){
      counter++;
    }
  }
  return counter;
}
// Which town has the most blue cars?
var mostBlueCars = function(list){
	var outputList = {};
	var regWithMostBlue = '';
	var maxTotal = 0;
	var townWithMostBlue = '';
	// Loop through data
	for(i = 0; i < list.length; i++){
		var currentObj = list[i];
		var currentColor = currentObj.color;
		// if blue, increment regID in outputList
		if(currentColor === 'blue'){
			var currentRegNum = currentObj.reg_number;
			var regID = currentRegNum.slice(0, 2);

			if(outputList[regID] === undefined){
				outputList[regID] = 1;
			}
			else{
				outputList[regID]++;
			}
		}
	}
	// Analyse outputList and find highest occurring regID
	for(currentReg in outputList){
		var currentTotal = outputList[currentReg];

		if(currentTotal > maxTotal){
			maxTotal = currentTotal;
			regWithMostBlue = currentReg;
		}
	}
	// Analyse regWithMostBlue and assign Town name
	townWithMostBlue = regNumConverter(regWithMostBlue);

	return townWithMostBlue
}

// Which town has the fewest orange cars?
var fewestOrangeCars = function(list){
	var outputList = {};
	var townWithFewestOrange = '';
	var minNum = 1000000;
	var regWithFewestOrange = '';

	for(i = 0; i < list.length; i++){
			var currentObj = list[i];
			var currentColor = currentObj.color;

			if(currentColor === 'orange'){
				var currentRegNum = currentObj.reg_number;
				var regID = currentRegNum.slice(0, 2);

				if(outputList[regID] === undefined){
					outputList[regID] = 1;
				}
				else{
					outputList[regID]++;
				}
			}
	}

	for(currentReg in outputList){
		currentTotal = outputList[currentReg];

		if(currentTotal < minNum){
			minNum = currentTotal;
			regWithFewestOrange = currentReg;
		}
	}

	townWithFewestOrange = regNumConverter(regWithFewestOrange);

	return townWithFewestOrange;
}

// What is the most popular car overall?
var mostPopularModel = function(list){
	var outputList = {};
	var maxTotal = 0;
	var mostPopular = '';

	for(i = 0; i < list.length; i++){
		var currentObj = list[i];
		var currentModel = currentObj.model;

		if(outputList[currentModel] === undefined){
			outputList[currentModel] = 1;
		}
		else{
			outputList[currentModel]++;
		}

		for(currentModel in outputList){
			currentTotal = outputList[currentModel];
			if(currentTotal > maxTotal){
				maxTotal = currentTotal;
				mostPopular = currentModel;
			}
		}
	}
	return mostPopular;
}

// Test mostPopularCar
assert.deepEqual(mostPopularCar(test_data), 'Volkswagen', ['mostPopularCar Failed!']);
// Test nissansFromCK
assert.deepEqual(nissansFromCK(test_data), 1, ['nissansFromCK Failed!']);
// Test mostBlueCars
assert.deepEqual(mostBlueCars(test_data), 'Cape Town');
// Test fewestOrangeCars
assert.deepEqual(fewestOrangeCars(test_data), 'Malmesbury');
// Test mostPopularModel
assert.deepEqual(mostPopularModel(test_data), 'Polo');
