
const LIST = document.querySelector('#createList ul');

// delete element
LIST.addEventListener('click', function(e){
  if(e.target.className == 'delete') { // span.delete
    const LI = e.target.parentElement;
    LI.parentNode.removeChild(LI);
  }
});

// add element
const ADDFORM = document.forms['addCreate'];

ADDFORM.addEventListener('submit', function(e){
  e.preventDefault();

  const VALUE = ADDFORM.querySelector('input#name[type="text"]').value;
  const LI = document.createElement('li');
  const ADDNAME = document.createElement('span'); //  name
  const DELBTN = document.createElement('span'); // delete button
  //48
  const CREATEDUTY = document.createElement('span');//title-duty
  const VALUED = ADDFORM.querySelector('input[type="text"]').value;
  const CREATENUMBER = document.createElement('span');//number-extension
  const VALUENUM = ADDFORM.querySelector('input[type="text"]').value;

  // add text content
  ADDNAME.textContent = VALUE;
  DELBTN.textContent = 'Delete';
  //48
  CREATEDUTY.textContent = VALUED;
  CREATENUMBER.textContent = VALUENUM;

  // add classes
  ADDNAME.classList.add('name');
  DELBTN.classList.add('delete');
  //48
  CREATEDUTY.classList.add('duty');
  CREATENUMBER.classList.add('number');

  //append to the DOM
  LI.appendChild(ADDNAME);
  LI.appendChild(DELBTN);
  LIST.appendChild(LI);
  //48
  LI.appendChild(CREATEDUTY);
  LI.appendChild(CREATENUMBER);

});



// prevent default behavior
const LINK = document.querySelector('#banner a');

LINK.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to ', e.target.textContent, 'was prevented');
});