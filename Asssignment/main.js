var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

var btn = document.querySelector('button');
    btn.onclick = function () {
        var txt;
        var name = prompt('Please enter your name:', 'Name');
        if (!(name == null || name == '')) {
            txt = 'Welcome, ' + name;
        }
        else{
            txt = 'Mozilla is cool';
        }
         myHeading.textContent = txt;
    };
