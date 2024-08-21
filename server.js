const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');  // Import node-fetch to make HTTP requests

const app = express();
const port = 3000;

// Replace with your Discord webhook URL
const discordWebhookUrl = 'https://discord.com/api/webhooks/1275798666866589776/iVKKfYk_zA3kHZh5_U0d9aPWovUHidHD62DI5AnndZK3hyCpXvwtClQD5CG_5qNOPZOO';

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/log-booking', (req, res) => {
    const { name, flightNumber } = req.body;
    const message = `**Booking Log**\nName: ${name}\nFlight Number: ${flightNumber}`;
    
    // Send data to Discord webhook
    fetch(discordWebhookUrl, {
        method: 'POST',
        body: JSON.stringify({ content: message }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(() => res.json({ message: 'Booking logged and sent to Discord' }))
    .catch(error => {
        console.error('Error sending to Discord:', error);
        res.status(500).json({ message: 'Error logging booking' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
