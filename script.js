const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-Link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});