
function encoder(message) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let encodedWord = "";
        let splitWord = message.split(" ");
                for (const element of splitWord) {
                    for (const letter of element) {
                        let wordIndex = arr.indexOf(letter);   
                        encodedWord += arr.reverse()[wordIndex]    
                    }
                    encodedWord += " ";
    }
    console.log(encodedWord);
}

encoder("bbb aaaaaaaaaa zzz");

function decoder(message) {
    let reverseArr = "abcdefghijklmnopqrstuvwxyz".split('').reverse();    
    let decodedWord = "";
        let splitWord = message.split(" ");
                for (const element of splitWord) {
                    for (const letter of element) {
                        let wordIndex = reverseArr.indexOf(letter);   
                        decodedWord += reverseArr.reverse()[wordIndex]
                    }
                    decodedWord += " ";
    }
    console.log(decodedWord);
}

decoder("zzzz yyyyyy aaaa");

// [
//     'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q',
//     'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g',
//     'f', 'e', 'd', 'c', 'b', 'a'
//   ];