const express = require('express');
const app = express();
const cors = require('cors');

// Allow requests from frontend origin
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json())

const {userRoutes} = require('./routes/user');
const {todoRoutes} = require('./routes/todo');

app.use('/todo', todoRoutes);
app.use('/user', userRoutes);

app.listen(3000);