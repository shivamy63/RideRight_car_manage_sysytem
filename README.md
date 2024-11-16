# Rideright Car Management System

## Description
Rideright is a robust **Car Management System** built using the **MERN stack** with **React Vite** for a smooth and optimized frontend experience. This system allows users to manage car records effectively, supporting operations like creating, viewing, editing, and deleting cars. It also includes user authentication, role-based access (Admin/User), a powerful search functionality, a shopping cart feature, and a payment gateway integration for seamless transactions.

---

## Features

### Functionalities
1. **Authentication:**
   - Sign Up and Login for access control.
   - Role-based access for Admin and User accounts.

2. **Car Management:**
   - Users can create cars with:
     - Up to 10 images per car.
     - Title, description, and tags (e.g., car type, company, dealer, etc.).
   - Users can view a list of their cars.
   - Users can edit car details and images.
   - Users can delete cars.

3. **Search:**
   - Global search functionality to find cars by matching titles, descriptions, or tags.

4. **Cart and Payment:**
   - Users can add cars to their shopping cart.
   - Integrated payment gateway (e.g., Razorpay/Stripe) for secure transactions.

5. **Admin Functionality:**
   - Admins have the ability to manage all user accounts and cars.

---

## Pages

### 1. **Sign Up / Login Page**
   - User registration and authentication to access the system.

### 2. **Car List Page**
   - Displays all cars created by the logged-in user.
   - Includes a search bar for easy filtering.

### 3. **Car Creation Page**
   - Form to upload images (up to 10), set a title, write a description, and add tags.

### 4. **Car Detail Page**
   - Displays the details of a specific car.
   - Allows editing or deleting the car.

### 5. **Cart Page**
   - Displays all cars added to the user's cart.
   - Provides an option to proceed to payment.

### 6. **Payment Page**
   - Secure payment gateway for completing transactions.

---

## Technologies Used

### Frontend
- **React (Vite):** For building a fast and interactive user interface.
- **Tailwind CSS/Material UI (Optional):** For responsive and modern styling.

### Backend
- **Node.js and Express:** To build the server-side logic.
- **MongoDB:** Database for storing user and car information.

### Additional Tools
- **Multer:** For image upload handling.
- **JWT:** For secure user authentication.
- **Bcrypt:** For password hashing.
- **Payment Gateway (Razorpay/Stripe):** For handling payments.

---

## Getting Started

### Prerequisites
- **Node.js** (v16 or above)
- **MongoDB** (local or cloud)
- **Git** (for version control)

### Installation

#### Clone the Repository:
```bash
git clone https://github.com/your-username/rideright-car-management-system.git](https://github.com/shivamy63/RideRight_car_manage_sysytem.git
cd rideright-car-management-system
npm run dev

