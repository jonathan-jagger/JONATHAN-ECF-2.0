document.getElementById("pwd2").addEventListener("input", function (e) 
{
    if (this.value != document.getElementById("pwd").value) 
    {
        e.preventDefault();
        document.getElementById("paraError").innerHTML = "Vos mots de passe sont differents";
    }
    else 
    {
        document.getElementById("paraError").innerHTML = "";
    }
})

document.forms["auteurRemplir"].addEventListener("submit", function (e) 
{
    var error;

    var inputs = this;
    // ici la comparaison de mail
    for (var i = 0; i < inputs.length; i++) 
    {
        if (!inputs[i].value) 
        {
            error = "Veuillez renseigner tout les champs !"
        }
    }
    if (pwd2.value != pwd.value) 
    {
        error = "Entrez des mots de passe identiques! avec 10 caractéres une majuscule et une minuscule";
    }

    if (error) 
    {
        e.preventDefault();
        document.getElementById("paraError").innerHTML = error;
        return false;
    }
    else 
    {
        alert("mot de passe et pseudo changés !");
        window.open("information_auteur.html");
    }

})
function validate() { 
    var msg; 
    var str = document.getElementById("pwd").value; 
    if (str.match( /[0-9]/g) && 
            str.match( /[A-Z]/g) && 
            str.match(/[a-z]/g) && 
            str.match( /[^a-zA-Z\d]/g) &&
            str.length >= 10) 
        msg = "<p style='color:green'>Mot de passe fort.</p>"; 
    else 
        msg = "<p style='color:red'>Mot de passe faible.</p>"; 
    document.getElementById("paraError").innerHTML= msg; 
} 