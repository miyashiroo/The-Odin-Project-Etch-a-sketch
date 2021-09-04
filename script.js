
let gridTotal = (16*16)


function makeGrid (gridTotal) { 
    for (let i = 0 ; i < gridTotal; i++) {
        const container = document.querySelector('#container')
        const createDiv = document.createElement('div')
        createDiv.className = "grid-item"
        container.appendChild(createDiv)
        
        
    }

    
}
  
function changeBackground () {
    const selectDiv = document.querySelectorAll('.grid-item')
    for(let el of selectDiv){
        el.addEventListener('mouseover', function(){
            el.style.backgroundColor = 'black'
            
            
        });
      }



 }

function removeDiv () {
    

    document.querySelectorAll(".grid-item").forEach(e => e.remove());




}


makeGrid(gridTotal)
changeBackground()





 

let grid = 0 
const button = document.querySelector('button')
button.addEventListener('click', () => {
    grid = prompt('How many squares u wanna have?')
    gridTotal = 0
    gridTotal = grid * grid
    console.log(grid, gridTotal)
    removeDiv()
    makeGrid(gridTotal)
    changeBackground()
})








