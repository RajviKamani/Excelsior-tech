document.getElementById('form').addEventListener("submit",function(e){
    e.preventDefault();


const name = document.getElementById('name').value.trim();
const dob = document.getElementById('dob').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value.trim();
const confirmpassword = document.getElementById('confirmpassword').value;
const phone = document.getElementById('phone').value;

let isValid = true;

const given_name = /^[A-Za-z\s]/;
if(!given_name.test(name)){
    alert("Only letter and spaces are allowed");
    isValid = false;
}

if(!/^\d+$/.test(phone)){
    alert("Only Number are valid");
}

if(password!= confirmpassword){
    document.getElementById('passworderror').textContent = "Passwords do not match";
}

if(isValid){
    const userlist = document.getElementById('list');
    const itemlist = document.createElement('li');
    itemlist.textContent = `${name} - ${email}`;
    userlist.appendChild(itemlist);

    alert("User Registered successfully!");
    document.getElementById('form').reset();
}

});