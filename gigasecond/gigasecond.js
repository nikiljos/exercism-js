//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dateInput) => {
  // throw new Error('Remove this statement and implement this function');
  let resDate=new Date(dateInput)
  resDate.setSeconds(resDate.getSeconds() + 10 ** 9);
  return resDate;
};
