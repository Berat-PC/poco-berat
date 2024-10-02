
let myInput = [1000, 2, 3, 1, 2, 5, 6, -99]
function bubbleSort(input)
{
    let n = input.length;
    let swapped;
      
    do {
        swapped = false;
        
        for (let i = 0; i < n; i++) {
            if (input[i] > input[i + 1]) {
                
                let temp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = temp;           
                swapped = true;
            }
            
        }

    } while (swapped);

    return input
}
console.log(bubbleSort(myInput));
