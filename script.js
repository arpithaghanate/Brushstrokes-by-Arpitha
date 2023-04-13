window.onload = function(){
    alert("THIS IS A WARNING. Stealing our intellectual property means we will hunt you down and feed you to the Computer Fraud and Abuse Act")
}



const video = document.querySelector('video');

video.addEventListener('mouseenter', () => {
  video.currentTime = 0;
  video.play();
});

video.addEventListener('mouseleave', () => {
  video.pause();
});
