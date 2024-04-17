// Import the express module
const express = require('express');
const app = express(); // Create an express application
const path = require('path');

// Serve static files from the 'public' directory with caching options
app.use(express.static(__dirname + "/public", {
    index: false, // Disable serving index.html by default
    immutable: true, // Immutable files for better caching
    cacheControl: true, // Enable Cache-Control header
    maxAge: "30d" // Cache files for 30 days
}));

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("App listening on port 3000");
});

// Define routes for different URLs
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html')); // Serve the index.html file
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html')); // Serve the about.html file
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html')); // Serve the contact.html file
});
