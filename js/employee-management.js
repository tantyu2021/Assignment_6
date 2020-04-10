/*eslint-env browser*/
const LIST = document.querySelector('#createList tbody');

// delete element
LIST.addEventListener('click', function(e){
  if(e.target.className == 'del') { //el.del
    const TR = e.target.parentElement;
    TR.parentNode.removeChild(TR);
  }
});

// add element
const ADDFORM = document.forms['addList'];

ADDFORM.addEventListener('submit', function(e){
  e.preventDefault();

  const VALUE = ADDFORM.querySelector('input#name[type="text"]').value;
  const TR = document.createElement('tr');
  const ADDENAME = document.createElement('td'); // creature name
  const DELBTN = document.createElement('td'); // del
  //48
  const ADDDUTY = document.createElement('td');
  const VALUED = ADDFORM.querySelector('input[type="text"]').value;
  const ADDNUMBER = document.createElement('td');
  const VALUENUM = ADDFORM.querySelector('input[type="text"]').value;

  // add text content
  ADDNAME.textContent = VALUE;
  DELBTN.textContent = 'Delete';
  //48
  ADDDUTY.textContent = VALUED;
  ADDNUMBER.textContent = VALUENUM;


  // add classes
  ADDNAME.classList.add('name');
  DELBTN.classList.add('del');
  //48
  ADDDUTY.classList.add('duty');
  ADDNUMBER.classList.add('number');

  //append to the DOM
  TR.appendChild(ADDNAME);
  TR.appendChild(DELBTN);
  LIST.appendChild(TR);
  //48

});




// prevent default behavior
const LINK = document.querySelector('#banner a');

LINK.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to ', e.target.textContent, 'was prevented');
});





