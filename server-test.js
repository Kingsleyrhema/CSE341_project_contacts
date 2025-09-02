const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data for testing without MongoDB
const sampleContacts = [
  {
    _id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    favoriteColor: 'Blue',
    birthday: '1990-05-15'
  },
  {
    _id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    favoriteColor: 'Green',
    birthday: '1988-12-03'
  },
  {
    _id: '3',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@email.com',
    favoriteColor: 'Red',
    birthday: '1992-08-22'
  }
];

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Hello World - Contacts API' });
});

// GET all contacts
app.get('/api/contacts', (req, res) => {
  res.json(sampleContacts);
});

// GET single contact by ID
app.get('/api/contacts/:id', (req, res) => {
  const contact = sampleContacts.find(c => c._id === req.params.id);
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.json(contact);
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Test Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/contacts`);
  console.log('Note: This is a test server using sample data (no MongoDB required)');
});
