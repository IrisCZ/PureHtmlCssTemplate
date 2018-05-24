let dropdowns = ["header-options", "navbar-options"]

let Template = 
  initialize: function() 
    dropdowns.forEach(name => 
      new Dropdown(name);
    )
  


let Dropdown = function(name)

  let addBehaviour = function()
    let elements = document.querySelectorAll(`input[type=checkbox][name=$name]`)
    elements.forEach(element => 
      element.addEventListener('click', () => 
        elements.forEach( check => 
          if (element != check)
            check.checked = false
          
        )
      );
    );

  

  addBehaviour();


Template.initialize()

document.addEventListener('click', (e) => 
  if(dropdowns.indexOf(e.target.name) >= 0)
    return
  
  let label = e.target.closest('label')
  if(!label)
    console.log("OTRO")
    return
  
  let checkboxId = label.getAttribute('for')
  if(dropdowns.indexOf(document.getElementById(checkboxId).name) >= 0)
    return
  
  console.log("OTRO2")



);
