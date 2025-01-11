let sound, fft;
let startTime;
let showWaveform = false, showCircle = true, showHearts = false;
let currentState = "circle"; 
let particles = [];

let alphaValue = 0;
let fadeSpeed = 0.5;

function preload() {
  sound = loadSound('One Last Kiss.mp3');
}

function setup() {
  createCanvas(800, 800);
  fft = new p5.FFT();
  angleMode(DEGREES);
  stroke('#ff32ff');
  startTime = millis();
}
  // 00:19 / 00:36 / 00:54 / 01:03 / 01:11 / 01:20
  // 01:37 / 01:54 / 02:12 / 02:29 / 02:45 / 03:03
  // 03:21 / 03:38 / ... 

function draw() {
  background('black');
  
  let currentTime = sound.currentTime();
  
  push();
  translate(width / 2, height / 2); 
  drawCircle();
  pop();
  
  displayTime();
  
  let p = new Particle();
  particles.push(p);

  for (let i = 0; i < particles.length; i++) {
    if (!particles[i].edges()) {
      particles[i].update();
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }
  }

  if (currentTime < timestamps[0]) {
    displaySongInfo();
  } else {
    displayLyrics(currentTime);
  }
}

function drawCircle() {
  noFill();
  strokeWeight(4);
  stroke('#ff32ff');
  let wave = fft.waveform();

  for (let t = -1; t <= 1; t += 2) {
    beginShape();
    for (let i = 0; i <= 180; i++) {
      let index = floor(map(i, 0, 180, 0, wave.length - 1));
      let r = map(wave[index], -1, 1, 150, 350);

      let x = r * sin(i) * t;
      let y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }

}

class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));

    this.w = random(3, 5)
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show() {
    noStroke();
    fill('#ff32ff');
    ellipse(width / 2 + this.pos.x, height / 2 + this.pos.y, this.w);
  }

  edges() {
    if (this.pos.x < -width / 2 || this.pos.x > width / 2 || this.pos.y < -height / 2 || this.pos.y > height / 2) {
      return true;
    } else {
      return false;
    }
  }
}

function mousePressed() {
  userStartAudio();
  if (sound.isPlaying()) {
    sound.pause();
    startTime = millis();
  } else {
    sound.play();
    startTime = millis();
  }
}

function formatTime(seconds) { 
  let m = floor(seconds / 60);
  let s = floor(seconds % 60);
  return nf(m, 2) + ':' + nf(s, 2);
}

function displayTime() {
  let currentTime = sound.currentTime();
  let duration = sound.duration();

  let formattedCurrentTime = formatTime(currentTime);
  let formattedDuration = formatTime(duration);
  textSize(25);
  stroke('#ff32ff');
  textFont('Courier New');
  fill('#ff32ff');
  textAlign(RIGHT, BOTTOM);
  text(`${formattedCurrentTime} / ${formattedDuration}`, width - 20, height - 20);
}

const lyrics = [
  "初めてのルーブルは", "なんてことは無かったわ", "私だけのモナリザ", "もうとっくに出会ってたから",
  "初めてあなたを見た", "あの日動き出した歯車", "止められない喪失の予感",
  "もういっぱいあるけど", "もひとつ増やしましょう",

  "Can you give me\nOne Last Kiss ♥?", "忘れたくないこと",
  "Oh-oh-oh-oh,\noh-woah", "oh-oh-oh,\noh-woah", "Oh-oh-oh-oh", "忘れたくないこと",
  "Oh-oh-oh-oh,\noh-woah", "oh-oh-oh\n(oh-oh)", "Oh-oh-oh-oh", "I LOVE ♥ you more than\nyou'll ever know, oh",

  "写真は苦手なんだ", "でもそんなものはいらないわ", "あなたが焼きついたまま", "私の心のプロジェクター",
  "寂しくないふりしてた", "まあ、そんなのお互い様か", "誰かを求めることは", "即ち傷つくことだった",

  "Oh, can you give me\nOne Last Kiss ♥?", "燃えるようなキスをしよう", "忘れたくても", "忘れられないほど",
  "Oh-oh-oh-oh,\noh-woah", "oh-oh-oh,\noh-woah", "Oh-oh-oh-oh", "I LOVE ♥ you more than\nyou'll ever know",
  "Oh-oh-oh-oh,\noh-woah", "oh-oh-oh\n(oh-oh)", "Oh-oh-oh-oh", "I LOVE ♥ you more than\nyou'll ever know, oh",
  "I LOVE ♥ you more than\nyou'll ever know",

  "もう分かっているよ", "この世の終わりでも", "年をとっても",
  "忘れられない人", "忘れられない人\n忘れられない人", "忘れられない人", "忘れられない人", "I LOVE ♥ you more than\nyou'll ever know",
  "忘れられない人\n忘れられない人", "忘れられない人", "忘れられない人", "Oh-oh-oh-oh", "I LOVE ♥ you more than\nyou'll ever know",
  "忘れられな\n忘れられな", "忘れられな\n忘れられない人", "忘れられな\n忘れられな", "忘れられない人", "I LOVE ♥ you more than\nyou'll ever know",

  "Ooh", "吹いていった風の後を", "追いかけた眩しい午後"
];

let timestamps = [
  20.6, 22.8, 25, 26.8,
  29.3, 31.2, 33.6,
  37.8, 43.6,
  
  48.1, 52.4,
  55, 57.1, 59.3, 60.9, 
  63.6, 65.7, 67.7, 69.3,

  80.5, 82.6, 85, 86.9,
  89.2, 91.2, 93.5, 95.4,
  
  97.7, 103.5, 108, 112.2,
  114.9, 117.3, 118.9, 120.7, 
  123.6, 125.7, 127.7, 129.2,
  135.9,
  
  149.25, 155.18, 159.5,
  166, 170.2, 174.5, 178.8, 181,
  184, 189.6, 191.8, 194, 198.1, 
  200, 204.5, 209.3, 213, 215.2, 
  
  222, 226, 230.5
];

const songDetails = {
  title: "One Last Kiss",
  artist: "Hikaru Utada 宇多田光",
  lyrics
};

let currentLyricIndex = 0;
let lyricChangeInterval = 4000; 
let lastLyricChangeTime = 0;

function displaySongInfo() {
  textAlign(CENTER, CENTER);
  stroke('#ff32ff');
  textFont('Verdana');
  fill('#ff32ff');
  strokeWeight(2.5);
  textSize(40);
  text("One Last Kiss", width / 2, height / 2 - 20);
  textSize(30);
  text("by Hikaru Utada", width / 2, height / 2 + 20);
}

function displayLyrics(currentTime) {
  if (currentTime >= timestamps[currentLyricIndex + 1]) {
    currentLyricIndex++;
  }

  textSize(35);
  strokeWeight(2.5);
  stroke('#ff32ff');
  textFont('Verdana');
  fill('#ff32ff');
  textWrap(WORD);
  textAlign(CENTER, CENTER);
  text(lyrics[currentLyricIndex], width / 2, height / 2);
}