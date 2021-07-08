require('dotenv');
let express = require('express');
let server = express();

const PORT = process.env.PORT || 5000

server.get('/api', (req, res) => {
    // console.log(req) //has a lot of information
    res.json({message: "this is the code, the chosen code"})
})
server.listen(PORT, () => {
    console.log(`I am listening at ${PORT}`)
})