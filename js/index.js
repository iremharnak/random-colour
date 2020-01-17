/* APPROACHING TO PROBLEM SOLVING A CODE CHALLENGE

**Goal:** Design an interface with a button that when clicked, will randomly set a background colour to the document's body. Remember there are >16M colours available on the standard RGB scale, with each colour consisting of an R, G and B in 256 different shades (0 to 255, in decimal). 
*/

// PROBLEM 1: Random colour string - rgb(#, #, #)
function getRandomColourAsString() {
  let colourR = Math.floor( Math.random() * 256 )
  let colourG = Math.floor( Math.random() * 256 )
  let colourB = Math.floor( Math.random() * 256 )

  return `rgb(${colourR}, ${colourG}, ${colourB})`
}


// PROBLEM 3: Create a clickable button
let btnEle = document.querySelector('.randomize')
btnEle.addEventListener('click', (event) => {

  // PROBLEM 2: Change the body's backgroundColor
  let bodyEle = document.querySelector('body')
  bodyEle.style.backgroundColor = getRandomColourAsString()

})