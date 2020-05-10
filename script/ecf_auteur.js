document.getElementById("email2").addEventListener("input", function () 
{
    if (this.value != document.getElementById("email").value) 
    {
        document.getElementById("paraError").innerHTML = " les 2 adresses mail sont differentes";
    }
    else {
        document.getElementById("paraError").innerHTML = "";
    }
})

document.getElementById("auteurInscription").addEventListener("submit", function (e) 
{
    var error;
    var nom = document.getElementById("nom1");
    var email = document.getElementById("email");
    var email2 = document.getElementById("email2");
    var phone = document.getElementById("phone");
    var oeuvre = document.getElementById("oeuvre");


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
    if (!oeuvre.value) 
    {
        error = "veuillez renseigner le nom de votre oeuvre"
    }
    if (error) 
    {
        e.preventDefault();
        document.getElementById("paraError").innerHTML = error;
        return false;
    }
    else 
    {
        alert("Formulaire envoyé !\n Contenu mail :\n Votre identifiant est : coauteur\n Votre mot de passe est : connexion \n Retournez à l'accueil pour vous connecter!");
        window.open("index.html");
    }

})

