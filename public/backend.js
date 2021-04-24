let form = document.querySelector('#form')
let camSelect = document.querySelector('#cameras')
let colorSelect = document.querySelector('#colors')

colorSelect.options[0].disabled = false
colorSelect.options[1].disabled = true
colorSelect.options[2].disabled = false

camSelect.addEventListener('change', () => {
  if ( camSelect.options[0].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = true
    colorSelect.options[2].disabled = false
  } else if ( camSelect.options[1].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = false
    colorSelect.options[2].disabled = false
  } else if ( camSelect.options[2].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = false
    colorSelect.options[2].disabled = false
  } else if ( camSelect.options[3].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = true
    colorSelect.options[2].disabled = false
  } else if ( camSelect.options[4].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = true
    colorSelect.options[2].disabled = false
  } else if ( camSelect.options[5].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = true
    colorSelect.options[2].disabled = false
  } else if ( camSelect.options[6].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = true
    colorSelect.options[2].disabled = false
  } else if ( camSelect.options[7].selected ) {
    colorSelect.options[0].disabled = false
    colorSelect.options[1].disabled = true
    colorSelect.options[2].disabled = false
  }
})

colorSelect.addEventListener('change', () => {
  if ( colorSelect.options[0].selected ) {
    camSelect.options[0].disabled = false
    camSelect.options[1].disabled = false
    camSelect.options[2].disabled = false
    camSelect.options[3].disabled = false
    camSelect.options[4].disabled = false
    camSelect.options[5].disabled = false
    camSelect.options[6].disabled = false
    camSelect.options[7].disabled = false
  } else if ( colorSelect.options[1].selected ) {
    camSelect.options[0].disabled = true
    camSelect.options[1].disabled = false
    camSelect.options[2].disabled = false
    camSelect.options[3].disabled = true
    camSelect.options[4].disabled = true
    camSelect.options[5].disabled = true
    camSelect.options[6].disabled = true
    camSelect.options[7].disabled = true
  } else if ( colorSelect.options[2].selected ) {
    camSelect.options[0].disabled = false
    camSelect.options[1].disabled = false
    camSelect.options[2].disabled = false
    camSelect.options[3].disabled = false
    camSelect.options[4].disabled = false
    camSelect.options[5].disabled = false
    camSelect.options[6].disabled = false
    camSelect.options[7].disabled = false
  }
})
