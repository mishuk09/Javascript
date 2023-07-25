function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}
loadPosts();
function displayPosts(posts) {
    const section = document.getElementById('post');
    for (const post of posts) {
        console.log(post.title);
        const childSec = document.createElement('div');
        childSec.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body} </p>`
        section.appendChild(childSec);
        // console.log(post)
    }
}