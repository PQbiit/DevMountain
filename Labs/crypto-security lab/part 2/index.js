const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const key = [8,3,0,2,0,2,1];
const alphabet = ['a','b','c','d','e','f',
'g','h','i','j','k','l',
'm','n','o','p','q','r',
's','t','u','v','w','x','y','z'];

function cipher(message){
    let cipherMessage = ""
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
        if(keyIndex >= key.length){
            keyIndex = 0;
        }
        const cipherCharIndex = alphabet.findIndex(c => c === message[i]);
        if(cipherCharIndex + key[keyIndex] > 26){
            cipherMessage += alphabet[(cipherCharIndex + key[keyIndex])-26];
        }else{
            cipherMessage += alphabet[cipherCharIndex + key[keyIndex]];
        }
        keyIndex+=1;
    }
    console.log(`Your encrypted message: ${cipherMessage}`);
}

function decode(cipher){
    let originalMessage = ""
    let keyIndex = 0;
    for (let i = 0; i < cipher.length; i++) {
        if(keyIndex >= key.length){
            keyIndex = 0;
        }
        const cipherCharIndex = alphabet.findIndex(c => c === cipher[i]);
        if(cipherCharIndex - key[keyIndex] < 0){
            originalMessage += alphabet[(cipherCharIndex - key[keyIndex])+26];
        }else{
            originalMessage += alphabet[cipherCharIndex - key[keyIndex]];
        }
        keyIndex+=1;
    }
    console.log(`Your decrypted message: ${originalMessage}`);
}

console.log("Welcome to cypher!");
reader.question("Enter action (c => cipher, d => decode) and your message: ",(input)=>{
    let tokens = input.split(' ');
    let action = tokens[0];
    let message = tokens[1];
    if(action === 'c'){
        cipher(message);
    }else if(action === 'd'){
        decode(message);
    }
    reader.close();
});

