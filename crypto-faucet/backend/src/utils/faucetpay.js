const axios = require('axios');

const FAUCETPAY_API_URL = 'https://faucetpay.io/api/v1';

async function claimFaucet(walletAddress, currency) {
    try {
        const response = await axios.post(`${FAUCETPAY_API_URL}/request`, {
            wallet: walletAddress,
            currency: currency
        });
        return response.data;
    } catch (error) {
        throw new Error('Error claiming faucet: ' + error.message);
    }
}

async function getFaucetBalance(walletAddress, currency) {
    try {
        const response = await axios.get(`${FAUCETPAY_API_URL}/balance`, {
            params: {
                wallet: walletAddress,
                currency: currency
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching faucet balance: ' + error.message);
    }
}

module.exports = {
    claimFaucet,
    getFaucetBalance
};