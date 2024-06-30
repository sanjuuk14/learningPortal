export const CData = [
  //basic
  {
    id: 1.1,
    title: "Introduction",
    details: `The C Language is developed by Dennis Ritchie for creating system applications that directly interact with the hardware devices such as drivers, kernels, etc.

C programming is considered as the base for other programming languages, that is why it is known as mother language.`,
    code: "",
  },
  {
    id: 1.2,
    title: "Hello World",
    details: `First C program`,
    code: `#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}`,
  },

  {
    id: 1.3,
    title: "check Prime",
    details: `Program to check prime number`,
    code: `// Include header files
 
#include <stdio.h>
#include<stdbool.h>
 
// Function to check number is prime
// or not 
void checkPrime(int number)
{
    // Initialize a boolean variable
    // as true
    bool isPrime = true;
 
    // Iterate using a for loop
    // If there is a factor between 2 and the root of "number"
    // then "number" is not prime
 
    int factor;
    for(factor = 2 ; factor * factor <= number ; factor++)
    {
        // If "number" is divisible by "factor"
        if(number % factor == 0)
        {
            // Mark isPrime as false
            isPrime = false;
 
            // Come out from the for loop
            break;
        }
    }
 
    // Check is isPrime is true
    // Then "number" is prime
    if(isPrime)
        printf("%d is a prime number", number);
    
    // Otherwise "number" is composite number
    else
        printf("%d is a composite number", number);
 
}
 
// menu driver code
int main() {
 
    // Declare a integer variable   
    int number;
 
    // Input the number
    scanf("%d", &number);
 
    // Calling checkPrime function
    checkPrime(number);
 
    return 0;
}`,
  },

  //Star-Pattern
  {
    id: 2.1,
    title: "X Star Pattern",
    details: `Print X shape star pattern.`,
    code: `#include<stdio.h>
int main(){
      int n;
      printf("enter the Star patter length:- ");
      scanf("%d",&n);

for(int i = 1;i<=n;i++){
      for(int j=1;j<=n;j++){
        if((i==j) || (n-i+1==j)){
            printf("*");
        }else {
        printf(" ");
        }
        }
      printf("\n");
      }
}`,
  },
  //Array
  {
    id: 3.1,
    title: "Find max and min then swap.",
    details: `find max and min number and swap .`,
    code: `#include<stdio.h>
int main(){

      int A[5]={10,20,12,4,9};

       for(int i=0;i<5;i++){
           printf("%d\n",A[i]);
      }

      int max=A[0];
      int min=A[0];
      int imax;
      int imin;

      for(int i=0;i<5;i++){
           if(max<A[i]){
            max=A[i];
            imax = i;
           }
           if(min>A[i]){
            min=A[i];
           imin = i;
           }
      }

        A[imin] = max;
        A[imax] = min;

      printf("max = %d",max);
      printf("\nmin = %d",min);

      printf("\nafter swap max and min numbers : -");
       for(int i=0;i<5;i++){
           printf("\n%d",A[i]);
      }

return 0;
}
`,
  },
];
