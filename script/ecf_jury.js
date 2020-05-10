document.getElementById("email2").addEventListener("input", function (e) 
{
    if (this.value != document.getElementById("email").value) 
    {
        e.preventDefault();
        document.getElementById("paraError").innerHTML = " les 2 adresses mail sont differentes";
    }
    else {
        document.getElementById("paraError").innerHTML = "";
    }
})

document.getElementById("juryInscription").addEventListener("submit", function (e) 
{
    var error;
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var email2 = document.getElementById("email2");
    var phone= document.getElementById("phone");
    var profession = document.getElementById("profesion");


    if (!email2.value) 
    {
        error = "veuillez confirmer votre email"
    }
    if (!email.value) 
    {
        error = "veuillez renseigner votre email"
    }
    if (!nom1.value) 
    {
        error = "veuillez renseigner votre nom"
    }
    if (email2.value != email.value) 
    {
        error = "les 2 adresses mail sont differentes"
    }
    if (!phone.value) 
    {
        error = "veuillez renseigner votre numeros de telephone"
    }
    if (!profession.value) 
    {
        error = "veuillez renseigner votre profession"
    }
    if (error) 
    {
        e.preventDefault();
        document.getElementById("paraError").innerHTML = error;
        return false;
    }
    else 
    {
        alert("Formulaire envoyé !\n Contenu mail :\n Votre identifiant est : cojury\n Votre mot de passe est : connexion \n Retournez à l'accueil pour vous connecter!");
        window.open("index.html");
    }

})