const linksBox = document.getElementById('links');
const reverseButton = document.getElementById('reverse');
const reverseButton2 = document.getElementById('reverse2');
const reverseButton3 = document.getElementById('reverse3');
const lightButton = document.getElementById("light");
let isLight = false;


reverseButton.onclick = function() {
    document.querySelector('.card-inner').classList.toggle('reverse');
    setTimeout(() => {
        linksBox.style.visibility = 'hidden'
    }, 155);
}
reverseButton2.onclick = function() {
    document.querySelector('.card-inner').classList.toggle('reverse');
    setTimeout(() => {
        linksBox.style.visibility = 'visible'
    }, 250);
}

lightButton.onclick = function() {
    setLight(isLight ^= true)
}


function setLight(state) {
    const selectors = document.querySelectorAll('.light-text, .lang, .skills > a > img')
    const LightBtn = document.querySelector('.lightBtn')
    selectors.forEach(selector => {
        if (state) {
            selector.classList.add('disable-shadow')
        } else {
            selector.classList.remove('disable-shadow')
        }
    })

    if (state) {
        LightBtn.style.backgroundColor = '#ed3621'
        LightBtn.style.color = '#fff'
        LightBtn.textContent = 'light off'
    } else {
        LightBtn.style.backgroundColor = ''
        LightBtn.style.color = ''
        LightBtn.textContent = 'light on'
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const videoFiles = [
      "./media/v1.mp4",
    ];

    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    const randomVideoFile = videoFiles[randomIndex];

    const videoElement = document.querySelector('.background-video');
    videoElement.innerHTML = `<source src="${randomVideoFile}" type="video/mp4">`;
    videoElement.load();
});