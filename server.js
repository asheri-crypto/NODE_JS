// this is where we are gong to learn how to make
// an api well and understanding

//step 1 : make a json file
// step 2 : make a server using express
// step 3 : make routes for api
// step 4 : test api using postman

console.log("this is my first api");

// it is not a good way to use import http from 'http';
// and also using recquire is a good but old way in javascript 
// so we are going in our packet.json file and change type to module 


import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
  res.end('Hello from the server!')

})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))

