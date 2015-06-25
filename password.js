var userLogin = {userName: "sahash", password: "general"}

var password;

for (var i=0; i < 3; i++){
    password = prompt("Enter password for user " + userLogin["userName"] + ".")
    if (password === userLogin["password"]){
        console.log("Passwords match! you're in");
        break;
    } else {
        console.log("Invalid Passwords!");
        if (i===2){
            alert("No more password attempts!");
        }
    }
}