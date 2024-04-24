// Import the http and fs (file system) modules
const http = require('http');
const fs = require('fs');

// Read the contents of the HTML files into memory
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notfound.html');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Log the requested URL to the console
    console.log(req.url);

    // Check the requested URL and serve the corresponding HTML page
    if (req.url === '/about') {
        res.end(aboutPage); // Serve the about page
    } else if (req.url === '/contact') {
        res.end(contactPage); // Serve the contact page
    } else if (req.url === '/') {
        res.end(homePage); // Serve the home page
    } else {
        // If the URL doesn't match any of the above, serve a 404 Not Found page
        res.writeHead(404);
        res.end(notFoundPage);
    }
});

// Make the server listen on port 3000
server.listen(3000);
