const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); // Adjust path


mongoose.connect(process.env.MONGO_URL);
console.log("connected successfully to the database");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
})

const todo = new Schema({
    title: String,
    description: String,
    userId: ObjectId
})

const userModel = mongoose.model('User', User);
const todoModel = mongoose.model('todo', todo);

module.exports = {
    userModel,
    todoModel
}


