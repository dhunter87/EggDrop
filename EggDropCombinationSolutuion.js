//Evaluates C(n,k) and verifies if it's greater than or equal to k
function binomial(x, n, k){

    var i;
    var answer=0;
    var aux=1.0;

    //Calculates C(n,k) using the formula: C(n,k): sum_i_0^k {(n-i+1)/i}
    for(i=1;i<=n;i++){

            aux*=x+1-i;
            aux/=i;
            answer+=aux;

            if(answer>k) break;
    }

    return answer;
}

function main()
{
    var n; //Number of eggs
    var k; //Number of floors

    cout<<"Egg dropping puzzle: ( O(n log k)  solution )\n\n";

    cout<<"Number of floors:";
    cin>>k;

    cout<<"\nNumber of eggs:";
    cin>>n;

    //Binary search variables:
    //Mid: middle
    //Upper: upper limit
    //Inf: inferior limit

    var mid;
    var upper;
    var inf;

    upper=k;
    inf=0;
    mid=(upper+inf)/2;

    //Binary search
    while(upper-inf>1){

        //Finds the middle
        mid=inf+(upper-inf)/2;

        //Define new limits
        if(binomial(mid,n,k)<k) inf=mid;
        else upper=mid;

    }

    cout<<"\nNumber of drops in the worst case:"<<inf+1<<cout<<"\n";
}