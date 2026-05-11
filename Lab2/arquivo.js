const numero = Math.floor(Math.random() * 100);
document.getElementById("botao").onclick = function() {
    const chute = document.getElementById("numero").value;

    
    
    if (chute == numero) {
        document.getElementById("body").style.setProperty("background-color", "green")
        alert("Acertou!");
    } 
    else { 
        document.getElementById("body").style.setProperty("background-color", "red")
        if (chute > numero) {
            alert("Menor");
        } 
        else {
            alert("Maior"); 
        }
    }
};
