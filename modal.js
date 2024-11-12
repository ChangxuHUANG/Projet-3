const token = localStorage.getItem("token") 
if (token) {
    document.querySelector(".js-modal1").style.display=null;
    document.querySelector(".bouton").style.display="none" 
    document.getElementById("loginLien").textContent = "logout"    
    document.getElementById("loginLien").addEventListener("click",e=>{
        e.preventDefault;
        localStorage.clear()
         
    })
} 

