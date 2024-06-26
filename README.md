# Blog Website

This is a blog website built using Node.js, Express.js, EJS for templating, and MongoDB as the local database with Mongoose as its driver. This application allows users to create, read, update, and delete blog posts.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new blog posts
- Read existing blog posts
- Update existing blog posts
- Delete blog posts
- Simple and responsive user interface

## Tech Stack

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **EJS**: Embedded JavaScript templating
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js

## Installation

To get this project up and running locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blog-website.git
   ```

2. Navigate into the project directory:

   ```bash
   cd blog-website
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the MongoDB server. Open a new terminal window and run:

   ```bash
   mongod
   ```

5. Open another terminal window and connect to the MongoDB server using the Mongo shell:

   ```bash
   mongosh
   ```

6. In your original terminal window, start the Node.js server:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

Once the server is running, you can access the blog website at `http://localhost:3000`. From there, you can create and read blog posts through the web interface.

## Routes

- `GET /` - Home page displaying all blog posts
- `GET /posts/:id` - Display a specific blog post
- `GET /compose` - Form to create a new blog post
- `POST /compose` - Submit a new blog post

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.
