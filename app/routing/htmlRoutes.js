var path = require("path");

module.exports = function (app) {

    // Survey page: 
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    });

    //homepage route catch:
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });
};