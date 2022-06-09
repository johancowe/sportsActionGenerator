// First version of sportsActionGenerator
// This 'data.js'-file contains the data that shall be used in the main logic of 'app.js'
// (This is according to 'seperation of concerns' principles)


const volleyNames = [
    "Stijn D'Hulst", 'Sander Depovere', 'Seppe Van Hoyweghen', 'Liam McCluskey', 'Lienert Cosemans', 'Robbe Ponseele', 'Hendrik Tuerlinkcx', 'Ferre Reggers', 'Lou Kindt', 'Hugo Fischer',
    'Mathijs Desmet', 'Seppe Rotty', 'Simon Peeters', 'Robbe Van de Velde', 'Simon Plaskie', 'Francois Lecat', 'Kevin Klinkenberg',
    'Lennert Van Elsen', "Wout D’Heer", 'Senne Gifford', 'Elias Thys', 'Arno Van de Velde'
];
const volleyActions = ['attacks', 'digs', 'passes', 'serves', 'blocks', 'tips', 'sets', 'does a pancake', 'injures', 'protests', 'smiles' ];
const efficiency = ['nicely', 'badly', 'unnecessary', 'uselessly', 'legendary', 'horribly', 'magicaly', 'unexpectedly', 'ridiculously'];

module.exports.volleyNames = volleyNames;
module.exports.volleyActions = volleyActions;
module.exports.efficiency = efficiency;