{
  const S = '----++---' // Status
  const K = 3 // Number of elements to switch

  const N=S.length;

  let ans=0;

  for(let i=0; i+K-1<N; i++) {

    if(S[i]=='-')
    {
        for(let j=0; j<K; j++) {
          S[i+j] ^= '-' ^ '+';
        }
        ans++;
    }
 }

  for(let i=0; i<N; i++) {
   if(S[i]=='-') {
      ans=-1;
   }
  }

  if(ans==-1)
    console.log("IMPOSSIBLE");
  else
    console.log(ans);
}

/* =========================== ORIG

#include <bits/stdc++.h>

using namespace std;

int N, K;
char S[10000];

void _main(int TEST)
{
    scanf("%s%d", S, &K);
    N=strlen(S);
    int ans=0;
    for(int i=0; i+K-1<N; i++) if(S[i]=='-')
    {
        for(int j=0; j<K; j++)
            S[i+j]^='-'^'+';
        ans++;
    }
    for(int i=0; i<N; i++) if(S[i]=='-')
        ans=-1;
    if(ans==-1)
        printf("IMPOSSIBLE\n");
    else
        printf("%d\n", ans);
}

int main()
{
    freopen("A-small-attempt0.in", "r", stdin);
    freopen("A-small-attempt0.out", "w", stdout);
    int TEST;
    scanf("%d", &TEST);
    for(int i=1; i<=TEST; i++)
    {
        //cerr << i << endl;
        printf("Case #%d: ", i);
        _main(i);
    }
    return 0;
}
*/