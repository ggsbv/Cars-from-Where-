const assert = require('assert');
const test_data = require('./test_data.js');
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
    console.log(mostPopular);
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
// Test functions
//assert.deepEqual(mostPopularCar(test_data), 'Volkswagen');
console.log(test_data);
