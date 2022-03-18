let scenes = [
  {
    title: "Scene 1",
    text: "This is the first scene. Observe!",
    sprite: "raccoon.png",
    spritePosX: 100,
    spritePosY: 100,
    bg: "bg2.png",
    audio: "path",
  },
  {
    title: "Scene 2",
    text: "This is the second scene. Observe!",
    sprite: "greenMan.png",
    spritePositionX: 100,
    spritePositionY: 100,
    bg: "bg2.png",
    audio: "path",
  },
];

let sceneNum = 0;

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let title = document.getElementById("sceneTitle");
let sceneText = document.getElementById("sceneText");

let nextSceneButton = document.getElementById("nextButton");
nextSceneButton.onclick = function () {
  nextScene();
};

let prevSceneButton = document.getElementById("prevButton");
prevSceneButton.onclick = function () {
  prevScene();
};

function nextScene() {
  let currScene = scenes[sceneNum];
  loadScene(currScene);
  sceneNum++;
}

function prevScene() {
  let currScene = scenes[--sceneNum];
  loadScene(currScene);
}

let spritePath = "./img/sprite/";
function drawSprite(sprite, posX, posY) {
  let spriteImg = new Image();
  spriteImg.src = spritePath + sprite;
  console.log(spriteImg);
  if (spriteImg.complete) {
    ctx.drawImage(spriteImg, posX, posY);
  } else {
    spriteImg.onload = function () {
      ctx.drawImage(spriteImg, posX, posY);
    };
  }
}

function loadScene(scene) {
  console.log("loaddd");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  title.textContent = scene.title;
  sceneText.textContent = scene.text;
  drawSprite(scene.sprite, scene.spritePosX, scene.spritePosY);
  setBG(scene.bg);
}

let bgPath = "./img/bg/";
function setBG(bgName) {
  let bg = bgPath + bgName;
  canvas.style.background = "url(" + bg + ")";
  canvas.style.backgroundSize = "100% 100%";
}
