# Cryptocurrency Faucet Project

This project is a cryptocurrency faucet that allows users to claim small crypto rewards to their FaucetPay addresses. It consists of a backend server built with Node.js and Express, and a frontend interface for user interaction.

## Project Structure

```
crypto-faucet
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── routes
│   │   │   └── faucet.js
│   │   ├── controllers
│   │   │   └── faucetController.js
│   │   └── utils
│   │       └── faucetpay.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── index.html
│   ├── styles.css
│   ├── main.js
│   └── config.js
└── README.md
```

## Backend

The backend is responsible for handling requests related to the faucet functionality. It interacts with the FaucetPay API to process claims.

### Setup Instructions

1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### API Usage

- The backend exposes endpoints for claiming cryptocurrency. Refer to the `backend/src/routes/faucet.js` file for the available routes and their usage.

## Frontend

The frontend provides a user interface for users to enter their wallet addresses and claim rewards.

### Setup Instructions

1. Open the `frontend/index.html` file in a web browser.
2. Ensure that the backend server is running to handle API requests.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.