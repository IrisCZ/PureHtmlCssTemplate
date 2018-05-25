let dropdownNames = ["header-options", "navbar-options"]

let Template = {
  dropdowns: [],
  initialize: function() {
    dropdownNames.forEach(name => {
      Template.dropdowns.push(new Dropdown(name));
    })
  },
  closeDropdowns: function() {
    Template.dropdowns.forEach(dropdown => {
      dropdown.close()
    })
  }
}

let Dropdown = function(name){
  let elements = document.querySelectorAll(`input[type=checkbox][name=${name}]`)

  let addBehaviour = function(){
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

  let close = function(){
    elements.forEach(element => {
        element.checked = false
    });
  }

  addBehaviour();

  return {
    close: close
  }
}

Template.initialize()

document.addEventListener('click', (e) => {
  if(dropdownNames.indexOf(e.target.name) >= 0){
    return
  }

  let label = e.target.closest('label')
  if(!label){
    closeAll()
    return
  }

  let checkboxId = label.getAttribute('for')
  if(dropdownNames.indexOf(document.getElementById(checkboxId).name) >= 0){
    return
  }

  closeAll()
});

function closeAll(){
  Template.closeDropdowns();
}
