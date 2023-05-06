const messages = ['Good vibes', 'Awesome', 'Nice', 'Great Day'];


 const randomMessageGenerator=()=>
{
  const randomIndex = Math.round(Math.random()*messages.length);
 console.log(randomIndex);
}
randomMessageGenerator()