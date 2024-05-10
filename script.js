const video = document.querySelector(".background-video");
const playPauseIcon = document
  .getElementById("playPauseBtn")
  .querySelector("img");
const soundIcon = document.getElementById("soundBtn").querySelector("img");

document.getElementById("playPauseBtn").addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseIcon.src = "imgs/pause.png"; // Switch to pause icon
  } else {
    video.pause();
    playPauseIcon.src = "imgs/play.png"; // Switch to play icon
  }
});

document.getElementById("soundBtn").addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    soundIcon.src = "imgs/sound.png"; // Icon indicating sound is on
  } else {
    video.muted = true;
    soundIcon.src = "imgs/mute.png"; // Icon indicating sound is off
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const animateValue = (id, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      document.getElementById(id).textContent = value.toLocaleString("he-IL");
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  animateValue("families-helped", 0, 3000, 2000); // Duration 2000ms
  animateValue("packages-delivered", 0, 5000, 2500); // Duration 2500ms
  animateValue("funds-raised", 0, 1500000, 3000); // Duration 3000ms
});
function changeVideo(videoName) {
  const videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.src = `video/${videoName}`;
  videoPlayer.play();
}
