const pieces = await fetch("http://localhost:5678/api/works").then(pieces=> pieces.json())

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {
        const photo = pieces[i]

        const pieceElement = document.createElement("photo")
        const galerie = document.querySelector(".gallery")

        const figure = document.createElement("figure")   

        const elementFigCaption = document.createElement("figcaption")       
        elementFigCaption.innerText = photo.title

        const elementImage = document.createElement("img")
        elementImage.src = photo.imageUrl
        elementImage.alt = photo.title

        
        pieceElement.appendChild(elementImage)
        pieceElement.appendChild(elementFigCaption)
        figure.appendChild(pieceElement)
        galerie.appendChild(figure)       
    }
}

genererPieces(pieces) 

// gestion des boutons
const categories = await fetch("http://localhost:5678/api/categories").then(categories=>categories.json())

function genererBouton(categories) {
    for (let i = 0; i < categories.length; i++) {
        

        const pElement = document.createElement("button")
        const sectionBouton = document.querySelector(".bouton")

        pElement.dataset.id = categories[i].id
        pElement.className = `categorie${categories[i].id}` 
        pElement.textContent = categories[i].name 

        sectionBouton.appendChild(pElement) 
        
    }
    
}

genererBouton(categories)

const btnTout = document.querySelector(".btn-tous")
btnTout.addEventListener("click", ()=>{
    document.querySelector(".gallery").innerHTML = ""
    genererPieces(pieces)
})

const btnObjets = document.querySelector(".categorie1")
btnObjets.addEventListener("click",()=>{
    const piecesFiltrees1 = pieces.filter(function (piece) {
        return piece.categoryId == 1
    })

    document.querySelector(".gallery").innerHTML = ""
    genererPieces(piecesFiltrees1) 

})

const btnAppartements = document.querySelector(".categorie2")
btnAppartements.addEventListener("click",()=>{
    const piecesFiltrees2 = pieces.filter(function (piece) {
        return piece.categoryId == 2
    })

    document.querySelector(".gallery").innerHTML = ""
    genererPieces(piecesFiltrees2) 

})

const btnHR = document.querySelector(".categorie3")
btnHR.addEventListener("click",()=>{
    const piecesFiltrees3 = pieces.filter(function (piece) {
        return piece.categoryId == 3
    })

    document.querySelector(".gallery").innerHTML = ""
    genererPieces(piecesFiltrees3) 

}) 

//generation des photos dans la modale
    function genererPieces2(pieces){
    for (let i = 0; i < pieces.length; i++) {
                        
        const photo = pieces[i]
        
    
        const galerie2 = document.querySelector(".gallery2")
      
        const figure2 = document.createElement("figure")   
    
        const elementDiv = document.createElement("span") 
        elementDiv.className = "elementDiv"

        const elementBouton = document.createElement("i")
        elementBouton.className = "fa-solid fa-trash-can" 
        elementBouton.dataset.id = pieces[i].id
             
        const elementPhoto = document.createElement("img")      
        elementPhoto.src = pieces[i].imageUrl
        elementPhoto.alt = pieces[i].title
        
        elementDiv.appendChild(elementBouton) 
        figure2.appendChild(elementDiv)
        figure2.appendChild(elementPhoto) 
        
        galerie2.appendChild(figure2)       
                }        
    }


genererPieces2(pieces)  

//gestion des categories 
function genererCategories(categories){
    for (let i = 0; i < categories.length; i++) {
        
        const sectionCategories = document.getElementById("categorie")
        const optionElement = document.createElement("option")
        
        optionElement.value = categories[i].name
        optionElement.textContent = categories[i].name
        optionElement.id = categories[i].id 
    

        sectionCategories.appendChild(optionElement) 
        
    }
}
genererCategories(categories) 



