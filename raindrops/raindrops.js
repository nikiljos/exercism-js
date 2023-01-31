//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (raindrops) => {
  // throw new Error('Remove this statement and implement this function');
  let res=""
  if(raindrops%3===0){
    res += "Pling";
  }
  if(raindrops%5===0){
    res+="Plang"
  }
  if(raindrops%7===0){
    res+="Plong"
  }
  if(res===""){
    res+=raindrops
  }
  return res
};
