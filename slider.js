const slider = document.querySelector('.slide');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul')

var sectionIndex = 0;

var s = 0;
var time = 0;

function startSlide() {
    time = setInterval(function() {
        sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -780 + 'px)';

        document.querySelector('.controls .selected').classList.remove('selected');
        indicatorParents.children[sectionIndex].classList.add('selected');
    }, 3000);
};

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        clearInterval(time);

        sectionIndex = ind;
        slider.style.transform = 'translate(' + (sectionIndex) * -780 + 'px)';

        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        
        startSlide();
    });
});


leftArrow.addEventListener('click', function() {
    clearInterval(time);

    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 2;
    slider.style.transform = 'translate(' + (sectionIndex) * -780 + 'px)';

    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');

    startSlide();
});

rightArrow.addEventListener('click', function() {
    clearInterval(time);

    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -780 + 'px)';

    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');

    startSlide();
});
startSlide();
