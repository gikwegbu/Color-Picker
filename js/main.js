document.addEventListener('DOMContentLoaded', () => {
    let box = document.querySelector('.box')
    let details = document.querySelector('.details')
    let colorPicker = document.querySelector('#color_input');
    let HEXcolor = document.querySelector('#display_color')
 
    colorPicker.addEventListener('change', (e) => {  
        details.style.display = 'block'; 
        HEXcolor.innerHTML = e.target.value; 
        box.style.backgroundColor  = e.target.value;
    })
    
})