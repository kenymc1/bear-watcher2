const bears = [
  {
    name: 'Juicy',
    imageUrl: 'img/Bear_0003_Layer-8.png'
  },
  {
    name: 'Johnny',
    imageUrl: 'img/Bear_0007_Layer-4.png'
  },
  {
    name: 'Sugar Plum',
    imageUrl: 'img/Bear_0010_Layer-1.png'
  },
];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};


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

  printToDom('river', domString);

};



const newBear = (e) => {
  e.preventDefault();
  const brandNewBear = {
    name: document.getElementById('bear-name').value,
    imageUrl: document.getElementById('bear-image').value,
  }
  bears.push(brandNewBear)
  printBears();
}


const init = () => {
  printBears();
  document.getElementById('newBear').addEventListener('click', newBear).reset();
};


init();