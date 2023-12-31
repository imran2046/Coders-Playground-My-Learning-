#include <iostream>
#include <stdio.h>
using namespace std;

//M1
string Fname,Lname;
float a,b,c;

//M2
int Age;

//M3
char x;

//M4
int day;

//M5

//M6
int i;


int main()
{ 
    //MISSON 01
    cout << "Welcome sir,What's your First Name: ";
    cin >> Fname;
    cout << "What's your First Name: ";
    cin >> Lname;
    cout <<"Mr."<<Fname<<" "<<Lname <<" ,Hello sir";

    cout << "\nEnter 1st Number = ";
    cin >> a;
    cout << "\nEnter 2nd Number = ";
    cin >> b;
    cout << "\nEnter 3rd Number = ";
    cin >> c;
    float sum = (a + b + c);
    cout << "\nSUM = " << sum;
    float avg =sum/2;
    cout << "\nYour Avarage Number is = " << avg;
    sum++;
    cout << "\nIncrease to = "<< sum++;

    //MISSON 02
    cout << "\nWhat's Your age Sir: ";
    cin >> Age;
    if (Age >=18)
    {
        cout << "\nYou're Eligiable for Vote";
    }
    else
    {
        cout << "\nYou're NOT Eligiable for Vote";
    }

    //MISSON 03
    cout <<"\nEnter a Letter: ";
    cin >> x;

    x =tolower(x);

    if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u')
    {
         cout <<"Its a VOWEL" <<endl;
    }
    
    else
    {
      cout<<"\nIts a CONSONANT"<<endl;  
    }
    
    //MISSON 04
     cout << "Enter Your Day Number(Choose between 1-7): ";
     cin >> day;

    
    switch(day)
    {
        case 1:
        cout <<"Saturday" <<endl;
        break;
        
        case 2:
        cout <<"Sunday" <<endl;
        break;
        
        case 3:
        cout <<"Monday" <<endl;
        break;
        
        case 4:
        cout <<"Tuesday" <<endl;
        break;
        
        case 5:
        cout <<"Wednesday" <<endl;
        break;
        
        case 6:
        cout <<"Thursday" <<endl;
        break;
        
        case 7:
        cout <<"Friday" <<endl;
        break;
        
        default:
        cout <<"Error 404" <<endl;

        //MISSON 05
        //[For loop]
        for(int f=1; f<=5; f++)
        {
            cout <<f <<". Hola Mi Amigo! This is FOR LOOP"<<endl; 
        }
        
        //[While loop]
        int w=1;
        while (w<=5)
        {
            cout <<w <<". This is WHILE LOOP"<<endl; 
            w++;
        }

        //[Do while loop]
        int d=1;
        do
        {
            cout <<d<<". This is DO WHILE LOOP"<<endl;
            d++;
        }while(d<=5);

        //MISSON 06
        i;
        cout<<"How mant times you want to print'ALHAMDU-LILLAH': ";
        cin>>i;
    
        for(int y=1 ;y<=i; y++)
       {
         cout<<y<<": ALHAMDU-LILLAH"<<endl;
       }
        
        


        
    }

    return 0;
}