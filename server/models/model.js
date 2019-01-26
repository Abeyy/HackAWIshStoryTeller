const mongoose = require ("mongoose");

var UserSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    }, {timestamp: true})

var PostSchema = new monoose.Schema({
    name: {type: String},
    media: {type: String},
    medical_condition: {type: String},
    age: {type: Number},
    story: {type: String}

})

mongoose.model("User", UserSchema);
mongoose.model("Post", PostSchema);