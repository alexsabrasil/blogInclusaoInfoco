function vermais(){
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnLermais = document.getElementById("btnLerMais");

    if(pontos.style.display ==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLermais.innerHTML="Ler mais";


    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLermenos.innerHTML="Ler menos";
    }
}