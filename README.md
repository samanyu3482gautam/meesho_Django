# 🛍️ Meesho Clone — Django Project

A clone of Meesho built using **HTML, CSS, JavaScript**, and the **Django framework** with **Jinja templating**. This is a full-stack project developed as a group effort to simulate an e-commerce and employer portal platform.

---

## 🔧 Project Structure

This project is structured into **three Django apps**:

### 1. `core`  
- Home Page  
- User Profile Page  
- Shopping Pages (Product Listings & Detail Views)  
- Add to Cart Functionality  
- 🧠 **TrendBot AI Chatbot** (with a custom knowledge base)  

### 2. `account`  
- Login / Logout / Sign Up pages  
- Custom `Account` model  
- Uses Django's built-in `User` model with added custom fields via a OneToOne relationship  

### 3. `career`  
- Become a Supplier Page  
- Meesho Jobs Page  
- Resume Review Page (for company employers to review applicant submissions)  
- Custom models: `Position` and `Supply`  

---

## 🌟 Highlight Feature: TrendBot AI Chatbot

> ⚡ **TrendBot** is an integrated AI chatbot designed to assist users with queries related to products, orders, and platform features. It is powered by a custom-trained knowledge base and runs entirely from the frontend interface.

### 🔍 Key Features of TrendBot:

- 🤖 Smart query handling with natural-sounding responses  
- 📚 Integrated with a **custom knowledge base** specific to the Meesho clone  
- 💬 User-friendly chatbot interface built using JavaScript and Django  
- 🔒 Runs securely within the user session, no backend admin access required  
- 🧠 Helps users navigate the platform, understand features, and engage with products  

---

## 🧩 Models

- **`User`**: Django's built-in user model (for authentication)  
- **`Account`**: Extended user information (via OneToOne relationship)  
- **`Product`**: Stores product details (name, description, price, image, etc.)  
- **`Cart`**: Represents each user's shopping cart  
- **`AddToCart`**: Links products to the cart, tracking quantity  
- **`Position`**: Represents job openings at Meesho (used in career section)  
- **`Supply`**: Handles supplier applications submitted via the portal  

---

## 🔐 Features

- ✅ **User Authentication** (Login / Logout / Signup)  
- ✅ **Image Upload System** (stored in DB)  
- ✅ **Custom Resume Review Portal for Employers**  
- ✅ **Flash Messages** with a clean UI  
- ✅ **Responsive, UX-Friendly Design**  
- ✅ **Password Hashing & Security**  
- ✅ **🧠 TrendBot AI Chatbot** (custom-trained assistant)  
- ✅ **Cart System** — Add to cart, view cart, remove items  
- ✅ **Product Listing and Detail View Pages**  
- ✅ **Structured and Relational Models**  

---

## 🆚 Improvements from Previous Projects

- Modular and reusable codebase  
- Integrated chatbot for user support  
- Full cart and product system  
- Realistic employer-facing dashboard  
- Improved alerts and frontend UI  
- Structured model relationships (OneToOne, ForeignKey, etc.)

---

## 🌱 Future Scope

- 🛍️ Checkout & Order Placement  
- 🔍 Search Functionality  
- 💼 Resume Filtering and Employer Dashboards  
- 💳 Payment Gateway Integration  

---

## 👨‍💻 Tech Stack

- **Backend**: Django, Python  
- **Frontend**: HTML, CSS, JavaScript  
- **Templating**: Django Jinja2  
- **Database**: SQLite (scalable to PostgreSQL/MySQL)  
- **AI Chatbot**: 🧠 **TrendBot** (custom chatbot integration)  

---

## 👨‍👩‍👧‍👦 Team Members

This project was developed by students of **Chitkara University, Punjab, India**:

- **Samanyu Gautam**  
- **Tanisha Garg**  
- **Yashita Bansal**  
- **Palak Bisht**

---

## 📂 How to Run

```bash
# Clone the repo
git clone https://github.com/yourusername/meesho-clone.git
cd meesho-clone

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start the server
python manage.py runserver

