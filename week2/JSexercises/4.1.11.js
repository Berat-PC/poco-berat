    /* 
    Ex. 4.1.11 (*) - Play with while loop
    Define three variables for the LaunchCode shuttle:
    • one for the starting fuel level,
    • another for the number of astronauts aboard,
    • and the third for the altitude the shuttle reaches.
    Construct while loops to do the following:


    */

    let startFuelLvl=0;
    let totalAstros=0;
    let altitudeReached=0;

    //a) Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater than 5000 but less than 30000.

    while(true) { 
        startFuelLvl = Number(prompt("Please enter the starting fuel level : "));
        
        if (startFuelLvl<5000) {console.log("Under 5000 lt engine can not be started")}
        
        else if (startFuelLvl>30000) {console.log("Above 30000 lt engine can not be started")}
        
        else {console.log("Engine is starting!"); break;}
    }

    //b) Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry by having the loop continue until the user enters an integer from 1 - 7.

    while(true) {
        totalAstros = Number(prompt("Enter the number of Astronauts : "))
        if (totalAstros>0 && totalAstros <8) {console.log("Valid Entry, Congragulations!")
        break;
        } else console.log("Please enter a valid number!")
    } 
    

    /* c) 
    Use a final loop to monitor the fuel status and the altitude of the shuttle. 
    Each iteration, decrease the fuel level by 100 units for each astronaut aboard. 
    Also, increase the altitude by 50 kilometers. 
    (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might
    not reach 0). */
    
    altitudeReached = Number(prompt("Please enter the altitude you'd like to reach : "));
    
    while(startFuelLvl/totalAstros>=100) {
            
        startFuelLvl = startFuelLvl - totalAstros*100;
             
        console.log("Your altitude is " + altitudeReached + " and your fuel level is : " + startFuelLvl);
        
        altitudeReached += 50;
    
    } 
    console.log("SOS SOS SOS , You are out of fuel, turn home!") 
    