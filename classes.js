// First version of sportsActionGenerator
// This 'classes.js'-file contains all classes used in the main logic of 'app.js'
// (This is according to 'seperation of concerns' principles)
var data = require("./data.js");

class SportsActionsGenerator {

    constructor(sports, requestNamed, gender, names) {

        if (sports === 'volleyball') {
            this._sports       = 'volleyball';
            this._names        = data.volleyNames;
            this._actions      = data.volleyActions;
            this._efficiency   = data.efficiency;            
        } else { 
            console.log('This sport is not supported (yet) !');
        };

        if (requestNamed || !requestNamed) {
            this._requestNamed = requestNamed;
        } else { 
            console.log('Please specify if you request names in your message with TRUE or FALSE');
        };

        if (gender === 'M' || gender === 'F') {
            this._gender = gender;
        } else { 
            console.log('Please pass the gender of your players as: M / F ');
        };

        if (!requestNamed && (names.length > 0) ) { 
            console.log('As you did not asked for named messages, there is no need to pass names in your last parameter');
        } else if (requestNamed && (names.length > 0 )) {
            this._names = names;
        } // else use default names as already assigned during the sports assignment step

    };

    get sports() {
        return this._sports;
    };
    
    get requestNamed() {
        return this._requestNamed;
    }

    get gender() {
        return this._gender;
    }

    get names() {
        return this._names;
    }

    get actions() {
        return this._actions;
    }

    get efficiency() {
        return this._efficiency
    }

    generateMessage() {

        let actionMessage = '';

        //assign subject
        if (!this.requestNamed) {
            (this.gender === 'M')? actionMessage = 'He ' : actionMessage = 'She ';
        } else {
            const randomNameId = Math.floor(Math.random() * this.names.length);
            actionMessage = this.names[randomNameId] + ' ';
        }

        //assign action type
        const randomActionId = Math.floor(Math.random() * this.actions.length);
        actionMessage = actionMessage + this.actions[randomActionId] + ' ';

        //assign efficiency
        const randomEfficiencyId = Math.floor(Math.random() * this.efficiency.length);
        actionMessage = actionMessage + this.efficiency[randomEfficiencyId] + '!';
        
        return actionMessage;
    }

}

//const generator = new SportsActionsGenerator('volleyball',false,'M',[]);
//console.log(generator.generateMessage());
module.exports.SportsActionsGenerator = SportsActionsGenerator;
