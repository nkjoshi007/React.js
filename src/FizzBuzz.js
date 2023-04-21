
const FizzBuzz=()=>{
const fizzbre=()=>{
        let n = 100;
        for( let i =0;i<=n;i++){
          const s=[i]
          if(i%3===0&&i%5===0){
            s[i]="fizzbuzz"
          }else if (i%3===0){
             s[i]="fizz"
          }else if (i%5===0){
            s[i]="buzz"
          }else{
            s[i] = i
          }
          console.log(s[i])
        }
    
  }
return(
fizzbre()
)
}
export default FizzBuzz;