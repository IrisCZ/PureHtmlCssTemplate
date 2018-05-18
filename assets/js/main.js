let dropdowns = ["header-options"]

let Template = {
  initialize: function() {
    dropdowns.forEach(name => {
      new Dropdown(name);
    })
  }
}

let Dropdown = function(name){

  let addBehaviour = function(){
    let elements = document.querySelectorAll(`input[type=checkbox][name=${name}]`)
    elements.forEach(element => {
      element.addEventListener('click', () => {
        elements.forEach( check => {
          if (element != check){
            check.checked = false
          }
        })
      });
    });
  }

  addBehaviour();
}

Template.initialize()
