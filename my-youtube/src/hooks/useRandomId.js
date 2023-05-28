export const useRandomId=()=>{ 
    let length=6;
    const randomNumber = Math.floor(Math.random() * 1000000);
    const randomString = randomNumber.toString();
    return (new Array(length + 1).join('0') + randomString).slice(-length);
  }
