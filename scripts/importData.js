const mongoose = require('mongoose');
const Contact = require('../models/Contact');
require('dotenv').config();

const sampleContacts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    favoriteColor: 'Blue',
    birthday: new Date('1990-05-15')
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    favoriteColor: 'Green',
    birthday: new Date('1988-12-03')
  },
  {
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@email.com',
    favoriteColor: 'Red',
    birthday: new Date('1992-08-22')
  },
  {
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.williams@email.com',
    favoriteColor: 'Purple',
    birthday: new Date('1985-03-10')
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@email.com',
    favoriteColor: 'Orange',
    birthday: new Date('1995-11-18')
  }
];

const importData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/contacts_db');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Contact.deleteMany({});
    console.log('Cleared existing contacts');

    // Insert sample data
    const contacts = await Contact.insertMany(sampleContacts);
    console.log(`Imported ${contacts.length} contacts successfully`);

    // Display imported contacts
    console.log('\nImported contacts:');
    contacts.forEach(contact => {
      console.log(`${contact.firstName} ${contact.lastName} - ${contact.email}`);
    });

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

importData();
