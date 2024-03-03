function getMiddle(s)
{
  /* great I love how I thought to figure the math behind getting the middle characters of a string. I figured out that if I divide the string length by 2, I'll get an index close to the middle character of the string.
    If the length is even, divide by 2 and assign to a variable called i and return 
  */
  //Code goes here!
  let sLength = s.length;
  let i = sLength / 2;
  if ( sLength % 2 == 0 ) {
    return `${s.charAt(i-1)}` + `${s.charAt(i)}`
  }
  
  else return s.charAt(Math.round(i-1))
}