function snapCrackle (MaxValue) {
let output = ""
for( let i=1 ; i<=MaxValue; i++){
    if(!(i % 2 === 0) && (i%5 !==0)){               // se for impar ok
        output += "Snap, "
    }
    else if(!(i % 2 === 0) && ( i%5 === 0)){   //impar e divivel por 5 snapCrackle
        output += "SnapCrackle, "
    }
    else if((i % 2 === 0) && ( i%5 === 0)){
        output += "Crackle, "
    } 
    else{
        output += `${i},`
    }
}
return output
} 

console.log("SnapCrackle obtido :"+ snapCrackle(12))
console.log("SnapCrackle esperado : Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12,") 

//-----------------------------------------------------------------------------------------------------------------// 
function isPrime(n){
let divisores = 0
let output = false
    for (let i= 1; i<25; i++){ 
        if( n % i === 0){
          divisores ++
        } 
        if(divisores === 2){
        output = true
        }
        else{
        output = false
        }
       } 
    return output
   } 

  isPrime()

function snapCracklePrime (MaxValue) {
let output = ""
    for( let i=1 ; i<=MaxValue; i++){
        if(!(i % 2 === 0) && (i%5 !==0) && (isPrime(i)=== true)){               // se for impar ok
            output += " SnapPrime,"
        }
        else if(!(i % 2 === 0) && (i%5 !==0)){               // se for impar ok
            output += " Snap,"
        }
        else if(!(i % 2 === 0) && ( i%5 === 0) && (isPrime(i)=== true)){   //impar e divivel por 5 snapCrackle
            output += " SnapCracklePrime,"
        }
        else if(!(i % 2 === 0) && ( i%5 === 0)){   
            output += " SnapCrackle, "
        }
        else if((i % 2 === 0) && ( i%5 === 0)){
            output += " Crackle, "
        } 
        else if(isPrime(i)===true){
            output += " Prime,"
        }
        else{
            output += ` ${i},`
        }
    }
 return output
} 
    
 console.log("SnapPrime obtido:"+ snapCracklePrime(15))
 console.log("SnapPrime esperado: Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle,") 

