$(()=>{
    console.log("ready");
    $.getJSON("http://localhost:61172/api/users/").done(
        users =>{
            console.log(users);
        }
    );
    console.log("After the getJson call");
})