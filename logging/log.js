import http from 'node:http'

// STEP 1: create a port number
const PORT = 4000;

//STEP 2 : CREATE SERVER

const SERVER = hhtp.createServer(
    (req,res) => {
        // STEP 3 : CREATE ROUTES

        if (req.url === "/api" && req.method === "GET") {
            res.end ("This is my first api");

        }
    }
)
//STEP 4: LISTEN TO THE PORT
SERVER.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

//THESE ARE THE BASICS OF MAKING A SERVER AND API IN NODE JS

// NOW WE CAN TEST OUR API USING POSTMAN OR BROWSER.