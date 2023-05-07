document.getElementById('loginButton').addEventListener('click', function() {
    const emailFeild = document.getElementById('userEmail');
    const userEmail = emailFeild.value;
    const passwordFeild = document.getElementById('userPassword');
    const userPassword = passwordFeild.value;

    console.log(userEmail);
    console.log(userPassword);

    if (userEmail == 'mishukinfo09@gmail.com' && userPassword == '123456') {
        // console.log("Valid ")
        window.location.href = 'bankDetils.html';

    }
})