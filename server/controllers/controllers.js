const mongoose = require("mongoose"),
    Model = mongoose.model("Model");

    module.exports = {

        index: function(req, res){
            Model.find({_id: req.params.id}, function(err, model){
                if(err){
                    console.log("returned and error");
                    res.json({message: "error"}, err);
                }else{
                    console.log("Success");
                    res.json(model);
                }

            })
        },
        showone: function(req, res){
            Model.findOne({_id: req.params.id}, function(err, model){
                if(err){
                    console.log("retuunable to find one");
                    res.json({message: "error"}, err);
                }else{
                    console.log("found the one");
                    res.json(model);
                }
            })

        }
    }