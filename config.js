let mivar = document.querySelector(".mibtn").addEventListener("click",function () {
    
    let eltexto = document.querySelector("#mitexto");
    mitexto.style.opacity = "1";
    mitexto.classList.add("texto");
    setTimeout(() => {
        document.querySelector("#mitexto").classList.remove("texto");
        mitexto.style.opacity = "0";
    }, 700);

});
