
// header scroll bolganda black bolishi
window.addEventListener("scroll", function() {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 5);
});

function navBack(){
    var nav = document.getElementById('nav').classList.toggle("change");
}


// function timeShover(params) {
//     let timeNow = new Date(); 

//     document.querySelector('.hours').textContent = timeNow.getHours();
//     document.querySelector('.minutes').textContent = timeNow.getMinutes();
//     document.querySelector('.seconds').textContent = timeNow.getSeconds();
// }

// setInterval(function() {
//     timeShover();
// }, 1000)

const timeShover = (e) => {
    let timeNow = new Date(); 

    document.querySelector('.hours').textContent = timeNow.getHours();
    document.querySelector('.minutes').textContent = timeNow.getMinutes();
    document.querySelector('.seconds').textContent = timeNow.getSeconds();

}
timeShover();
setInterval(function() {
    timeShover();
}, 1000);