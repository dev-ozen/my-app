$(document).ready(function () {
    const slidesData=$('.slide');
    let pointer=0;

    function viewSlide(){
        slidesData.removeClass('active');
        slidesData.eq(pointer).addClass('active');
    }

    function next() {
        pointer++;
        if (pointer>=slidesData.length){
            pointer=0;
        }
        viewSlide();
    }
    setInterval(next,3000);

})