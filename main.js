const orderForm = document.querySelector('.order-form');
orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(orderForm);

    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phone: formData.get('phone'),
        order: formData.get('yourOrder'),
        address: formData.get('address'),
        notes: formData.get('specialNotes')
    };
    if (data.phone.length < 11) {
        alert("please enter a valid phone number with at least 11 digits.");
        return;
    }
    console.log("okay", data);

    alert(`thank you ${data.firstName}! your order ( ${data.order} ) has been submitted successfully.`);
    orderForm.reset();
});
function signupUser(e) {
    e.preventDefault();

    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPassword").value;
    let confirm = document.getElementById("confirmPassword").value;
    let error = document.getElementById("signupError");

    error.innerText = "";

    if (email === "" || pass === "" || confirm === "") {
        error.innerText = "Please fill all fields";
        return;
    }

    if (!email.includes("@")) {
        error.innerText = "Invalid Email";
        return;
    }

    if (pass.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    if (pass !== confirm) {
        error.innerText = "Passwords do not match";
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", pass);

    alert("Account Created Successfully ");
    window.location.href = "login.html";
}
function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
}

applyTheme();
function toggletheme() {
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
}
function signupUser(event) {
    event.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorElement = document.getElementById('signupError');
    if (password !== confirmPassword) {
        errorElement.innerText = "Passwords do not match!";
        return;
    }
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert("Account created successfully! Please Log in.");
    window.location.href = "login.html";
}
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    if (email === storedEmail && password === storedPassword) {
        alert("Welcome back to COOK ZONE!");
        window.location.href = "index.html";
    } else {
        errorElement.innerText = "Invalid Email or Password!";
    }
}
