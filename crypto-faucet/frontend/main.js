document.addEventListener('DOMContentLoaded', function() {
    const claimForm = document.getElementById('claim-form');
    const resultDiv = document.getElementById('result');

    claimForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const walletAddress = document.getElementById('wallet').value;
        const currency = document.getElementById('currency').value;

        const response = await fetch('http://localhost:3000/api/faucet/claim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wallet: walletAddress,
                currency: currency,
            }),
        });

        const data = await response.json();

        if (data.success) {
            resultDiv.innerHTML = `<p>Claim successful! Amount: ${data.amount} ${currency}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    });
});