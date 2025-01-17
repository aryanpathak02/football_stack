
# Match Statistics Viewer

A simple web application to view and search football match statistics using match IDs. The project uses a backend built with Node.js and MongoDB, and a frontend to display match details dynamically.

---

## Features

- **View Match Statistics**: See details such as goals, possession, passes, shots, shots on target, and corners for two teams.
- **Search Matches by ID**: Fetch and display match statistics by entering a match ID.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Getting Started

Follow these instructions to get the project up and running on your local machine.

---

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/match-stats-viewer.git
   cd match-stats-viewer
   ```

2. **Install Dependencies**:
   Navigate to the project folder and install the required dependencies:
   ```bash
   npm install
   ```

3. **Setup MongoDB**:
   - Start your MongoDB server.
   - Create a database named `football` (or update the connection string in `server.js` if needed).
   - Add match statistics using the `seedData` script provided in `seedData.js`.

4. **Start the Backend**:
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:5000`.

5. **Run the Frontend**:
   - If you are using a separate React or other frontend framework, ensure it connects to the backend API endpoints (e.g., `http://localhost:5000/getMatchStats`).

---

### API Endpoints

- **Search Match by ID**:
  - **Endpoint**: `/getMatchStats`
  - **Method**: GET
  - **Query Parameter**: `matchId`
  - **Example**: 
    ```bash
    http://localhost:5000/getMatchStats?matchId=1
    ```
  - **Response**: Returns match statistics for the given ID.
    ```json
    {
      "_id": "678a03bfa412374a0ea11a3d",
      "matchId": "1",
      "date": "03-05-2023",
      "teamA": {
        "goals": "1",
        "possession": "50%",
        "passes": "50",
        "shots": "5",
        "shotsOnTarget": "3",
        "corners": "6"
      },
      "teamB": {
        "goals": "1",
        "possession": "50%",
        "passes": "50",
        "shots": "5",
        "shotsOnTarget": "3",
        "corners": "6"
      }
    }
    ```

---

### Project Structure

```
match-stats-viewer/
│
├── backend/
│   ├── models/MatchStats.model.js  # Mongoose schema for match stats
│   ├── routes/matchRoutes.js       # API routes for match stats
│   ├── seedData.js                 # Script to populate the database with sample data
│   └── server.js                   # Entry point for the backend server
│
├── frontend/                       # Frontend application files
│   ├── components/                 # React components (if applicable)
│   ├── App.js                      # Main frontend app
│   ├── index.js                    # Entry point for the frontend
│   └── styles.css                  # CSS for the application
│
└── README.md                       # Documentation file
```

---

### Usage

1. Start the backend server.
2. Navigate to the frontend.
3. Use the input field to enter a match ID (e.g., `1`).
4. View detailed match statistics.

---

### Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Tools**: Mongoose, Postman (for testing API endpoints)

---

### Future Enhancements

- Add a search bar with autocomplete functionality for match IDs.
- Include additional match statistics such as fouls, yellow/red cards, and player details.
- Allow users to filter matches by date or team.
- Implement user authentication to manage favorite matches.

---

### License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Let me know if you want me to adjust anything further!
