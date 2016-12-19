const assert = require('assert');
var test_data = require('./test_data.js');
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
			var regID = currentRegNum.slice(0,2);

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
	switch(regWithMostBlue){
		case 'CJ':
		townWithMostBlue = 'Paarl';
		break;

		case 'CY':
		townWithMostBlue = 'Bellville';
		break;

		case 'CL':
		townWithMostBlue = 'Stellenbosch';
		break;

		case 'CK':
		townWithMostBlue = 'Malmesbury';
		break;

		case 'CA':
		townWithMostBlue = 'Cape Town';
		break;

		case 'CF':
		townWithMostBlue = 'Kuilsriver';
		break;

		default:
		townWithMostBlue = regWithMostBlue;
	}
	return townWithMostBlue
}

// Test mostPopularCar
assert.deepEqual(mostPopularCar(test_data), 'Volkswagen', ['mostPopularCar Failed!']);
// Test nissansFromCK
assert.deepEqual(nissansFromCK(test_data), 1, ['nissansFromCK Failed!']);
// Test mostBlueCars
assert.deepEqual(mostBlueCars(test_data), 'Cape Town');
