// Get input element
const filterInput = document.querySelector('#filterInput');
// Add event listener
filterInput.addEventListener('keyup', search);

function search() {

    let filterValue = filterInput.value.toUpperCase();
    let getIdNames = document.querySelector('#names');
    let getLi = document.querySelectorAll("li.collection-item");

    getLi.forEach(function(index) {
        let getContactNames = index.getElementsByTagName('a')[0].innerHTML.toLocaleUpperCase().indexOf(filterValue);
        if (getContactNames > -1){
            index.style.display = '';
            console.log(index);
        }
        else {
            index.style.display = 'none';
            }
    });


    console.log(filterValue);
}
