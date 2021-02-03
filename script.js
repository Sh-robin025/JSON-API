
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userName(json))
    .catch(error => console.log(error))

function userName(data) {
    // with map
    const userName = data.map(data => data.username);
    // console.log(userName)
    const ol = document.getElementById("userNames");
    for (let i = 0; i < userName.length; i++) {
        const element = userName[i];
        const li = document.createElement("li");
        li.innerText = element;
        ol.appendChild(li);
    }
    // or with For loop

    // for (let i = 0; i < data.length; i++) {
    //     const element = data[i];
    //     const userName = element.username;
    //     const li = document.createElement("li");
    //     li.innerText = userName;
    //     ol.appendChild(li);
    // }
}

// API fun with function

function something() {
    fetch("http://www.boredapi.com/api/activity/")
        .then(element => element.json())
        .then(data => {
            document.getElementById("activity").innerText = data.activity;
            document.getElementById("link").inputMode = data.link;
        })
}
something()

// a little fun with time

setInterval(() => {
    something()
}, 5000);

// api fun without function

// fetch("http://www.boredapi.com/api/activity/")
//     .then(element => element.json())
//     .then(data => {
//         document.getElementById("activity").innerText = data.activity;
//     })

fetch("https://randomuser.me/api/?results=20")
.then(element => element.json())
.then(data =>{
    const user = data.results;
    // console.log(user)
    // const name = user.name;
    // console.log(name)
    const email = user.map(user => user.email);
    // console.log(email)
     for (let i = 0; i < email.length; i++) {
         const element = email[i];
         const li = document.createElement("li");
         li.innerText = element;
         document.getElementById("emails").appendChild(li);
     }
})