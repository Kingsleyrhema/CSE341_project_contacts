# Contacts API - Part 1

This is a Node.js API for managing contacts, built with Express and MongoDB. This project is part of a two-week assignment where Part 1 focuses on setting up the project, database, and GET endpoints.

## Features

- MongoDB database integration
- RESTful API endpoints
- Contact management (firstName, lastName, email, favoriteColor, birthday)
- Proper MVC architecture

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd w01-project-contacts-part-1
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/contacts_db
```

For MongoDB Atlas, use:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/contacts_db
```

## Database Setup

1. Make sure MongoDB is running locally or you have access to MongoDB Atlas
2. Run the data import script to populate the database with sample contacts:
```bash
node scripts/importData.js
```

## Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on port 3000 (or the port specified in your environment variables).

## API Endpoints

### Base URL
- `GET /` - Returns "Hello World" message

### Contacts
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get a single contact by ID

## Testing

Use the provided `contacts-api.rest` file with a REST client (like VS Code REST Client extension) to test the API endpoints.

## Project Structure

```
├── models/
│   └── Contact.js          # Contact data model
├── routes/
│   └── contacts.js         # Contact API routes
├── scripts/
│   └── importData.js       # Database seeding script
├── config/
│   └── database.js         # Database configuration
├── server.js               # Main server file
├── package.json            # Project dependencies
└── README.md              # This file
```

## Deployment

This project is designed to be deployed on Render. Make sure to:

1. Set the `MONGODB_URI` environment variable in your Render dashboard
2. Set the `NODE_ENV` to `production`
3. Set the build command to `npm install`
4. Set the start command to `npm start`

## Week 1 Requirements Completed

- ✅ Project setup and database configuration
- ✅ MongoDB connection
- ✅ Contact model with required fields
- ✅ GET endpoints (get all contacts, get single contact)
- ✅ Sample data import script
- ✅ Proper MVC architecture
- ✅ Ready for deployment

## Next Steps (Week 2)

- POST endpoint for creating new contacts
- PUT endpoint for updating existing contacts
- DELETE endpoint for removing contacts
- Swagger API documentation
- Final deployment and testing

## License

ISC
