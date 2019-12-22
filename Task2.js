/*Sólo se contemplan números entre el 1 y el 3999

* Los símbolos I, X, C y M se pueden repetir hasta tres veces.
* Los símbolos V, L y D no pueden repetirse.
* Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
* Los símbolos I, X y C se restan si están a la izquierda de otro mayor y solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
* I se resta de V y X
* X se resta de L y C
* C se resta de D y M
* Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.*/

function inGaiusIuliusCaesar (value) {
    
    if (value <= 3999 && !value == 0) {

        let result = '';
        let arabicArray = value.toString().split('');
        arabicArray = arabicArray.reverse();
        let units;
        let tens;
        let hundreds 
        let thousands;

        switch (arabicArray[3]) {
            case '0': break;
            case '1': result += "M"; break;
            case '2': result += "MM"; break
            case '3': result += "MMM"; break;
            case undefined: break;
        }

        switch (arabicArray[2]) {
            case '0': break;
            case '1': result += "C"; break;
            case '2': result += "CC"; break
            case '3': result += "CCC"; break;
            case '4': result += "CD"; break;
            case '5': result += "D"; break;
            case '6': result += "DC"; break;
            case '7': result += "DCC"; break;
            case '8': result += "DCCC"; break;
            case '9': result += "CM"; break;
            case undefined: break;
        }

        switch (arabicArray[1]) {
            case '0': break;
            case '1': result += "X"; break;
            case '2': result += "XX"; break
            case '3': result += "X"; break;
            case '4': result += "XL"; break;
            case '5': result += "L"; break;
            case '6': result += "LX"; break;
            case '7': result += "LXX"; break;
            case '8': result += "LXXX"; break;
            case '9': result += "XC"; break;
            case undefined: break;
        }

        switch (arabicArray[0]) {
            case '0': break;
            case '1': result += "I"; break;
            case '2': result += "II"; break
            case '3': result += 'III'; break;
            case '4': result += "IV"; break;
            case '5': result += "V"; break;
            case '6': result += "VI"; break;
            case '7': result += "VII"; break;
            case '8': result += "VIII"; break;
            case '9': result += "IX"; break;
            case undefined: break;
        }

        console.log(result);

    } else {
        console.log("Como te pases de listo, en el coliseo te explico un par de cosas.");
    }
}

inGaiusIuliusCaesar(3500);


// Funcion para comprobar si el numero suma o resta.    
function intTransform(value) {
    
    switch (value) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

//Funcion de calculo
function alAlandalus(value) {

    if (value && isNaN(value)) { //Si value es 'True' y no es numerico se ejecuta la sentencia
                
        let now;
        let previous;
        let arabic = intTransform(value.charAt(0)); //Se establece valor ya que no existe luego la posicion -1.

        for (var i = 1; i < value.length; i++) {
        
            now = intTransform(value.charAt(i));
            previous = intTransform(value.charAt(i-1));
            
            if (now <= previous) {
                arabic += now; //Se añade al ser mayor (por tanto no resta) en el anterior
            } else {
                arabic = arabic - previous*2 + now; //Se debe restar la suma anterior (antes tecnicamente sumaba) y la resta real (*2). Sumamos el actual.
            }
        }

        console.log(arabic);

    } else {
        console.log('Al·lahu-àkbar');
    }
}

alAlandalus('MCMCD');


function romanChecker(value) {

    let regexp = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    
    if (regexp.test(value)) {
        console.log("El numero romano le gustaria al mismisimo HULIO Cesar.");
    } else {
        console.log("HULIO Cesar no gustar este numero. HULIO enfadar.");
    }
}

romanChecker('IIII');