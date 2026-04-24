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
function toggletheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.className);
};
window.onload = function () {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
};
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
function loginUser(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;
    let error = document.getElementById("loginError");

    let savedEmail = localStorage.getItem("userEmail");
    let savedPass = localStorage.getItem("userPassword");

    error.innerText = "";

    if (email === "" || pass === "") {
        error.innerText = "Fill all fields";
        return;
    }

    if (email !== savedEmail || pass !== savedPass) {
        error.innerText = "Wrong Email or Password";
        return;
    }

    alert("Login Successful ");
    window.location.href = "index.html";
}
