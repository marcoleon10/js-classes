function sayHello() {
    console.log('Hello');
}

function sum(num1, num2){
    const res=num1+num2;
    return res;
}

function printNumbers(){
    //print numbers from 1 to 20
    //except 7 and 13
    let sum=0;
    let count=0;

    let numbers=[12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];

    for(let i=0;i<numbers.length;i++){
        if(i != 7 && i != 13){
            console.log(i);
        }
    }
    for(let i=0;i<numbers.length;i++){
        let num=numbers[i];
        console.log(num);

        //sum numbers
        sum = num;
        //only greater numbers
        if(num>500){
            count++;
        }

        console.log("Sum is "+sum);
        console.log("There are "+count+" numbers greater than 500");
    }


}

function init(){
    console.log("Hello World");
    sayHello();
    const result=sum(10,20);
    console.log(result);
}

window.onload = init;