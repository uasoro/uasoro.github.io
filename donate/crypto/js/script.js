document.addEventListener("DOMContentLoaded", function () {
    const videoFiles = [
      "media/v1.mp4",
      "media/v2.mp4",
      "media/v3.mp4"
    ];
  
    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    const randomVideoFile = videoFiles[randomIndex];
  
    const videoElement = document.querySelector(".background-video video");
    const sourceElement = document.createElement("source");
  
    sourceElement.setAttribute("src", randomVideoFile);
    sourceElement.setAttribute("type", "video/mp4");
  
    videoElement.appendChild(sourceElement);
    videoElement.load();
  });

function copybtc() {
    navigator.clipboard.writeText('bc1qqrq49y0s2kraqncezlm26nhyrxfsayvh9v8d3y')
}
function copyeth() {
  navigator.clipboard.writeText('0xb24dE1359eB9250D54e0A69821b29b4A7D4E2615')
}
function copytron() {
  navigator.clipboard.writeText('TLVdNL63dfh5kivqYj2NQPPeTf5BiVmuik')
}
function copyltc() {
  navigator.clipboard.writeText('ltc1qhljuvv7e4u8wlf37nfj6kvsu6aqt2ms8qfqca6')
}
function copyton() {
  navigator.clipboard.writeText('UQCObsF1KiO3UuS_SOIlCo24aZmTRaLA88IjSygnQOJDewnO')
}