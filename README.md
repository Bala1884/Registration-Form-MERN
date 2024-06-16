# MERN Stack Registration Form

This is a simple registration form application built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a basic registration form that allows users to register by providing their information, which is then stored in a MongoDB database. The frontend is built with React, the backend with Node.js and Express.js, and MongoDB is used for the database.

## Features
- User registration with basic form validation
- Data storage in MongoDB
- RESTful API for handling registration data
- Responsive design

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- Mongoose (for MongoDB object modeling)
- Axios (for HTTP requests)

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/USERNAME/REPOSITORY_NAME.git
    cd REPOSITORY_NAME
    ```

2. Install dependencies for both the server and client:
    ```sh
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your MongoDB URI and any other required environment variables:
    ```env
    MONGODB_USERNAME=<your-mongodb-username>
    MONGODB_PASSWORD=<your-password>
    ```

4. Run the development servers:
    ```sh
    # Start the server
    cd server
    npm run dev

    # Start the client
    cd ../client
    npm start
    ```

## Usage
Open your browser and navigate to `http://localhost:3000` to see the registration form in action.

