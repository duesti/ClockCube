document.addEventListener('DOMContentLoaded', function () {
    
    let burger = document.getElementById('burger-toggle');

    burger.addEventListener('click', function () {

        let burgerItems = document.getElementById('currentOpened');
        burgerItems.classList.toggle('open');

        let burgerContainer =  document.getElementById('currentOpenedContainer');
        burgerContainer.classList.toggle('open');

    })

})