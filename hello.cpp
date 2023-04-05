#include<iostream>
using namespace std;

/*
return_type func_name(argmunets){
    code
}

*/

int mySumCalculator(int myNum1, int myNum2){
    cout << "Enter first num: ";
    cin >> myNum1;
    cout << "Enter second num: ";
    cin >> myNum2;
    return myNum1+myNum2;
}

int main(){
    int a,b,c,d,e,f,g,h,i,k;
    cout << mySumCalculator(a,b) +  mySumCalculator(c,d) + mySumCalculator(e,f);
}