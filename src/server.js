const express = require('express');
const app = express();
const env = require('dotenv');
const { adminRoute } = require('./routes/admin/adminRoute');
env.config();



app.use('/admin',adminRoute);

let port = process.env.PORT;
app.listen(port,()=>{
    console.log('listening on port',port)
});