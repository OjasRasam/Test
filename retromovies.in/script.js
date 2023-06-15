
    var body = document.querySelector('body');
    var hoverElement = document.querySelector('.logo');

    hoverElement.addEventListener('mouseover', function() {
    body.style.backgroundImage = "url('images/background_color.jpg')";
    });

    hoverElement.addEventListener('mouseout', function() {
    body.style.backgroundImage = "url('images/background.jpg')";
    });