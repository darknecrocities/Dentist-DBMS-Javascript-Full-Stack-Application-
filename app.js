document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('patient-name').value;
    const email = document.getElementById('patient-email').value;
    const phone = document.getElementById('patient-phone').value;

    const response = await fetch('/api/patient/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone })
    });

    const data = await response.json();
    document.getElementById('messages').textContent = data.message;
});

document.getElementById('appointment-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const patientId = document.getElementById('appointment-patient-id').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    const response = await fetch('/api/appointment/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ patientId, appointmentTime })
    });

    const data = await response.json();
    document.getElementById('messages').textContent = data.message;
});

document.getElementById('payment-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const amount = document.getElementById('payment-amount').value;
    const method = document.getElementById('payment-method').value;

    const response = await fetch('/api/payment/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount, method })
    });

    const data = await response.json();
    document.getElementById('messages').textContent = data.message;
});
