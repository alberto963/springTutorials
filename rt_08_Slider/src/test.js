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