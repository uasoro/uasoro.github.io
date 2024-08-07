document.addEventListener("DOMContentLoaded", function () {
    const videoFiles = [
      "media/v1.mp4",
      "media/v2.mp4",
      "media/v3.mp4",
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
