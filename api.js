import http from 'node:http'
import { getDataFromDB } from './db.js'

const PORT = 4000

const server = http.createServer(async (req, res) => {
  /*
  Challenge:
    1. Store our data in a const 'destinations'.
    2. When a GET request is received to the '/api' endpoint, send our JSON stringified data.
      Think: What changes will you need to make to get this to work?
  */

  if (req.url === '/api' && req.method === 'GET') {
    // Step 1: Get data from database and store it in 'destinations'
    // Step 2: Send JSON stringified data
    // We need to set the correct Content-Type header for JSON

    const destinations = await getDataFromDB() // Get data from the database
    res.statusCode = 200 // code for success
    res.setHeader('Content-Type', 'application/json') // Set the header to indicate JSON response
    
    // Convert the destinations data to JSON string and send it
    res.end(JSON.stringify(destinations))
    
  } else if (req.method === 'GET' && req.url.startsWith('/api/continent/')) {
    /*
    NEW Challenge: Add continent filtering
    1. Check if the url starts with "/api/continent/".
    2. If it does, serve only items from that continent.
    */
    
    // Get data from database
    const destinations = await getDataFromDB()
    
    // Step 1: Get the continent name from the URL
    // Example: "/api/continent/europe" → "europe"
    const continentName = req.url.split('/').pop()
    
    // Step 2: Filter destinations by continent
    // Make sure your destinations have a "continent" property!
    const filteredDestinations = destinations.filter(destination => 
      destination.continent.toLowerCase() === continentName.toLowerCase()
    )
    
    // Step 3: Set headers for JSON response
    res.setHeader('Content-Type', 'application/json')
    
    // Step 4: Check if we found any destinations
    if (filteredDestinations.length > 0) {
      res.statusCode = 200
      res.end(JSON.stringify(filteredDestinations))
    } else {
      // No destinations found for this continent
      res.statusCode = 404
      res.end(JSON.stringify({
        error: "not found",
        message: `No destinations found for continent: ${continentName}`
      }))
    }
    
  } else {
    /*
    Challenge:
      1. If the client tries to access a route that isn't covered by the above, send this object: 
          {error: "not found", message: "The requested route does not exist"}
      Think: what do we need to send along with the data?
    */
    
    // SOLUTION
    // 1. Set the status code to 404 for not found
    res.statusCode = 404
    
    // 2. Set the Content-Type header to application/json
    res.setHeader('Content-Type', 'application/json')
    
    // 3. Send the JSON stringified error message
    res.end(JSON.stringify({
      error: "not found",
      message: "The requested route does not exist"
    }))
  }
})

server.listen(PORT, () =>
  console.log(`Connected on port: ${PORT}`)
)