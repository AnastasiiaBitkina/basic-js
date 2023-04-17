const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  const newNames = [];
  const duplicates = {};
  
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    
    if (!duplicates[currentName]) {
      // If we haven't seen the name before, add it to the newNames array
      newNames.push(currentName);
      duplicates[currentName] = 1;
    } else {
      // If we've seen the name before, add a suffix and check again
      let suffix = duplicates[currentName];
      let newName = `${currentName}(${suffix})`;
      
      while (duplicates[newName]) {
        suffix++;
        newName = `${currentName}(${suffix})`;
      }
      
      newNames.push(newName);
      duplicates[newName] = 1;
      duplicates[currentName] = suffix;
    }
  }
  
  return newNames;
}

module.exports = {
  renameFiles
};