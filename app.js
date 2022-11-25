const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//import library validator
const validator = require('validator');

//pertanyaan
rl.question('What is your name? ', (name) => {
    rl.question('What is your email? ', (email) => {
        rl.question('What is your number phone? ', (tlp) => {

            console.log(`Your name : ${name}`);

            //membuat logika email salah atau benar
            if(validator.isEmail(email) != true){
                console.log(`Your Email is wrong`);
            }
            else{
                console.log(`Your email : ${email}`);
            }

            //membuat logika telpon salah atau benar
            if(validator.isMobilePhone(tlp,'id-ID') == false){
                console.log(`Your Phone number is wrong`);
            }
            else{
                console.log(`Your phone : ${tlp}`);
            }
            console.log('Thank you');

            rl.close();
        })
    })
})
