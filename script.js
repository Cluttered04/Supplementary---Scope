//Scope

// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjunction Function
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")

// Mod Squad
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
         HTMLRepresentation += `<div>${member}</div>`
        document.querySelector(".show-info").innerHTML = HTMLRepresentation
    })
}

//Simon Says

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
invalid = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k];
    if (currentLocation[0] >= 2) {
        const invalidLocation = true;
        invalid = invalid +1;
        console.log("The loop is running")
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    } else console.log("This is the else")
}
console.log(`There were ${invalid++} invalid locations`)
/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/




// Advanced Challenge: Lambda Llama
// Not only can functions take other functions as arguments, but functions can also return functions! This is marked as an advanced challenge because you haven't been introduced to this concept yet.

// The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.

// Remember, come to the staff and ask questions if you decide to take this one on and get stuck.

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    } 
    return namer();
}

const nameMaker = llamaNamer();
console.log(nameMaker);

