import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData';
import bears from './bears.js';

const newBear = (e) => {
  e.preventDefault();
  const bears = bearData.getBears()
  const brandNewBear = {
    name: document.getElementById('bear-name').value,
    imageUrl: document.getElementById('bear-image').value,
  }
  bears.push(brandNewBear)
  printBears();
}

document.getElementById('newBear').addEventListener('click', newBear).reset();

util.printToDom('river', domString);

export default { newBear };