# React ReqRes App

This is a simple React application that interacts with the [ReqRes API](https://reqres.in/) to manage user authentication, fetching users, editing user details, and deleting users. The app demonstrates CRUD operations using React, React Router, and Material-UI.

## Features

- User authentication (Login using ReqRes API)
- Fetch users from API and display in a list
- Edit user details (with simulated API response)
- Delete users
- Logout functionality
- Protected routes (Users cannot access certain pages without authentication)

## Tech Stack

- **Frontend:** React, React Router, Material-UI
- **Backend API:** ReqRes (Mock API for testing)
- **State Management:** React Context API
- **HTTP Requests:** Axios

## Project Structure

```
/react-reqres-app
│── /src
│   ├── /components
│   │   ├── Login.js          # User login component
│   │   ├── UserList.js       # Fetch, display, and manage users
│   │   ├── EditUser.js       # Edit user details
│   ├── /pages
│   │   ├── Home.js           # Home page
│   │   ├── LoginPage.js      # Login page
│   │   ├── UsersPage.js      # User list page
│   ├── /services
│   │   ├── api.js            # API service for user operations
│   ├── /context
│   │   ├── AuthContext.js    # Authentication context
│   ├── App.js                # Main app component with routes
│   ├── index.js              # React entry point
│── package.json
│── README.md
```

## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/anilmc02/react-reqres-app.git
   cd react-reqres-app
   ```

2. **Install dependencies**
   ```sh
   yarn install  # If using Yarn
   # OR
   npm install   # If using npm
   ```

3. **Run the app**
   ```sh
   yarn start  # OR npm start
   ```

4. Open the browser and go to `http://localhost:3000`

## Usage

- **Login Credentials:**
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`

- After logging in, you will be redirected to the **User List Page**.
- You can **edit** or **delete** users.
- To logout, click on the `Logout` button.

## API Endpoints Used

- `POST https://reqres.in/api/login` - Login
- `GET https://reqres.in/api/users` - Fetch Users
- `GET https://reqres.in/api/users/:id` - Fetch Single User
- `PUT https://reqres.in/api/users/:id` - Update User
- `DELETE https://reqres.in/api/users/:id` - Delete User

## How to Push to GitHub

1. **Initialize Git (if not already initialized)**
   ```sh
   git init
   ```
2. **Add and commit changes**
   ```sh
   git add .
   git commit -m "Initial commit"
   ```
3. **Connect to GitHub repository**
   ```sh
   git remote add origin https://github.com/anilmc02/react-reqres-app.git
   ```
4. **Push to GitHub**
   ```sh
   git branch -M main  # Rename the branch if needed
   git push -u origin main
   ```

## License
This project is open-source and available under the [MIT License](LICENSE).

