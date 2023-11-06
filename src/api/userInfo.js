import httpInstance from "@/net";
import {useAccountStore} from "@/store/useAccountStore";

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

function changeUserInfo(name, introduction) {
    return httpInstance({
        method: 'post',
        url: '/api/auth/changeprofile',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
            name: name,
            introduction: introduction
        }
    })
}

function getUserCourse() {
    return httpInstance({
        method: 'get',
        url: '/schedule/obtain',
    })
}

function loadUserCourse(password, course) {
    return httpInstance({
        method: 'post',
        url: '/schedule/upload',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
            password: password,
            course: course
        }
    })
}

export {doLogin, getSignCode, signUp, changeUserInfo, getUserCourse, loadUserCourse}