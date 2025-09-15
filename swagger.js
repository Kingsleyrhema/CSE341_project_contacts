const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contact information',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    Contact: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          description: 'First name of the contact'
        },
        lastName: {
          type: 'string',
          description: 'Last name of the contact'
        },
        email: {
          type: 'string',
          description: 'Email address of the contact'
        },
        favoriteColor: {
          type: 'string',
          description: 'Favorite color of the contact'
        },
        birthday: {
          type: 'string',
          format: 'date',
          description: 'Birthday of the contact'
        }
      },
      required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
    },
    ContactResponse: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          description: 'Unique identifier for the contact'
        },
        firstName: {
          type: 'string',
          description: 'First name of the contact'
        },
        lastName: {
          type: 'string',
          description: 'Last name of the contact'
        },
        email: {
          type: 'string',
          description: 'Email address of the contact'
        },
        favoriteColor: {
          type: 'string',
          description: 'Favorite color of the contact'
        },
        birthday: {
          type: 'string',
          format: 'date',
          description: 'Birthday of the contact'
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          description: 'Date when the contact was created'
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          description: 'Date when the contact was last updated'
        }
      }
    },
    Error: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          description: 'Error message'
        }
      }
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
