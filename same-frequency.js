// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const freq1 = getFrequency(num1);
  const freq2 = getFrequency(num2);

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}

function getFrequency(num) {
  const freq = {};
  const str = num.toString();

  for (let digit of str) {
    freq[digit] = (freq[digit] || 0) + 1;
  }

  return freq;
}

module.exports = sameFrequency;
