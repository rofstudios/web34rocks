require('dotenv');
let serveIndex = require('serve-index');
let cors = require('cors');
let path = require('path');

let express = require('express');
let server = express();
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'client/build'))); //where the static files reside
server.use('/virtual-path', serveIndex(path.join(__dirname, 'client/public'), { 'icons': true})); //if using with serveIndex
server.use('/public', serveIndex(path.join(__dirname, 'client/files'), { 'icons': true})); //if using with serveIndex
server.use('/public', express.static('client/files')); // serve the actual files
server.use('/virtual-path', express.static('client/public')); // serve the actual files

// server.use('/virtual-path', express.static("client/public"));

const PORT = process.env.PORT || 5000;

server.get('/api', (req, res) => {
    // console.log(req) //has a lot of information
    res.json({ message: "hello darkness my old friend" })
})

// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
// })

server.use((req, res) => {
    res.json({ message: 'Could not serve' })
})
server.listen(PORT, () => {
    console.log(`I am listening at ${PORT}`)
})