let menu = document.querySelector('#menu-but'), header = document.querySelector('header'), theme = 
    document.querySelector('#theme');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

theme.onclick = () => {
    theme.classList.toggle('fa-sun');
    theme.classList.toggle('fa-moon');
    
    if(theme.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}