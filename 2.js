function isPasswordValid(password){ 
    let required = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_*])/;

    if((password.match(required)) && (password.length >= 8)) {
        console.log('true');
    } else { 
        console.log('false');
    }
}

isPasswordValid("123Qwer_");