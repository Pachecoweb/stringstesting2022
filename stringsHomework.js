let name = "Diego";
let lastname = "Pacheco";

let estudiante = "   " + name + " " + lastname + ".  ";
console.log(estudiante);
let estudianteMAYUS = estudiante.toUpperCase();
console.log(estudianteMAYUS);
let estudiante_minus = estudiante.toLowerCase();
console.log(estudiante_minus);
let studentLength = estudiante.length;

console.log(studentLength);

let estudianteMatchOne = estudiante.match(/Diego/g);
let estudianteMatchTwo = estudiante.match(/josé/g);
console.log(estudianteMatchOne);
console.log(estudianteMatchTwo);

let firstEstudiante1 = estudiante.charAt(0);
console.log(firstEstudiante1);
let firstEstudiante2 = estudiante.indexOf("D");
console.log(firstEstudiante2);
let firstEstudiante3 = estudiante.lastIndexOf("o");
console.log(firstEstudiante3);

let studentLengthTrim = estudiante.trim();
console.log(studentLengthTrim);

if (estudiante.lenght === estudiante[name]) {
    console.log("Ahi esta! =>" + name);
} else {
    console.log("undefined");
}