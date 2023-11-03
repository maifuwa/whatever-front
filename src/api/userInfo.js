import httpInstance from "@/net";

export function doLogin(username, password) {
   return httpInstance({
       method: 'post',
       url: '/api/auth/login',
       data: {
           username: username,
           password: password
       }
   },{
       'Content-Type': 'application/x-www-form-urlencoded'
   });
}