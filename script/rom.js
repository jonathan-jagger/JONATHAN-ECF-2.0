document.forms["connexionIndex"].addEventListener("submit", function (e) 
{
    var errorCo;

    var inputs = this;

    if (inputs["mdp"].value != "connexion") 
    {
        errorCo = "Mot de passe incorrect";
    }
    if (inputs["id"].value != "cojury" && inputs["id"].value != "coauteur") 
    {
        errorCo = "Identifiant inconnu";
    }
    else {
        if (inputs["id"].value == "cojury") 
        {
            alert("welcome jury!");
            window.open("information_jury.html");
        }
        else {
            if (inputs["id"].value == "coauteur") 
            {
                alert("welcome auteur!");
                window.open("information_auteur.html");
            }
        }


        //allez vers page jury ou auteur selon id
    }

    if (errorCo) 
    {
        e.preventDefault();
        document.getElementById("paraErrorCo").innerHTML = errorCo;
        return false;
    }

})