export default function appendToEachArrayValue(array, appendString) {
  for (var val of array) {
    let indx = 0;
    array[indx] = appendString + val;
    indx++;
  }
  return array;
}
