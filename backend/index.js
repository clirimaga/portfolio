const dotenv = require("dotenv/config");
require('./db');
const express= require('express');
const app = express();
const cors = require('cors');
const { projectRouter } = require('./routes/projects');
const { skillRouter } = require("./routes/skills");



app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send('main page')
})



app.use('/projects', projectRouter)
app.use('/skills',skillRouter)

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Running on port: ${port}`)
})