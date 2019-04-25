var path = require("path");
var friendData = require ("../data/friends");

module.exports = function (app) {

    // Displays JSON file:  
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res) {
        var difference = 40;
        var nameMatch = '';
       // var photoMatch = ''; not working, I think there is an issue somewhere with API, but this should normally post the photo of your matched friend

    // Loop to go through the data in friends.js to find a match
        friendData.forEach(function(friends) {
            // Determines who you match most with based on the lowest difference between you and a character.  This tells what character has the least differences to you.
            var matchedScoresArr = [];
            var finalDifference = 40;

            // Add, Reduce and Other Math to find the top match with your score:
            function add(total, num) {
                return total + num;
            }
            
            for (var i = 0; i < friends.scores.length; i++) {
                matchedScoresArr.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friends.scores[i])));
            }

            finalDifference = matchedScoresArr.reduce(add, 0);

            // If the final difference is less than the difference configured then your match will be the first difference:
            if (finalDifference < difference) {
                difference = finalDifference;

                // these are the friend matches:
                nameMatch = friends.name;
               // photoMatch = friends.photo; -- not working
            }
    });

    // match is sent back to client as a JSON object after you get through the form/equation for both the nameMatch and the photoMatch
    res.json({
        name: nameMatch,
        //photo: photoMatch -- not working
    });

    // adds sent data object to friends.js:
    friendData.push(req.body);
});
};

