/* APPROACHING TO PROBLEM SOLVING A CODE CHALLENGE

**Goal:** Design an interface with a button that when clicked, will randomly set a background colour to the document's body. Remember there are >16M colours available on the standard RGB scale, with each colour consisting of an R, G and B in 256 different shades (0 to 255, in decimal). 
*/

// PROBLEM 1: Random colour string - rgb(#, #, #)

// A) Randomize a number between 0.00 and 255.990 (256 options)
// B) Turn the number into an integer
// C) Create 3 random integers between 0 to 255
// D) Combine the colours into a string: rgb(#, #, #)

let colourR = Math.floor( Math.random() * 256 )
let colourG = Math.floor( Math.random() * 256 )
let colourB = Math.floor( Math.random() * 256 )
console.log(`rgb(${colourR}, ${colourG}, ${colourB})`);



// PROBLEM 2: Change the body's backgroundColor

// A) Find the body in the document, store it
// B) Modify the style of an element
// C) Specifically, the "background-color" property

let bodyEle = document.querySelector('body')
bodyEle.style.backgroundColor = `goldenrod`



// PROBLEM 3: Create a clickable button

let btnEle = document.querySelector('.randomize')
btnEle.addEventListener('click', (event) => {
  console.log('Click!')
})