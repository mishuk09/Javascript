
function fetch1() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}
function users1() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => userdata(data));

}
function post() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data));
}

function userdata(data) {
    const ul = document.getElementById('user-name');
    for (const user of data) {
       
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name},Email:${user.email}`;
        ul.appendChild(li);
    }

}