function createGameGrid(){
   
    const monelement = document.getElementById("game-grid");
    for(let i = 0;i < 16; i++){
        const tableau = ["😸","🐭","🐹","🐰","🐻","🐨","🦊","🐶","😸","🐭","🐹","🐰","🐻","🐨","🦊","🐶"];
        const cartes = document.createElement("div");
        monelement.appendChild(cartes);
        cartes.classList += "transparent";
        cartes.addEventListener("click",flipCartes);
        cartes.innerHTML = tableau[i];
    }
}


createGameGrid();

let firstCardFlip = null;
let secondCardFlip = null;


function flipCartes(){
    this.classList.remove("transparent");
        if (firstCardFlip === null){
            firstCardFlip = this;
        }
        else if (firstCardFlip !== null && secondCardFlip === null){
            secondCardFlip = this;
        }
        else if (firstCardFlip !== null && secondCardFlip !== null){
            checkForMatch();           
            firstCardFlip = this;
            secondCardFlip = null;
        }
}

function checkForMatch(){
    if (firstCardFlip.innerHTML !== secondCardFlip.innerHTML){
        firstCardFlip.classList.add("transparent");
        secondCardFlip.classList.add("transparent");
    }
}