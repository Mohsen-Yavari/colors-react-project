 function ComponentHex(c){
     var hex = toString(16);
     return hex.length === 1 ? "0" + hex : hex;  
 }

 function rgbToHex(r, g, b){
     return "#" + ComponentHex(r) + ComponentHex(g) + ComponentHex(b);
 }
 export default rgbToHex;