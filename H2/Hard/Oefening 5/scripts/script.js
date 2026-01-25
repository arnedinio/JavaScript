let array = [];


let len = 0;
while (len < 100){
    len++;
    array.push(Math.floor(Math.random()* 101));
}


console.log(array);
console.log(array.length);


let groterDanBuur = 0;
array.forEach((value, i) => {
    if (array[i+1] > value) { //JS geeft undefined buiten array, en undefined > number is false.
        groterDanBuur++;      //Zou extra check (i < array.length -1) sneller of trager zijn?
    }
});

console.log(groterDanBuur);
