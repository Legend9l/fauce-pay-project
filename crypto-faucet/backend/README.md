# Cryptocurrency Faucet Backend

This project is a cryptocurrency faucet that allows users to claim small crypto rewards through the FaucetPay API.

## Project Structure

- **src/app.js**: Entry point of the backend application. Sets up the Express server, middleware, and routes.
- **src/routes/faucet.js**: Defines routes related to the faucet functionality for claiming cryptocurrency.
- **src/controllers/faucetController.js**: Contains the `FaucetController` class with methods for processing claims and interacting with the FaucetPay API.
- **src/utils/faucetpay.js**: Utility functions for making requests to the FaucetPay API and handling responses.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd crypto-faucet/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- **POST /faucet/claim**: Claims cryptocurrency for a given wallet address and currency.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.