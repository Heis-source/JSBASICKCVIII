//Nos dan un número entre el 1 y 100, y tenemos que devolver por orden lo siguiente:

//* Si el número es divisible por 3, escribiremos “Foo” en lugar del número
//* Si el número es divisible por 5, añadimos “Bar”
//* Si el número es divisible por 7, añadimos “Quix”.
//* Por cada dígito 3,5 o 7, añadiremos “Foo”, “Bar”, “Quix” respectivamente y en orden de aparición.


    let result = "";
    let control = 0;
    let numArray;


    for (let i = 1; i <= 100; i++) {

        numArray = i.toString().split('');
        result = "";
        control = 0;

        if ( i % 3 === 0) {
            result += "Foo";
            control = 1;
        }

        if ( i % 5 === 0) {
            result += 'Bar';
            control = 1;       
        }

        if ( i % 7 === 0) {
            result += 'Quix';
            control = 1;
        } 

        if (!control) {
            result = i;
        }
           
        for (const numArrayOnly of numArray) {
            if (numArrayOnly === '3') {
                result += "Foo"
            }

            if (numArrayOnly === '5') {
                result += "Bar"
            }

            if (numArrayOnly === '7') {
                result += "Quix"
            }
        }
        
        console.log(result);
    }         