let divAli= document.getElementById ("aliado");
let divEne= document.getElementById ("enemigo");
let ba1= document.getElementById ("ba1");
let ba2= document.getElementById ("ba2");
let ba3= document.getElementById ("ba3");
let ba4= document.getElementById ("ba4");
let be1= document.getElementById ("be1");
let be2= document.getElementById ("be2");
let be3= document.getElementById ("be3");
let be4= document.getElementById ("be4");
let listo= document.getElementById("listo");
//let pelea= document.getElementById("pelea");
//let ret= document.getElementById("regre");

class Digimon {
    constructor ( a, b, c, d, e, f) {
    this.nombre = a;
    this.atributo = b;
    this.atributoElemental = c;
    this.familia = d;
    this.hp = e;
    this.skill= f;
}
}
let Digimon1= new Digimon ("Agumon", "Vacuna", "Fuego", "Rugido de Dragon", Math.ceil(Math.random() * 200), Math.ceil(Math.random() * 34));

let Digimon2= new Digimon("Gabumon", "Vacuna", "Hielo", "espiritu de la naturaleza", Math.ceil(Math.random() * 190), Math.ceil(Math.random() * 40));

let Digimon3= new Digimon("Keramon", "Virus", "Oscuridad", "soldado pesadilla", Math.ceil(Math.random() * 190), Math.ceil(Math.random() * 40));

let Digimon4= new Digimon("Hawkmon", "Data", "Viento", "Espiritu de la naturaleza", Math.ceil(Math.random() * 180), Math.ceil(Math.random() * 50));

let Digimons = [Digimon1, Digimon2, Digimon3, Digimon4];

ba1.addEventListener("click", set1);
ba2.addEventListener("click", set2);
ba3.addEventListener("click", set3);
ba4.addEventListener("click", set4);
be1.addEventListener("click", set5);
be2.addEventListener("click", set6);
be3.addEventListener("click", set7);
be4.addEventListener("click", set8);
listo.addEventListener("click",control);
pelea.addEventListener("click",buba);
ret.onclick=()=>{
    alert()
}

    function set1(){
    return sessionStorage.setItem("op",1),
    divAli.innerText = "Elegiste a Agumon como tu digimon acompañante"};
    function set2(){
    return sessionStorage.setItem("op",2),
    divAli.innerText = "Elegiste a Gabumon como tu digimon acompañante"};
    function set3(){
    return sessionStorage.setItem("op",3),
    divAli.innerText = "Elegiste a Hawkmon como tu digimon acompañante"};
    function set4(){
    return sessionStorage.setItem("op",4),
    divAli.innerText = "Elegiste a Keramon como tu digimon acompañante"};
    function set5(){
    return sessionStorage.setItem("sel",1),
    divEne.innerText = "Elegiste a Agumon como enemigo"};
    function set6(){
    return sessionStorage.setItem("sel",2),
    divEne.innerText = "Elegiste a Gabumon como enemigo"};
    function set7(){
    return sessionStorage.setItem("sel",3),
    divEne.innerText = "Elegiste a Hawkmon como enemigo"};
    function set8(){
    return sessionStorage.setItem("sel",4),
    divEne.innerText = "Elegiste a Keramon como enemigo"};
    function regresar(){
        location.href="../index.html"
    }
    function control(){
        let op= sessionStorage.getItem("op")
        if (op== null){ 
            swal.fire('Debes elegir un digimon')
        }else{
            control2()
        }
    }
    function control2(){
        let sel = sessionStorage.getItem("sel")
        if (sel== null){ 
            swal.fire('Debes elegir un enemigo')
        }else{
            location.href="/pages/pelea.html"
        }
    }
    function buba (){
    let tn=document.getElementById("tamer").value
    let daño1=0
    let hp1=0
    let daño2=0
    let hp2=0
    let op= sessionStorage.getItem("op")
    let sel = sessionStorage.getItem("sel")
    if (op== "1"){
        daño1=Digimon1.skill, hp1=Digimon1.hp
        }else if (op=="2"){
        daño1=Digimon2.skill, hp1=Digimon2.hp
        }else if (op=="3"){
        daño1=Digimon3.skill, hp1=Digimon3.hp
        }else if (op=="4"){
        daño1=Digimon4.skill, hp1=Digimon4.hp
        }
        if (sel=="1"){
        daño2=Digimon1.skill, hp2=Digimon1.hp
        }else if (sel=="2"){
        daño2=Digimon2.skill, hp2=Digimon2.hp
        } else if (sel=="3"){
        daño2=Digimon3.skill, hp2=Digimon3.hp
        } else if (sel=="4"){
        daño2=Digimon4.skill, hp2=Digimon4.hp
        }
        let round= 0
        document.write ("La vida de tu digimon al comenzar la pelea es de "+ hp1 +" de vida")
        document.write("<br>");
        document.write ("La vida de tu rival al comenzar la pelea es de "+ hp2 +" de vida")
        document.write("<br>");
    while (hp1 > 0 && hp2> 0){
    round +=1
    hp1-=Math.ceil(Math.random() * daño2 )
    hp2-=Math.ceil(Math.random() * daño1 )
    console.log (tn +" este es el round "+ round)
    console.log (tn +" tu vida restante es de "+ hp1)
    console.log (tn +" la vida restante del rival es "+ hp2)
    document.write (tn +" este es el round "+ round)
    document.write("<br>");
    document.write (tn + " tu vida restante es de "+ hp1)
    document.write("<br>");
    document.write (tn +" la vida restante del rival es "+ hp2)
    document.write("<br>");
}
if (hp1<=hp2) {
swal.fire('Tu Digimon se ha debilitado, la pelea duro " + round + " rounds')
} swal.fire('Tu digimon ha ganado, la pelea duro ' + round + ' rounds')
}

for (let i = 0; i < Digimons.length; i+=1) {
    console.log (Digimons[i]);
    console.log (Digimons[i].nombre);
    console.log (Digimons[i].atributo);
    console.log (Digimons[i].atributoElemental);
    console.log (Digimons[i].familia);
    console.log (Digimons[i].hp);
    console.log (Digimons[i].skill);
}
