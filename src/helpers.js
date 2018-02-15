export function ellipsise(line) {
   if (line.length > 180) {
      return line.substr(0,180) + '...'
   } else {
      return line
   }
}
