const express = require('express');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', projectRoutes);

// Serve index.html as root
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});