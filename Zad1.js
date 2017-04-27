var element = document.getElementById("prvi").innerHTML;
document.getElementById("drugi").innerHTML = element;

function promjena()
{
    document.getElementById("slikica").src = "slika2.jpg";
}

function promjenaBoje()
{
    document.getElementById("prvi").style.backgroundColor = "blue";
}

function promjenaDiv()
{
    var element2 = document.getElementById("golijat");
    if (element2.style.visibility == "visible"){
        element2.style.visibility = "hidden";
        document.getElementById("gumb1").innerHTML = "Pokazi"
    }
    else{
        element2.style.visibility = "visible";
        document.getElementById("gumb1").innerHTML = "Sakrij"
    }
}