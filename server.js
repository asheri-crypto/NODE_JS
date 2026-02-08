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


// server.js
import http
 from 'node:http';   // ← more common & explicit style

const PORT = 5000;

const server = http.createServer((req, res) => {
  // serve when there is only url of /api

   if (req.url === '/api' && req.method === 'GET') { 
  console.log(req.url);
   }

  // Better to set header once
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.write("This is my first api\n");
  res.write("This is the second line of response\n");
  res.end('Hello from the server!');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// now we can run our server using node server.js

