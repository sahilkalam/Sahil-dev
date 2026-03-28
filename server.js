const express = require("express"); 
const path = require("path");

const app = express();
// Best practice: Use the environment port if defined (e.g., by a hosting provider), otherwise default to 3000
const port = process.env.PORT || 3000;

// Defined Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// 404 Catch-All Handler
// Note: This MUST be placed AFTER all your valid routes!
app.use((req, res) => {
    // Sets the HTTP status code to 404 and sends a response
    res.status(404).send(`
        <div style="text-align: center; font-family: sans-serif; margin-top: 100px;">
            <h1 style="font-size: 3rem; color: #111827;">404</h1>
            <p style="font-size: 1.25rem; color: #4B5563;">Oops! Page not found.</p>
            <a href="/" style="color: #3b82f6; text-decoration: none; margin-top: 20px; display: inline-block;">Go back home</a>
        </div>
    `);
    
    // Alternative: If you want to use a dedicated HTML file for the 404 page, use this instead:
    // res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start the server
app.listen(port, () => {
    // Improved log to click straight to your local server
    console.log(`Server is running on http://localhost:${port}`);
});