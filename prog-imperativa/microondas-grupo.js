/*
GRUPO Sala 5 
Alunos: Eduardo Seiji Sakamoto; 
        Anderson Ferreira N Dos Santos; 
        Murilo Alex Aparecido da Silva; 
        Thiago Perez Funari; 
        Daniel Marques do Nascimento      
*/

let menu = "macarrão";
let prato = false;
let tempoPadrao = 0;
let tempo = 0;
function preparo(menu, prato, tempo){
switch(menu){
    case "pipoca":
        tempoPadrao = 10;
        if(prato == true){
        console.log("Opção pipoca selecionado tempo " + tempoPadrao + " segundos");
        console.log("Prato pronto bom apetite")
        }else if(prato == false){
            console.log(alteraTempo(tempo));
        }    
        break;
    case "macarrão": 
        tempoPadrao = 8;
        if(prato == true){
        console.log("Opção " + menu + " selecionado tempo "+ tempoPadrao + " segundos");
        console.log("Prato pronto bom apetite")
        }else if(prato == false){
            console.log(alteraTempo(tempo));
        }    
        
        break;
    case "carne":
        tempoPadrao = 15;
        if(prato == true){
        console.log("Opção " + menu + " selecionado tempo "+ tempoPadrao + " segundos");
        console.log("Prato pronto bom apetite")
        }else if(prato == false){
            console.log(alteraTempo(tempo));
        }
        break;
    case "feijão":
        tempoPadrao = 12;
        if(prato == true){
        console.log("Opção " + menu + " selecionado tempo "+ tempoPadrao + " segundos");
        console.log("Prato pronto bom apetite")
        }else if(prato == false){
            console.log(alteraTempo(tempo));
        }
        break;
    case "brigadeiro":
        console.log("Brigadeiro  segundos " + "prato pronto bom apetite");
    default:
        console.log("Prato inexistente");
    }
}
    function alteraTempo(tempo){
        if((menu == "pipoca" || menu == "macarrão" || menu == "carne" || menu == "feijão" || menu == "brigadeiro") && tempo < tempoPadrao){
            return "Opção selecionada " + menu +  " tempo insuficiente";
        }

        if ((menu == "pipoca" || menu == "macarrão" || menu == "carne" || menu == "feijão" || menu == "brigadeiro") && tempo >= tempoPadrao && tempo < tempoPadrao * 2){
            return "Opção selecionada " + menu + " Tempo " + tempo + " segundos \nPrato pronto bom apetite";
        }

        if ((menu == "pipoca" || menu == "macarrão" || menu == "carne" || menu == "feijão" || menu == "brigadeiro") && tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3){
            return "Opção selecionada " + menu + " tempo " + tempo + " segundos \nSua comida queimou";
        }

          if ((menu == "pipoca" || menu == "macarrão" || menu == "carne" || menu == "feijão" || menu == "brigadeiro") && tempo >= tempoPadrao * 3){
            return "Opção selecionada " + menu + " tempo " + tempo + " segundos \nKabummmmmmmmm";
        }
        
}
    console.log(preparo("macarrão", true, 20));


