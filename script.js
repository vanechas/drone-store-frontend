function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));
    document.getElementById('successMessage').textContent = '';

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorMessage = input.parentElement.querySelector('.error-message');

    if (errorMessage) {
        errorMessage.textContent = message;
    }

    input.classList.add('error');
    }

    if (!firstName) {
        showError('firstName', 'First Name is required.');
        isValid = false;
    }

    if (!lastName) {
        showError('lastName', 'Last Name is required.');
        isValid = false;
    }

    if (!email) {
        showError('email', 'Email is required.');
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        showError('email', 'Email is not valid.');
        isValid = false;
    }

    if (phone) {
        for (let char of phone) {
            if (!'0123456789 +-()'.includes(char)) {
                showError('phone', 'Phone number contains invalid characters.');
                isValid = false;
                break;
            }
        }
    }

    if (!message) {
        showError('message', 'Message is required.');
        isValid = false;
    }

    if (!terms) {
        showError('terms', 'You must agree to the Terms of Service.');
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
        console.log({ firstName, lastName, email, phone, message, terms });
        document.getElementById('contactForm').reset();
    }

    return isValid;
}