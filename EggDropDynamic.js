//Compares 2 values and returns the bigger one
function max(a, b) {
    var ans=(a>b)?a:b;
    return ans;
}

//Compares 2 values and returns the smaller one
function min(a, b){
    var ans=(a<b)?a:b;
    return ans;
}

function solvepuzzle(n, k){

    var numdrops = [n+1][k+1];
    var i;
    var j;
    var x;

    for(i=0;i<=k;i++) numdrops[0][i]=0;
    for(i=0;i<=k;i++) numdrops[1][i]=i;
    for(j=0;j<=n;j++) numdrops[j][0]=0;

    //This loop fills up the matrix
    for(i=2;i<=n;i++){
        for(j=1;j<=k;j++){

            //Defines the minimum as the highest possible value
            var minimum=INT_MAX;

            //Evaluates 1+min{max(numeggs[i][j-x],numeggs[i-1][x-1])), for x:1,2,3...j-1,j}
            for(x=1;x<=j;x++) minimum=min(minimum,(1+max(numdrops[i][j-x],numdrops[i-1][x-1])));

            //Defines the minimum value for numeggs[i][j]
            numdrops[i][j]=minimum;
        }

    }

    cout<<"\nArray:\n\n";

    //Prints numeggs
    for(i=0;i<=n;i++){
        for(j=0;j<=k;j++){
            cout<<numdrops[i][j]<<" ";
        }
        cout<<"\n";
    }

    cout<<"\nNumber of trials in the worst case using the best strategy:\n";

    return numdrops[n][k];
}

function main()
{
    var e;//Number of eggs
    var f;//Number of floors

    cout<<"Egg dropping puzzle\n\nNumber of eggs:";

    cin>>e;

    cout<<"\nNumber of floors:";

    cin>>f;

    cout<<solvepuzzle(e,f);

    return 0;
}