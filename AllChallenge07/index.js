let Toggle = document.querySelector('.toggle');
let Toggle_Button = document.querySelector('.toggle-button');
let click_count = 0;

Toggle.addEventListener('click', () => {
    if (click_count === 1 || click_count%2===0) {
        Toggle_Button.style.transform = 'translateX(40px)';
        Toggle_Button.style.backgroundColor = 'white';
        Toggle.style.backgroundColor = 'green';
        
    } else {
        Toggle_Button.style.transform = 'translateX(0px)';
        Toggle.style.backgroundColor = 'white';
        Toggle_Button.style.backgroundColor = 'green';
        
        
    }
    click_count++;
});
