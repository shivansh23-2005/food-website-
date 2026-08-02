# Hangry

Hangry is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It aims to provide users with a smooth and interactive experience to explore and order food when they're feeling "hangry" (hungry + angry).

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe"/>
  <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="Render">
</p>

## Table of Contents

- [Live Link](#live-link)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Live-Link

- You can view the live link [here.](https://hangry-frontend.onrender.com/)

## Features

- User authentication and authorization (JWT-based).
- Explore a variety of food items from different categories.
- Add items to cart and manage orders.
- Interactive UI with real-time updates.
- Fully responsive design.
- Backend RESTful API for handling data.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **UI Library**: Material-UI / Bootstrap (mention if any)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/aayushai/Hangry.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Hangry
    ```

3. Install dependencies for both frontend and backend:

    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the `backend` folder and configure the following variables:
      ```bash
      MONGO_URI=<your-mongo-db-uri>
      JWT_SECRET=<your-jwt-secret>
      ```

5. Run the application:

    - Start the backend:
      ```bash
      cd backend
      npm run dev
      ```

    - Start the frontend:
      ```bash
      cd ../frontend
      npm start
      ```

    The app should now be running on `http://localhost:3000`.

## Usage

- Register or login to your account.
- Browse food categories and add items to your cart.
- Review and place orders.
- View and manage your profile and order history.

## API Endpoints

Here are some key API endpoints for the backend (located in the `backend/routes` folder):

- **User Routes**:
  - `POST /api/users/login`: User login.
  - `POST /api/users/register`: User registration.
  
- **Food Routes**:
  - `GET /api/food`: Get all food items.
  - `POST /api/food`: Add a new food item (Admin only).

- **Order Routes**:
  - `POST /api/orders`: Create a new order.
  - `GET /api/orders/:id`: Get order by ID.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
