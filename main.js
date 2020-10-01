sueldo= Number(prompt("Ingresa el tu sueldo"))

console.log("El sueldo inicial era",sueldo)

if(sueldo>=0 && sueldo<=1000){
    sueldo= sueldo + (sueldo*0.15)
    console.log("El nuevo sueldo es", sueldo)
    console.log("El aumento fue de 15%")

}
else if(sueldo>=1001 && sueldo<=1200){
    sueldo= sueldo + (sueldo*0.12)
    console.log("El nuevo sueldo es", sueldo)
    console.log("El aumento fue de 12%")

}
else if(sueldo>=1201 && sueldo<=1400){
    sueldo= sueldo + (sueldo*0.10)
    console.log("El nuevo sueldo es", sueldo)
    console.log("El aumento fue de 10%")

}
else if(sueldo>=1401 && sueldo<=1500){
    sueldo= sueldo + (sueldo*0.8)
    console.log("El nuevo sueldo es", sueldo)
    console.log("El aumento fue de 8%")

}
else if (sueldo>1500){
    sueldo= sueldo + (sueldo*0.5)
    console.log("El nuevo sueldo es", sueldo)
    console.log("El aumento fue de 5%")

}
else{
    console.log("Ese sueldo no es valido")
}