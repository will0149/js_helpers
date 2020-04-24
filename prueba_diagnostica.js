/**
 * Jose Luis Dominguez
 * - 0: Se ejecutará un encoding de tipo BASE64.
 * - 1: Se ejecutará un encoding de tipo ROT13.
 * - 2: Se ejecutará un encoding de tipo HEX.
 * - 3: Se ejecutará un encoding de tipo BINARIO.
 */
var cadena = 'asdasd';
var codigo = 3;

var mensaje = function(code, text){
  encript = '';
  switch(code){
    case 0:
      encript = btoa(text);
    break;
    case 1:
      encript = rot13(text);
    break;
    case 2:
      encript = hex(cadena);
    break;
    case 3:
      encript = binary(cadena);
    break;
    default:
      0;
  }
  return encript;
}

function rot13(cadena){
  return cadena.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
}
function hex(cadena){
  var hex = '';
    for(var i=0;i<cadena.length;i++) {
        hex += ' 0x'+cadena.charCodeAt(i).toString(16);
    }
    return hex;
}

function binary(cadena) {
     value = "";
     for (var i = 0; i < cadena.length; i++) {
         value += cadena[i].charCodeAt(0).toString(2) + " ";
     }
     return value;
}

console.log((cadena.length>10 || cadena.length < 1)?'Tamaño del texto fuera de rango':mensaje(codigo, cadena))