// Creating here the program to find the factorial of n number

const factorial = (n) => {
     let findFact = 1;
     while(n > 0){
          findFact *= n;
          n--
     }
     return findFact
}

export default factorial