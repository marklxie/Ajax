$(()=>{

    var user ={
        id:0, username:"xx4", password:"xx",
        firstname:"xx1", lastname:"x1x",
        phone:"01111111", email:"xxx@help1.com",
        isReviewer: true, isAdmin:true
    };
    $.ajax({
        method:"POST", 
        url: "http://localhost:61172/api/users/",
        data: JSON.stringify(user),
        contentType:"application/json"
    }).done(res => {
        console.log(res);
        getAll();
    })
    .fail(err => {
        console.error(err);
    });
    console.log("ready");
   const getAll = () =>{ 
       $.getJSON("http://localhost:61172/api/users/")
       .done(users =>{
            console.log(users);
        });
   }
    console.log("After the getJson call");
})