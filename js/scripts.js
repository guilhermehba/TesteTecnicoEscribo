somar (10);

function somar(limite) {
    let multiplos3 = 0;
    let multiplos5 = 0;
    for (i=0; i < limite; i++){
        if (i % 3 === 0)
        multiplos3 += i;
        
        if (i % 5 === 0)
        multiplos5 += i;
    }
    console.log("A soma dos múltiplos de 3 e 5 abaixo do valor inserido é:",multiplos3+multiplos5);
}

