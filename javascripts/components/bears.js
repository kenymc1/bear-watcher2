
import util from '../helpers/util.js';
import bears from '../helpers/data/bearData.js';
import beatForm from './bearForm.js';


const printBears = () => {
  let domString = '';
  for (let i = 0; i < bears.length; i++) {
    domString += '<div class=" d-inline-block col-3">';
    domString += '<div class="card" style="width: 18rem;">';
    domString += `<img src="${bears[i].imageUrl}" class="card-img-top"`;
    domString += '<div class="card-body">';
    domString += `<h3 class="card-text">${bears[i].name}</h3>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }

  util.printToDom('river', domString);

};

printBears();

export default { printBears };