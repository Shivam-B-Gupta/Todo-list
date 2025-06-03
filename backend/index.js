const express = require('express');
const app = express();
app.use(express.json())

const {userRoutes} = require('./routes/user');
const {todoRoutes} = require('./routes/todo');

app.use('/todo', todoRoutes);
app.use('/user', userRoutes);

app.listen(3000);