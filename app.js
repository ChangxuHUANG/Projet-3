export {supprimer, genererGalerie};  

const token = localStorage.getItem("token") 

const modalOpen = document.querySelector(".js-modal1")
let modal = null 
const hideobj = document.querySelector(".hidebg") 
/*methhode pour supprimer les travaux*/
const supprimer = async function (event){
    event.preventDefault; 

        const id = event.target.dataset.id
        fetch("http://localhost:5678/api/works/"+id,{
            method:"DELETE",
            headers: {"Authorization": `Bearer ${token}`,
                     "Content-Type": "application/json"}, 

        }).then(res =>{
             if (!res.ok) {
                console.log("probleme")
             }
             return res.text() 
        }).then(data=>{
            console.log("success") 
            genererGalerie ()           
             
        }).catch(error=>
            console.log(error)
        )
        
        
}


modalOpen.addEventListener("click", function openModal(event){
    event.preventDefault;
    const target = document.querySelector(event.target.getAttribute("href"))
    target.style.display = null 
    target.removeAttribute("aria-hidden")
    target.setAttribute("arria-modal", "true")
    /*background noir*/ 
    hideobj.style.display="block"  
    hideobj.style.height = document.body.scrollHeight+"px"

    /*fermer la modal*/
    modal = target
    

    const closeModal = async function(event) {
        if(modal === null) return

        event.preventDefault;
        hideobj.style.display = "none"
        modal.style.display = "none"
        modal.removeAttribute("arria-modal")
        modal.setAttribute("aria-hidden","true")
        modal.removeEventListener("click",closeModal)
        document.querySelector(".js-close-modal1").removeEventListener("click", closeModal)
        modal =null
        
    }
    hideobj.addEventListener("click", closeModal)
    document.querySelector(".js-close-modal1").addEventListener("click", closeModal) 

    /*ajouter à chaque icone effet de click pour supprimer */
    var piecesElements = document.querySelectorAll(".gallery2 i")

    for (let i = 0; i < piecesElements.length; i++) {
        piecesElements[i].addEventListener("click", supprimer)}
    })
            
                async function genererGalerie(){   
                const piecesNew = await fetch("http://localhost:5678/api/works").then(pieces=> pieces.json())
                
                    // generer pour gallery1 
                    document.querySelector(".gallery").innerHTML=""
                    document.querySelector(".gallery2").innerHTML="" 

                    for (let i = 0; i < piecesNew.length; i++) {
                        const photo = piecesNew[i]
                
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
                        galerie.appendChild(pieceElement)       
                    }

                // generer pour gallery2
                                             
                for (let i = 0; i < piecesNew.length; i++) {
                        
                    const photo = piecesNew[i]
     
                    const galerie2 = document.querySelector(".gallery2")
      
                    const figure2 = document.createElement("figure")   
                    
                    const elementDiv = document.createElement("span")
                    elementDiv.className = "elementDiv"

                    const elementBouton = document.createElement("i")
                    elementBouton.className = "fa-solid fa-trash-can" 
                    elementBouton.dataset.id = piecesNew[i].id
                    elementBouton.addEventListener("click", supprimer)
             
                    const elementPhoto = document.createElement("img")      
                    elementPhoto.src = piecesNew[i].imageUrl
                    elementPhoto.alt = piecesNew[i].title
           
                    elementDiv.appendChild(elementBouton) 
                    figure2.appendChild(elementDiv)
                    figure2.appendChild(elementPhoto)
                    galerie2.appendChild(figure2)   } }                                                                                                                              

const modal2Open = document.querySelector(".js-modal2")
let modal2 = null

modal2Open.addEventListener("click", function openModal2(event){
    event.preventDefault;
    
 
    /*fermer la modal 1*/
    const modal1 = document.getElementById("modal1")
    modal1.style.display = "none"
    modal1.removeAttribute("arria-modal")
    modal1.setAttribute("aria-hidden","true")
        

   /*ouvrir modal 2*/ 
    const target2 = document.getElementById("modal2")
    
    target2.style.display = null
    target2.removeAttribute("aria-hidden")
    target2.setAttribute("arria-modal", "true")

    /*fermer la modal2*/
    modal2 = target2
    

    const closeModal2 = function(event) {
        if(modal2 === null) return

        event.preventDefault;
        hideobj.style.display = "none"
        modal2.style.display = "none"
        modal2.removeAttribute("arria-modal")
        modal2.setAttribute("aria-hidden","true")
        modal2.removeEventListener("click",closeModal2)
        document.querySelector(".js-close-modal2").removeEventListener("click", closeModal2)
        modal2 =null
        
    }
    hideobj.addEventListener("click", closeModal2) 
    document.querySelector(".js-close-modal2").addEventListener("click", closeModal2) 
})

const back = document.querySelector(".back")
back.addEventListener("click", (event)=>{
    event.preventDefault;

    /*fermer la modal2*/

        modal2.style.display = "none"
        modal2.removeAttribute("arria-modal")
        modal2.setAttribute("aria-hidden","true")
        modal2 =null

    /** ouvrir modal 1*/
    const target3 = document.getElementById("modal1")
    target3.style.display = null 
    target3.removeAttribute("aria-hidden")
    target3.setAttribute("arria-modal", "true")

    /** fermer modal 1 */
    document.querySelector(".js-close-modal1").addEventListener("click",function closeModal(event){
        event.preventDefault;
        
        const target4 = document.getElementById("modal1")
        target4.style.display = "none"
        target4.removeAttribute("arria-modal")
        target4.setAttribute("aria-hidden","true")
        target4.removeEventListener("click",closeModal)
        document.querySelector(".js-close-modal1").removeEventListener("click", closeModal)
        modal =null

    })

}) 


