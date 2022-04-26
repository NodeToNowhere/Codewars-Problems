// sort the odd numbers in ascending order while leaving 
// even numbers at their original positions.

export function sortArray(array){
    //create array of odds - then sort
    const odds = array.filter(num => num % 2).sort((a,b) => a - b);
    //map over array - if odd replace with the next sorted odd else itself
    return array.map(num => num % 2 ? odds.shift() : num)

}

// sort() broken without comparison function - negatives? 
// saw you could Math.abs(num % 2) but tests passed 