const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };


function value(obj) {

    if(typeof obj == "object"){
        let answer =[]
        for(let keys in obj){
            answer.push(obj[keys])
            //  console.log(obj[x])
         }
         return answer
    }
    else{
      return  console.log("This is not a object ");   
    }
  }
  console.log(value(testObject));
  
  