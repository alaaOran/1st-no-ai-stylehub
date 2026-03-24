const loginButton = document.getElementById("loginButton");
   if (loginButton) {
       loginButton.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        if (email && password != "") {
                window.location.href = "/newjs/main_page.html";
        } else {
            alert("Please enter your email and password");
        }
    })
    };


    const SignupButton = document.getElementById("loginButton2");
    if (SignupButton) {
       SignupButton.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const username = document.getElementById("username").value.trim();


        if  (email !== "" && password !== "" && username !== "") {
            alert("Hey now you have an account");
            window.location.href = "/newjs/main_page.html";
        } else {
            alert("Please enter your email and password and username");
        }
    })
   };
