//The purpose of this file is to not have everything stored in the component
//so as to seperate concerns
export default{
    login : user => {
        console.log("1" + user)
        return fetch("/user/login", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : "", role : ""}};
        })
    },

    register : user => {
        return fetch("/user/register", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json())
          .then(data => data);
    },

    logout : () => {
        return fetch("/user/logout")
                .then(res => res.json())
                .then(data => data);
    },
    //using context api to call this function
    //isAuthenticated helps to sync front end and back end so that if react app is closed
    //the user will stay logged in when they return
    isAuthenticated : () => {
        return fetch("/user/authenticated")
                .then(res => {
                    if (res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated : false, user : {username : "", role : ""}};
                });
    }
}