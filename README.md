# 🛍️ Meesho Clone — Django Project

A clone of Meesho built using **HTML, CSS, JavaScript**, and the **Django framework** with **Jinja templating**. This is a full-stack project developed as a group effort to simulate an e-commerce and employer portal platform.

---

## 🔧 Project Structure

This project is structured into **three Django apps**:

### 1. `core`  
- Home Page  
- User Profile Page  

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

## 🔐 Features

- ✅ **User Authentication** (Login / Logout / Signup)  
- ✅ **Image Upload System** (directly stored in the database)  
- ✅ **Custom Resume Review Portal for Employers**  
  - Employers can view and manage resume data directly from the frontend  
  - No need to access backend/admin panel manually  
- ✅ **Flash Messages** with clean, styled UI  
- ✅ **Responsive and UX-Friendly UI**  
  - Designed for both users and employers  
- ✅ **Password Security** (hashed and safely stored)  
- ✅ **Structured Database Models** for better data handling

---

## 🆚 Improvements from Previous Projects

- Enhanced UI for flash messages and alerts  
- More secure and organized database system  
- Frontend-based employer interaction — no hardcoded data access  
- More modular code and reusable components  

---

## 🌱 Future Scope

- 🛒 Cart functionality  
- 🔍 Working Search Bar  
- 💼 Additional Employer Tools and Filters  
- 💳 Secure Payment System Integration  

---

## 👨‍💻 Tech Stack

- **Backend**: Django, Python  
- **Frontend**: HTML, CSS, JavaScript  
- **Templating**: Django Jinja2  
- **Database**: SQLite (can be scaled up to PostgreSQL/MySQL)  

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
