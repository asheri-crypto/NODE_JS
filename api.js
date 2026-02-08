import http from 'node:http'
import { getDataFromDB } from './db.js'
 
const PORT = 8000

const server = http.createServer(async (req, res) => {
  /*
  Challenge:
    1. Store our data in a const ‘destinations’.
    2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
      Think: What changes will you need to make to get this to work?
  */

  if (req.url === '/api' && req.method === 'GET') {
    // Step 1: Get data from database and store it in 'destinations'
    const destinations = await getDataFromDB()
    
    // Step 2: Send JSON stringified data
    // We need to set the correct Content-Type header for JSON
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json') // Set the header to indicate JSON response
    
    // Convert the destinations data to JSON string and send it
    res.end(JSON.stringify(destinations))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))