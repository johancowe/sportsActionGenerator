// First version of sportsActionGenerator
// This 'classes.js'-file contains all classes used in the main logic of 'app.js'
// (This is according to 'seperation of concerns' principles)
var data = require("./data.js");

class SportsActionsGenerator {

    constructor(sports, requestNamed, gender, newNameArray) {

        if (sports === 'volleyball') {
            this._sports           = 'volleyball';
            this._nameArray        = data.volleyNameArray;
            this._actionArray      = data.volleyActionArray;
            this._adjectiveArray   = data.efficiencyArray;            
        } else { 
            const errorMessage = '<### INPUT PARM VALIDATION ERROR ###>   This sports is not supported (yet) !';
            throw Error(errorMessage);
        };

        if (requestNamed === true || requestNamed === false) {
            this._requestNamed = requestNamed;
        } else { 
            const errorMessage = '<### INPUT PARM VALIDATION ERROR ###>   Please specify if you would like to have names in your message with the boolean value TRUE or FALSE !';
            throw Error(errorMessage);
        };

        if (gender === 'M' || gender === 'F') {
            this._gender = gender;
        } else { 
            const errorMessage = '<### INPUT PARM VALIDATION ERROR ###>   Please pass the gender of your players as: M / F !';
            throw Error(errorMessage);            
        };

        if (!Array.isArray(newNameArray)) {
            const errorMessage = '<### INPUT PARM VALIDATION ERROR ###>   Please pass names as an array !';
            throw Error(errorMessage);            
        } else if (!requestNamed && (newNameArray.length > 0) ) { 
            const errorMessage = '<### INPUT PARM VALIDATION ERROR ###>   Because you did not ask for named messages, there is no need to pass names in your last parameter !';
            throw Error(errorMessage);            
        } else if (requestNamed && (newNameArray.length > 0 )) {
            this._nameArray = newNameArray;
        } // else use default names as already assigned during the sports assignment step

    };

    get sports() {
        return this._sports;
    };
    
    get requestNamed() {
        return this._requestNamed;
    };

    get gender() {
        return this._gender;
    };

    get nameArray() {
        return this._nameArray;
    };

    get actionArray() {
        return this._actionArray;
    };

    get adjectiveArray() {
        return this._adjectiveArray
    };

    getRandomName() {
        const randomNameId = Math.floor(Math.random() * this.nameArray.length);
        return this.nameArray[randomNameId];
    };

    getRandomAction() {
        const randomActionId = Math.floor(Math.random() * this.actionArray.length);
        return this.actionArray[randomActionId];
    };

    getRandomAdjective() {
        const randomAdjectiveId = Math.floor(Math.random() * this.adjectiveArray.length);
        return this.adjectiveArray[randomAdjectiveId];

    } 

    generateMessage() {

        let actionMessage = '';

        //assign subject
        if (!this.requestNamed) {
            (this.gender === 'M')? actionMessage = 'He ' : actionMessage = 'She ';
        } else {
            actionMessage = this.getRandomName() + ' ';
        }

        //assign action type
        actionMessage = actionMessage + this.getRandomAction() + ' ';

        //assign efficiency / adjective
        actionMessage = actionMessage + this.getRandomAdjective() + '!';
        
        return actionMessage;
    }

}

//------------------------ TESTERS --------------------------------------
//const generator = new SportsActionsGenerator('volleyball',false,'M',[]);
//console.log(generator.generateMessage());

module.exports.SportsActionsGenerator = SportsActionsGenerator;
