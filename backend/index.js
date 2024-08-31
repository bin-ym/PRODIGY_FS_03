// backend/index.js or app.js (wherever your Express app is initialized)
const express = require('express');
const cors = require('cors');
const app = express();

// Use cors middleware
app.use(cors());

// Other middlewares and routes
app.use(express.json());
app.use('/api/products', require('./routes/products')); // Example route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));