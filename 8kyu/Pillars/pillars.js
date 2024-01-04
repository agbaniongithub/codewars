// DESCRIPTION:
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// My Solution

function pillars(numPill, dist, width) {
    // your code here
    //lets specify the range of input for number of pillar greater than or equal to 1, distance between 10 and 30 meters and width between 10 and 50 centimeters
    //distance should be in meters and width should be in cm
    if(numPill <= 1 || dist < 10 || dist > 30 || width < 10 || width > 50 ) {
      return 0;
    }
    let distCm = dist * 100
    let firstAndLastDistance = ((numPill - 1) * distCm) + ((numPill - 2) * width);
    return firstAndLastDistance;                              
  }
  
  pillars(3, 20, 30);

