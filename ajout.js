import { supprimer, genererGalerie } from "./app.js";   

// ajouter un travail
const token = localStorage.getItem("token") 
const form = document.getElementById("myForm") 


form.addEventListener("submit", async e =>{
    e.preventDefault(); 
    const photoFile = e.target.querySelector("#photoFile")
    const titre = e.target.querySelector("[name=titre]").value 
    
    const categories = e.target.querySelector("[name=categorie]")
    const index = categories.selectedIndex
    const categorie = categories.options[index].id
    

// vider les champs de saisie
    previewPhoto.style.display = "none"
    document.querySelector("#titre").value = ""
    document.querySelector("#categorie").value = "" 

// examen du formulaire bien rempli notamment du téléchargement de photo 
if (photoFile.files.length === 0) {
    alert("Vous devez télécharger un dossier ")
    return
}
if (!photoFile.files[0].type.startsWith("image/")) {
    alert("Veuillez choisir un dossier en format d'image") 
    return
}
if (photoFile.files[0] > 5 * 1024 * 1024){
    alerte ("votre dossier est trop grand")
    return
}

// envoyer requete à api    

    const formData = new FormData()

    formData.append("image", photoFile.files[0]) 
    formData.append("title", titre)
    formData.append("category", categorie)
    const dataTest = Object.fromEntries(formData) 
    

    console.log(photoFile) 
    console.log(titre) 
    console.log(categorie) 
    console.log(token)
    console.log(dataTest) 


    fetch("http://localhost:5678/api/works", {
        method:"POST",
        headers: {"Authorization": `Bearer ${token}`}, 
        body: formData, 
    }).then(res =>{
        if (!res.ok) {
           alert("un probleme est survenu")
        }
        return res.json()
   }).then(data=>{          
       console.log("success") 
       alert("Envoi du projet réussi")
       genererGalerie() 
       
       
   }).catch(error=>
       console.log(error)
   )

   inputButton.value = "" 
   
}) 

// preview de photo
const inputButton = document.querySelector("input[type=file]")
inputButton.addEventListener("change",e =>{ 
    e.preventDefault; 
     
    const previewPhoto = document.querySelector("#previewPhoto")
    previewPhoto.style.display = null 
   
    
    const file = inputButton.files[0] 
    
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    
    fileReader.onload = function(ev){
     const imagePreview = document.getElementById("imagePreview")
     imagePreview.setAttribute("src", fileReader.result)  
     
}   
,false})

// function generer galerie

/*async function genererGalerie(){ 

    const newPieces = await fetch("http://localhost:5678/api/works").then(newPieces=> newPieces.json())
    document.querySelector(".gallery").innerHTML = ""
    document.querySelector(".gallery2").innerHTML = "" 
    
                 
 // generer pour gallery 
         for (let i = 0; i < newPieces.length; i++) {
             const photo = newPieces[i]
     
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
 // generer pour gallery2
     for (let i = 0; i < newPieces.length; i++) {
             
         const photo = newPieces[i]
         
         const galerie2 = document.querySelector(".gallery2")
     
         const figure2 = document.createElement("figure")   
         
         const elementDiv = document.createElement("span") 
         elementDiv.className = "elementDiv" 

         const elementBouton = document.createElement("i")
         elementBouton.className = "fa-solid fa-trash-can" 
         elementBouton.dataset.id = newPieces[i].id
         elementBouton.addEventListener("click", supprimer)
              
         const elementPhoto = document.createElement("img")      
         elementPhoto.src = newPieces[i].imageUrl
         elementPhoto.alt = newPieces[i].title
     
         elementDiv.appendChild(elementBouton) 
         figure2.appendChild(elementDiv)
         figure2.appendChild(elementPhoto)
         galerie2.appendChild(figure2)       
     }                      
     }*/



