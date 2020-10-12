// Add your functions here

function map(arr, f) {
    let tmp=[];
    arr.forEach(el=> tmp.push(f(el)));
    return tmp;
}


function reduce(arr,f, curr) {
    let acc;

    if (curr) {
        acc = curr;
        for (let i=0 ; i < arr.length; i++) {
            acc = f(arr[i], acc);
        }
        
    }
    else {
         acc = arr[0];
         for (let i=1 ; i < arr.length; i++) {
            acc = f(arr[i], acc);
        }
    }
 return acc ; 
}