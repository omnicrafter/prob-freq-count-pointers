// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (message.length > letters.length) return false;

  function createFrequencyCounter(arr) {
    let frequencies = {};
    for (let val of arr) {
      let valCount = frequencies[val] || 0;
      frequencies[val] = valCount + 1;
    }
    return frequencies;
  }

  let messageFrequency = createFrequencyCounter(message.split(""));
  let lettersFrequency = createFrequencyCounter(letters.split(""));

  for (let key in messageFrequency) {
    if (
      !(key in lettersFrequency) ||
      messageFrequency[key] > lettersFrequency[key]
    ) {
      return false;
    }
  }

  return true;
}

module.exports = constructNote;
