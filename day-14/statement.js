console.log('something before if statement');
let age = 18 ;
if(age >= 18 ){
    console.log('you can vote ');
    console.log('you can drive');
}
console.log('something after if statement');

let color = "green" ;
if(color == 'red'){
    console.log('stop');
}
else if(color == 'yellow '){
    console.log('show down');
}
else if(color == 'green'){
    console.log('go');
}

let popcornSize = "l" ;
if(popcornSize == "s"){
    console.log('popcorn  price is : 50 taka');
}
else if(popcornSize == "m"){
    console.log('popcorn  price is : 100 taka');
}
else if(popcornSize == "l"){
    console.log('popcorn  price is : 200 taka');
}
else if(popcornSize == "xl"){
    console.log('popcorn  price is : 250 taka');
}


let str = 'apple';
if(str[0] === 'a' && str.length > 4){
    console.log('this is good word ');
}
else{
    console.log('this is not good word');
}