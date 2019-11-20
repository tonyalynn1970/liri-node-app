//console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.seatgeek = {
    id: process.env.SEATGEEK_ID,
    secret: process.env.SEATGEEK_SECRET
};

// let time = 1;

// const favoriteFoods = {
//     0: "pizza",
//     1: "chips",
//     2: "salad",
//     3: "zuccini",
// }

// const tonya = {
//     hair: "brown",
//     eyes: "brown",
//     shoeSize: 7.5,
//     favoriteFoods: ["pizza", "chips", "salad", "zuccini"],
//     children: {
//         firstChild: "Kristee",
//         secondChild: "Stephen",
//         thirdChild: "Footbal guy?",
//     },
//     increaseTime: function () {
//         time = time + 1;
//     },
//     makeDinner: function () {
//         if (time % 2) {
//             console.log("dinner is ready");
//         }
//     }
// }


// tonya.increaseTime();
// //console.log("makeDinner")
// tonya.makeDinner();

// console.log(time); 