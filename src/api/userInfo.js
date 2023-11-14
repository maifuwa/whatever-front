import httpInstance from "../net";

function doLogin(name, password) {
    return httpInstance({
        method: 'POST',
        url: '/auth/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            username: name,
            password: password
        }
    });
}

function getSignCode(email) {
    return httpInstance({
        method: 'POST',
        url: '/auth/verifyemail',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            email: email,
            type: 'register'
        }
    });
}

function doSign(name, email, password, code) {
    return httpInstance({
        method: 'post',
        url: '/auth/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            name: name,
            email: email,
            password: password,
            code: code
        }
    });
}

function doLogout() {
    return httpInstance.get("/auth/logout");
}

export {doLogin, getSignCode, doSign, doLogout}