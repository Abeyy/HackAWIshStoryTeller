const mongoose = require ("mongoose");

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    email: {type: String, required: true, minlength: 6},
    password
    }, {timestamp: true})

var PostSchema = new monoose.Schema({
    name: {type: String, required: true, minlength: 2},
    media: {type: String},
    medical_condition: {type: String},
    age: {type: Number},
    story: {type: String}

})

mongoose.model("User", UserSchema);
mongoose.model("Post", PostSchema);