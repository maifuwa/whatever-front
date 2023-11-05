import httpInstance from "@/net";

function doLogin(username, password) {
   return httpInstance({
       method: 'post',
       url: '/api/auth/login',
       headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
       },
       data: {
           username: username,
           password: password
       }
   });
}

function getSignCode(email) {
    return httpInstance({
        method: 'post',
        url: '/api/auth/verifyemail',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            email: email,
            type: 'register'
        }
    });
}

function signUp(email, name, password, code) {
    return httpInstance({
        method: 'post',
        url: '/api/auth/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            email: email,
            name: name,
            password: password,
            code: code
        }
    })
}


export {doLogin, getSignCode, signUp}