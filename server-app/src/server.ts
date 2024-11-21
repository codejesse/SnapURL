const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const port = process.env.PORT || 5001

const app = express()

app.get("/", (req, res) => {
    res.send("Hello SnapUrl world")
})

app.listen(port, () => {
    console.log(`server started successfully on ${port}`)
})
