errorImg = document.getElementsByClassName('errorImg');
errorMsg = document.getElementsByClassName('errorMsg');

for (i = 0; i < 4; i++)
{
    errorMsg[i].style.display = 'none';
}

submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', validate);

function validate()
{
    firstName = document.querySelector("input[name='firstName']");
    lastName = document.querySelector("input[name='lastName']");
    email = document.querySelector("input[name='email']");
    password = document.querySelector("input[name='password']");

    if(firstName.value == '')
    {
        firstName.style = "border: 2px solid hsl(0, 100%, 74%)";
        firstName.placeholder = "";
        errorImg[0].style.background = "url(./images/icon-error.svg) no-repeat 92%";
        errorMsg[0].style.display ="block";
    }
    if (lastName.value == '') 
    {
        lastName.style = "border: 2px solid hsl(0, 100%, 74%)";
        lastName.placeholder = "";
        errorImg[1].style.background = "url(./images/icon-error.svg) no-repeat 92%";
        errorMsg[1].style.display = "block";
    }
    if (email.value == '') 
    {
        email.style = "border: 2px solid hsl(0, 100%, 74%)";
        email.placeholder = "";
        errorImg[2].style.background = "url(./images/icon-error.svg) no-repeat 92%";
        errorMsg[2].style.display = "block";
    }
    if (password.value == '') 
    {
        password.style = "border: 2px solid hsl(0, 100%, 74%)";
        password.placeholder = "";
        errorImg[3].style.background = "url(./images/icon-error.svg) no-repeat 92%";
        errorMsg[3].style.display = "block";
    }
}
