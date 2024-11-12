
/*function LoginUser () {*/
    
const Login = document.querySelector(".formLogin")
Login.addEventListener("submit", function(event){
    event.preventDefault(); 

    

    const email = event.target.querySelector("[name=mail]").value
    const password = event.target.querySelector("[name=password]").value 
    const chargeUtile = JSON.stringify({"email":email, "password": password})

    try{const reponse = fetch("http://localhost:5678/api/users/login",{
      method :"POST",
      headers:{"Content-Type": "application/json"},
      body: chargeUtile, }).then(data=>{
         
      if (data.ok) {
        return data.json().then(dataFinal=>{
        window.localStorage.setItem("token",dataFinal.token)
        window.location.href="/edit.html"
        })
      }

      else {
        alert("Votre identifiant ou mot de pass n'est pas correct")
        throw new Error("erreur de connexion")
        
      }}

     
      
    )} catch (error){
      alert("un probleme est survenu")

    }
  
    
  })
      


