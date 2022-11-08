const form = document.getElementById("form")
form.addEventListener("submit",pigLatin)

function pigLatin(event){event.preventDefault()
    let str = document.getElementById("user-input").value
    str = str.trim().toLowerCase();
    console.log(str)
    let firstVowel = str.match(/[aeiou]/);
    let firstPosition = str.indexOf(firstVowel);
    console.log(firstVowel + firstPosition)
    if (firstPosition > 0) {
    // return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
    document.getElementById("display-element").innerHTML = str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";
    }

    // return str + "yay";
        else {document.getElementById("display-element").innerHTML = str + "yay"};
    };
    
  




// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
