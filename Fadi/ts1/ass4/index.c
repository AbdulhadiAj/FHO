#include <stdio.h>
int main()
{
    // int a,b ,s;
    //     printf("enter two number: ");
    //     scanf("%d %d",&a,&b);
    //     if (a%b==0)
    //     {
    //         s=a%b;
    //         printf("a=>%d %% b=>%d =%d",a,b,s);
    //     }
    //     else if (b%a==0)
    //     {
    //         s=b%a;
    //         printf("b=>%d %% a=>%d =%d",b,a,s);
    //     }
    //     else
    //     printf("no one is factor on another");
    // ----------------------------------------------
    int month, year, day;
    printf("enter your month and year: ");
    scanf("%d %d", &month, &year);
    if (month > 0 && month <= 12)
    {
        if (month == 1)
        {
            printf("that January %d has 31", year);
        }
        if (month == 2)
        {

            if (year % 4 == 0)
            {
                if (year % 100 == 0)
                {
                    if (year % 400 == 0)
                        printf("that february %d has 29", year);
                    else
                        printf("that february %d has 28", year);
                }
                else
                    printf("that february %d has 29", year);
            }
            else
                printf("that february %d has 28", year);
        }
        if (month == 3)
        {
            printf("that March %d has 31", year);
        }
        if (month == 4)
        {
            printf("that April %d has 30", year);
        }
        if (month == 5)
        {
            printf("that May %d has 31", year);
        }
        if (month == 6)
        {
            printf("that June %d has 30", year);
        }
        if (month == 7)
        {
            printf("that July %d has 31", year);
        }
        if (month == 8)
        {
            printf("that August %d has 31", year);
        }
        if (month == 9)
        {
            printf("that September %d has 30", year);
        }
        if (month == 10)
        {
            printf("that October %d has 31", year);
        }
        if (month == 11)
        {
            printf("that November %d has 30", year);
        }
        if (month == 12)
        {
            printf("that December %d has 31", year);
        }
    }
     
    else
    {
        printf("this is not month");
    }
    //----------------------------------------------
}