const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const validator = require('validator');

rl.question('What is your name? ', (name) => {
    rl.question('What is your email? ', (email) => {
        rl.question('What is your number phone? ', (tlp) => {

            console.log(`Your name : ${name}`);

            if(validator.isEmail(email) != true){
                console.log(`Your Email is wrong`);
            }
            else{
                console.log(`Your email : ${email}`);
            }

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
