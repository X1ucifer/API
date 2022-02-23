const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const {readdirSync} = require('fs');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
const database_pass = process.env.db_pass
const database_url = process.env.db_url
const db = database_url.replace('<password>',database_pass)
mongoose.connect(db).then(
    console.log('db connected successfully')
).catch((err)=>{
    console.log(err)
})


readdirSync("./routers").map((r) => app.use("/api", require(`./routers/${r}`)));


app.listen('8080',()=>{
    console.log(`Server is runing on port 8080`)
})