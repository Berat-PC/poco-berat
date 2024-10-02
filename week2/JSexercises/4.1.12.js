/*Ex. 4.1.12 (*) - Fix the code
The intended behavior is to increment by one but why is this function not working? Can you fix this? (try to
solve this on paper first and then debug the code)*/


// incrementItems ([0 , 1, 2 , 3]) -> [1 , 2 , 3 , 4]
let myArray1 = [0,1,2,3];
let myArray2 = [2,4,6,7];
let myArray3 = [-1,-2,-3,-4];

function incrementItems (arr)
{
    for ( let i = 0; i < arr . length ; i++)
        arr[ i ] = arr[i]+1;

    return console.log(arr)
}
incrementItems("My array1 : " + myArray1)
incrementItems("My array2 : " + myArray2)
incrementItems("My array3 : " + myArray3)

     