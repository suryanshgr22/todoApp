const mongoose =  require('mongoose');
const {mongo_url} = require('./info');

mongoose.connect(mongo_url);

const todoSchema = new mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model("todos", todoSchema);
module.exports = {
    Todo
}
