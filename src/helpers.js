export function ellipsise(line) {
   if (line.length > 180) {
      return line.substr(0,180) + '...'
   } else {
      return line
   }
}

/*
Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}
*/

export function monthToString(month) {
   let retVal = ""
   switch (month) {
      case 1: retVal = "January"
         break;
      case 2: retVal = "February"
         break;
      case 3: retVal = "March"
         break;
      case 4: retVal = "April"
         break;
      case 5: retVal = "May"
         break;
      case 6: retVal = "June"
         break;
      case 7: retVal = "July"
         break;
      case 8: retVal = "August"
         break;
      case 9: retVal = "September"
         break;
      case 10: retVal = "October"
         break;
      case 11: retVal = "November"
         break;
      case 12: retVal = "December"
         break;

   }

   return retVal
}
