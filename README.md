
# Dentist DBMS Dashboard 🦷💻

Welcome to the **Dentist Clinic DBMS** Full-Stack Application! This system is designed to manage patient registrations, appointments, and payments for a dentist clinic. It includes a simple dashboard to view and interact with the data related to patients, appointments, and payment history. This application is built using **Node.js**, **Express**, **MongoDB**, and **JavaScript**.

---

## Features 🚀

- **Patient Registration** 📝  
  Register new patients by adding their name, email, and phone number.

- **Appointment Scheduling** 📅  
  Schedule appointments for patients with the option to specify appointment time.

- **Payment Processing** 💳  
  Process payments for dental services with support for various payment methods.

- **Dashboard Overview** 📊  
  View a comprehensive list of registered patients, scheduled appointments, and processed payments.

---

## Tech Stack ⚙️

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Tools**: Postman (for API testing), Git (for version control)

---

## Setup Instructions 🛠️

### 1. Clone the repository

```bash
git clone https://github.com/darknecrocities/Dentist-DBMS-Javascript-Full-Stack-Application-.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd Dentist-DBMS-Javascript-Full-Stack-Application
npm install
```

### 3. Set Up MongoDB

Ensure that you have **MongoDB** installed and running locally. If not, you can follow the instructions [here](https://www.mongodb.com/try/download/community) to install it.

Once MongoDB is set up, connect it to the project by ensuring it's running on `mongodb://localhost/dentist_clinic` (this is the default connection URL used in the application).

### 4. Run the Application

Start the application using the following command:

```bash
npm start
```

This will start the application on `http://localhost:3000`.

### 5. Testing the API

You can test the endpoints using **Postman** or any other API testing tool:

- **POST** `/api/patient/register`: Register a new patient.
- **POST** `/api/appointment/schedule`: Schedule a new appointment for a patient.
- **POST** `/api/payment/submit`: Submit a payment for dental services.

---

## Contributing 🤝

If you would like to contribute to the project, feel free to fork the repository, make your changes, and create a pull request. All contributions are welcome!

---

## License 📜

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments 🙏

- Thanks to the **MongoDB** team for their amazing database platform.
- Thanks to **Node.js** and **Express** for making backend development so much easier.

---

## Contact 💬

For any questions or feedback, feel free to reach out to:

- **Email**: parejasarronkian@gmail.com
- **GitHub**: [@darknecrocities](https://github.com/darknecrocities)

---

Enjoy using the **Dentist DBMS Dashboard**! 😄🦷
