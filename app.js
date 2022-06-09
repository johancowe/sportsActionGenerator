// First version of sportsActionGenerator
// This 'app.js'-file contains the main logic, and uses clasess and data from other js files
// (according to 'seperation of concerns' principles)

var data    = require("./data.js");
var classes = require("./classes.js");

//const generator = new classes.SportsActionsGenerator('volleyball',false,'M',[]);
//const generator = new classes.SportsActionsGenerator('volleyball',false,'F',[]);
//const generator = new classes.SportsActionsGenerator('volleyball',true,'M',['Johan Cowe', 'Lars Cowe', 'Jimmy Cowe']);
const generator = new classes.SportsActionsGenerator('volleyball',true,'M',[]);


console.log('');
console.log('');
console.log('========================================================================================================================');
console.log('                                   ' + generator.generateMessage());
console.log('========================================================================================================================');
console.log('');
console.log('');
