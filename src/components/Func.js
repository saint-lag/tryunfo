// Used or unused functions
// Most are interesting for my own learning process
function camelCase(str) {
  const splitted = str.split(' ');
  const lowercaseFirstWord = splitted[0].toLowerCase();
  splitted.shift();
  const joinedShiftted = splitted.length > 1 ? splitted.join('') : splitted[0];
  const arr = [];
  arr.push(lowercaseFirstWord);
  arr.push(joinedShiftted);
  return arr.join('');
}

export default camelCase;
