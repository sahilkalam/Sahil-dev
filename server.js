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
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start the server
app.listen(port, () => {
    // Improved log to click straight to your local server
    console.log(`Server is running on http://localhost:${port}`);
});
