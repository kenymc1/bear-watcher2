const printBears = () => {
  const bears = breadData.getBreads();
  let domString = '';

  allBreads.forEach((bread) => {

    domString += '<div class=" d-inline-block col-3">';
    domString += '<div class="card" style="width: 18rem;">';
    domString += '<img src="/img/Bear_0006_Layer-5.png" class="card-img-top">';
    domString += '<div class="card-body">';
    domString += '<h3 class="card-text">Bear Name</h3>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  );
  util.printToDom('bear-container', domString);
  document.getElementById('submit').addEventListener('click', printBears);
  
}
export default { printBears };