$(() =>{

    let tbody =$("#users");
    $.ajax({
        method:"GET", 
        url: "http://localhost:61172/api/users/",
        success: function(response){
            var users = response;
            for(let i of users){
                let tr = $("<tr></tr>");
                let tdId = $(`<td>${i.id}</td>`);
                let tduser = $(`<td>${i.username}</td>`);
                let tdname = $(`<td>${i.firstname} ${i.lastname}</td>`);
                let tdemail = $(`<td>${i.email}</td>`);
                let tdphone = $(`<td>${i.phone}</td>`);
                let tdadmin = $(`<td>${i.isAdmin}</td>`);
                let tdreview = $(`<td>${i.isReviewer}</td>`);
                tr.append(tdId).append(tduser).append(tdname).append(tdphone).append(tdemail).append(tdreview).append(tdadmin);
                tbody.append(tr);
            }
        }
    })
    
    const getAll = () =>{ 
        $.getJSON("http://localhost:61172/api/users/")
        .done(users =>{
             console.log(users);
         });
    }
    console.log("After the getJson call");
})