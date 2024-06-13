## Todo Management Application

## Table of Contents
- [Project Overview](#project-overview)
- [Project Plan](#project-plan)
- [System Architecture Overview](#project-overview)
- [System Requirements](#solution-design)
- [Setup Instructions](#setup-instructions)
- [How To use App](#usage-instructions)
- [Deployment](#deployment)
- [Bonus Features](#bonus-features)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

### Daily Todo Management

### Project Overview
This web application enables users to manage their daily tasks efficiently. Users can create, update, delete view their their daily todos, as well as mark them as complete. This application will be utilizing local storage to ensure data persistence.

## Project Plan
### Day 1: Planning:
### Development Setup:
- Set up development environment
- Initialize project on github

### System Planning:
- Draft system archictecture
- Draft system Requirements

### Design:
- Create wireframes
- Outline basic features

### Project Requirements
- Outline Funtional requirements and Non functional requirements
- Outline how to use application.

### Project Plan - Day 2

### Break Down Frontend Components into Smaller Fragments
   
1. **Header**
   - Create a header component which includes a greeting.

2. **Task List**
   - Develop the main component to serve as the container for the main content and display the list of todos.
   - Integrate state management to dynamically display todos and implement Logic.

3. **Add Todo**
   - Create a form component to add new todos.
   - Include input fields for adding a todo.
   - Implement input validation.

4. **Delete Todo**
   - Add functionality to delete a todo.

5. **Update Todo**
   - Implement a component to update existing todos and add functionality.

6. **Persist Todos to Local Storage**
    - incorporate local storage

### Main Challenge For Day 2
- Incorporating a toggle feature within the frontend 


### Project Plan - Day 3

### Backend RESTFUL API using Node.js and Express. js

1. **Backend**
- Create a server within the backend of my project in a file named index.js.
- Install Express.js
- Implement basic api endpoints to GET, POST, PUT and DELETE todos
- Create an in memory database to store all the todos

### Main Challenge For Day 3
- Upon intergrating RESTFul API's, I've encountered an issue related to data persistence. It appears that data stored in the in-memory array (todos) on the server does not persist across server when it restarts.


### System Architecture Overview
The application follows a client-server architecture, where the client (web browser) interacts with the server (backend) to access and manipulate data and it includes the following components:

- **Frontend (Client):** This is the user interface of the website, including the layout design and navigation.
     This component will be responsible for displaying the daily todos, handling user interactions and other info to the user.

- **Backend(Server):** This includes the database, application logic and API endpoints for performing CRUD operations. This component is responsible for processing and storing the data and handling user requests.

- **Database:** The database module, stores and manages the data for the website such as daily todos and other relevant data.

### Web Stack and Choice of Architecture
### Web Stack:
- **Frontend** React + Vite is chosen for building dynamic user interfaces. It's component based architecture allows for modular development. React + Vite is a build tool that provides faster development compared to Create React App.

- **Backend** Express.js will be used for building the server and API. This framework provides a flexible and modular way to build web applications and it makes it easy to build RESTFUL API's.

- **Database** To be confirmed

- **Node js** Node js allows us to use javascript on both the client side and server side, making sharing code and skills between the two.

### Use of Tailwind
### Reasons for using Tailwind
- **Consistent** Tailwind provides a consistent design language across the application, making it easier to maintain and update UI.

- **Customizable** Tailwind is highly customizable, allowing you to tailor the framework to your specific needs.

### Motivation for Architecture Choices

- **React:** React's component-based structure streamlines UI development, making it easier to create interactive, dynamic user interfaces.

- **Express.js:** Express provides a minimalist framework for building the backend, enabling rapid development of RESTful APIs and middleware for authentication and authorization.

### System Requirements Specification

### Target Users
- **General Users:** Anyone that desires to be productive through out the day by creating, editing, deleting and viewing their todos. 

### Functional Requirements
- Todo creation, editing, and deletion
- Todo Listing 
- User-friendly interface
- CRUD operations for daily todos

### Non-Functional Requirements
- **Usability:** User interfaces must be user-friendly, ensuring easy navigation and interaction.
- **Accessibility:** The application should be accessible to users with disabilities in compliance with accessibility standards.

