document.getElementById('btn1').addEventListener('click', function () {
    const background = document.getElementById('divider');
    background.style.backgroundColor = 'blue';

});

document.getElementById('btn2').addEventListener('click', function () {
    const background = document.getElementById('divider');
    const add = document.createElement('div');
    add.classList.add('friend');
    add.innerHTML = `
     <h3>Maruf</h3>`;
    background.appendChild(add);

});

