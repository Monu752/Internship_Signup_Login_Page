function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginButton = document.querySelector('.submit-btn');

    if (username && password) {
        
        loginButton.classList.add('loading');
        loginButton.disabled = true;

        
        setTimeout(() => {
            alert('Login Successful!');
            loginButton.classList.remove('loading');
            loginButton.disabled = false;
        }, 2000);
    } else {
        alert('Please fill in all fields');
        
    }
}
