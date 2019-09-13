#include <stdio.h>

int main(){
    int i,j,x,n;
    printf("masukkan bilangan ganjil:");
    scanf("%d", &n);

    x = (n/2)+1;
    // i = vertikal
    // j = horicontal

    for (i = 1; i<=n; i++){
        for(j=1; j<=n;j++){
            if ((i==1 && j==1) || (i==1 && j==n) || (i==n && j==1) || (i==n && j==n)||(j==x) || (i==x)) {
                printf("*");
            } else printf("=");
        };
        printf("/n");
    };
    return 0;
}