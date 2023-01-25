const testfoo = (numberr) => {
   if(numberr % 3 === 0 && numberr % 5 === 0){
    console.log('foobar')
   }else if(numberr % 3 === 0){
    console.log('foo')
   }else if(numberr % 5 === 0){
    console.log('bar')
   }  else{
    console.log(numberr)
   }
}

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}