let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let seekBar = document.getElementById("play");
let songItems = Array.from(document.getElementsByClassName("songItems"));


let songs = [
  {
    songName: "7 rings",
    filePath: "1.mp3",
    coverPath: "cover/1.png",
    songName: "Sad girls luv money",
    filePath: "2.mp3",
    coverPath: "cover/2.jpg",
    songName: "infinity",
    filePath: "3.mp3",
    coverPath: "cover/3.jpg",
    songName: "Cry baby",
    filePath: "4.mp3",
    coverPath: "cover/4.jpg",
    songName: "stay",
    filePath: "5.mp3",
    coverPath: "cover/5.png",
    songName: "Heat Waves",
    filePath: "6.mp3",
    coverPath: "cover/6.png",
    songName: "Often",
    filePath: "7.mp3",
    coverPath: "cover/7.jpg",
  },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 0.6;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  play.value = progress;
});
play.addEventListener("change", () => {
  audioElement.currentTime = (play.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      gif.style.opacity = 1;
      audioElement.src = `${songIndex + 1}.mp3`;
    
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
 
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
