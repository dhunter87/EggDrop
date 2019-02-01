/* Function to get minimum number of  
trials needed in worst case with n  
eggs and k floors */
function eggDropRecursive(n, k) 
{ 
    // If there are no floors, then  
    // no trials needed. OR if there 
    // is one floor, one trial needed. 
    if (k == 1 || k == 0) 
        return k; 
    
    // We need k trials for one egg 
    // and k floors 
    if (n == 1) 
        return k; 
    
    var min = int.MaxValue; 
    var x;
    var res; 
    
    // Consider all droppings from  
    //1st floor to kth floor and 
    // return the minimum of these 
    // values plus 1. 
    for (x = 1; x <= k; x++) 
    { 
        res = Math.Max(eggDropRecursive(n-1, x-1),  
                        eggDropRecursive(n, k-x)); 
        if (res < min) 
            min = res; 
    } 
    
    return min + 1; 
} 
    
// Driver code 
function Main() 
{ 
    var n = 2
    var k = 10; 
    Console.Write("Minimum number of "
        + "trials in worst case with "
                + n + " eggs and " + k 
        + " floors is " + eggDropRecursive(n, k)); 
} 
Main()


// //Compares 2 values and returns the bigger one
// function max(a,b) {
//     var ans=(a>b)?a:b;
//     return ans;
// }

// //Compares 2 values and returns the smaller one
// function min(a, b){
//     var ans=(a<b)?a:b;
//     return ans;
// }

// function egg(n, h){

//     //Basis case
//     if(n==1) return h;
//     if(h==0) return 0;
//     if(h==1) return 1;

//     var minimum=INT_MAX;

//     //Recursion to find egg(n,k). The loop iterates i: 1,2,3,...h
//     for(var x=1;x<=h;x++) minimum=min(minimum,(1+max(egg(n,h-x),egg(n-1,x-1))));

//     return minimum;
// }

// function main()
// {
//     var e;//Number of eggs
//     var f;//Number of floors

//     cout<<"Egg dropping puzzle\n\nNumber of eggs:";

//     cin>>e;

//     cout<<"\nNumber of floors:";

//     cin>>f;

//     cout<<"\nNumber of drops in the worst case:"<<egg(e,f);

//     return 0;
// }