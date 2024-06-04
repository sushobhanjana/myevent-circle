const EMAIL = 'admin@gmail.com';
const PASSWORD = 'password'

export const authenticateUser = (email, password) => {
    // Replace with your authentication logic/API call
    return email === EMAIL && password === PASSWORD;
};