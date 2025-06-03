const { Router } = require('express');
const todoRoutes = Router();
const {todoModel} = require('../db')
const {userAuthentication} = require('../middlewares/user')

todoRoutes.post('/createTodo', userAuthentication, async function(req, res){
    console.log("the program has reached the createTodo api"    )
    const {title, description} = req.body;
    const userId = req.userId;

    if(!title && !description){
        res.json({
            mssg: "Title and description required to create a todo"
        })
    }
    console.log("the program got the title and description")

    await todoModel.create({
        title: title,
        description: description,
        userId : userId
    })
    res.json({
        mssg: "created a todo"
    })
    console.log("the progaram create a todo in the database")
})

todoRoutes.put('/updateTodo', userAuthentication, async function(req, res){
    const { title, description, todoId } = req.body;
const userId = req.userId;

if (!title || !description) {
  return res.json({
    mssg: "title or description required to update the todo"
  });
}

// Use findOneAndUpdate to update the document
try {
  const updatedTodo = await todoModel.findOneAndUpdate(
    { _id: todoId, userId: userId }, // filter
    { title: title, description: description }, // update
    { new: true } // return updated document
  );

  if (!updatedTodo) {
    return res.status(404).json({ mssg: "Todo not found or unauthorized" });
  }

  res.json({
    mssg: "Todo updated successfully",
    todo: updatedTodo
  });
} catch (err) {
  res.status(500).json({ mssg: "Error updating todo", error: err.message });
}

})

module.exports = {
    todoRoutes: todoRoutes
}