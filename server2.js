// We are going to create a server that sends a 
// string over http after a get request has been made

import http from 'node:http'

const PORT = 4000

const server = http.createServer((req, res) => {
    res.end('Hello, this is server2 responding!')

})

server.listen(PORT, () => console.log("Server2 is running on port", PORT))