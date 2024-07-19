let valores =[8,1,7,4,2,9]
console.log(valores)
valores.sort()
valores.indexOf(4)
/*
console.log(valores[0])//lembresse o 0 vale o 1
console.log(valores[1])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos= 0;valores.length;pos++){
    console.log(`A posição ${pos} tem valor; ${valores[pos]}`)
}
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem valor; ${valores[pos]}`)
}