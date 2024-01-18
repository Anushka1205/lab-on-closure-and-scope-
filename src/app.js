// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop

const NEG_INF = -1000000
function createPop(arr,item){

  // Progression 2: add 3 variables: title, currIndex, check
  let title=`<h></h3>`
  let currIndex=NEG_INF;
  let check=false;

  // Progression 3: create a function "searchForElement" 
  function searchForElement(){
    arr.forEach((e,i)=>{
      if(e===item){
        currIndex=i;
        check=true;
      }
    })
  }

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.

  return function(){
    searchForElement()
    if(check){
      return `The item is present and is at index ${currIndex}`
    }
    else{
      return `The item is not present and is at index ${currIndex}`
    }
  }
}

const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;

