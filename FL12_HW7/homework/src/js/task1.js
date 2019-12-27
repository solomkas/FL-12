let email = prompt('Please, enter your e-mail address');
let pass, change, oldpswrd, newpswrd, repeat;

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < 5) {
    alert('I do not know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    pass = prompt('Please, enter your password');
    if (pass === '' || pass === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && pass !== 'UserPass' || 
               email === 'admin@gmail.com' && pass !== 'AdminPass') {
        alert('Wrong password');
    } else {
        change = confirm('Do you want to change your password?');
       
        if (change) {
            oldpswrd = prompt('Write the old password');
            
            if (oldpswrd === '' || oldpswrd === null) {
                alert('Canceled');
            } else if (oldpswrd === pass) {
                newpswrd = prompt('Please, write the new password');
                
                if (newpswrd === '' || newpswrd === null) {
                    alert('Canceled');
                } else if (newpswrd.length < 6) {
                    alert('It is to short password. Sorry.');
                } else {
                    repeat = prompt('Please, write the password again');
                    
                    if (repeat !== newpswrd) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    }
} else {
    alert('I do not know you');
}