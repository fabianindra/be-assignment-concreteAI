**Backend Service
Overview**

This project is a backend service for managing user accounts and transactions. It includes two main components:

Account Manager: Manages user accounts and authentication.
Payment Manager: Handles transactions and payment-related functionalities.

**Technologies Used**
Node.js: JavaScript runtime for server-side logic.
Fastify: Web framework for building APIs.
MySQL: Relational database for storing data.
Prisma: ORM for database access.
Docker: Containerization for consistent development and deployment environments.

**Setup**
Environment Variables
Create a .env file in the root directory of the project with the following content:

env :

DATABASE_URL="mysql://user:password@localhost:3306/paymentManagement?schema=public"
JWT_SECRET=your_jwt_secret_key

Replace user, password, localhost, and paymentManagement with your MySQL credentials and database details.

Running Locally
Install Dependencies

**Navigate to the project root directory and install dependencies:**

npm install
Run Database Migrations

**Ensure your MySQL database is up and running. Apply migrations using Prisma:**

npx prisma migrate deploy
Start the Server

**Start the backend services using Docker Compose:**

docker-compose up
The backend services will be available at:

Account Manager: http://localhost:3001
Payment Manager: http://localhost:3002

**Testing the Service**
You can test the endpoints using tools like Postman or curl. Here are some example requests:

**Register a User
**

curl -X POST http://localhost:3001/register -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "yourpassword"}'
Login a User


curl -X POST http://localhost:3001/login -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "yourpassword"}'
Create a Transaction


curl -X POST http://localhost:3002/transactions -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_JWT_TOKEN" -d '{"amount": 100, "description": "Payment for service"}'
Docker Commands
Build and Start Containers

docker-compose up --build
Stop Containers

docker-compose down
Troubleshooting
If you encounter issues with connecting to the MySQL database:

**Check MySQL Container Logs**

docker logs <mysql-container-id>
Verify Database Credentials

Ensure that the credentials in your .env file match those used by the MySQL container.

Inspect Network Configuration

Ensure that your containers are on the same network and can communicate with each other.
