/* ==========================================================================
   HAPPY BIRTHDAY MUMMA - JAVASCRIPT ENGINE
   Crafted with love, devotion, and interactive magic for Mumma from her daughter 👑🎀
   ========================================================================== */

// --- 1. MEMORY DATA FOR 14 REAL PHOTOS ---
const memoryData = [
  {
    src: "images/img_01_puja_blessing.jpg",
    title: "Seeking Blessings Together",
    caption: "\"My biggest blessing in this world is having you as my mumma. You are my safe place and my eternal guide.\"",
    tag: "Blessings 🌸",
    likes: 12
  },
  {
    src: "images/img_02_family_smile.jpg",
    title: "Our Little World",
    caption: "\"With your love, our entire home is filled with warmth, smiles, and pure blessings. The three of us forever.\"",
    tag: "Our Family 👨‍👩‍👧‍👦",
    likes: 15
  },
  {
    src: "images/img_03_traditional_duo.jpg",
    title: "Traditional Elegance",
    caption: "\"Everyone says I get my glow from you! You look so graceful and stunning in every single frame, Mumma.\"",
    tag: "Twinning 🎀",
    likes: 18
  },
  {
    src: "images/img_04_growing_up.jpg",
    title: "Growing Up In Your Arms",
    caption: "\"From holding your hand as a little girl to today... you've always been my guiding light and biggest protector.\"",
    tag: "Through the Years ⏳",
    likes: 20
  },
  {
    src: "images/img_05_cafe_celebration.jpg",
    title: "Sweet Moments & Fairy Lights",
    caption: "\"Late night treats, glowing lights, and laughing together with cake — missing our food dates and celebrations so much!\"",
    tag: "Celebrations 🎂",
    likes: 16
  },
  {
    src: "images/img_06_proud_school_day.jpg",
    title: "My Biggest Cheerleader",
    caption: "\"Every single achievement I ever earned is yours first. Seeing your proud smile was always my greatest reward.\"",
    tag: "Proud Mumma 🏅",
    likes: 25
  },
  {
    src: "images/img_07_swing_festive.jpg",
    title: "Festivals & Warm Swings",
    caption: "\"Festivals and our home are only special because you make them so magical with your love, sweets, and warmth.\"",
    tag: "Festive Joy 🪔",
    likes: 19
  },
  {
    src: "images/img_08_lawn_elegance.jpg",
    title: "Grace, Love & Beauty",
    caption: "\"You look like absolute royalty here. My queen, my role model, today and every single day of my life.\"",
    tag: "My Queen 👑",
    likes: 30
  },
  {
    src: "images/img_09_garden_vacation.jpg",
    title: "Blossoms & Holding Hands",
    caption: "\"Holding your hand gives me more strength and peace than anything else in this world.\"",
    tag: "Hand In Hand 🌿",
    likes: 17
  },
  {
    src: "images/img_10_cozy_couch.jpg",
    title: "The Everyday Magic",
    caption: "\"Just sitting next to you on the couch talking about everything and nothing — that is the true meaning of home.\"",
    tag: "Casual Smiles ☕",
    likes: 14
  },
  {
    src: "images/img_11_home_portrait.jpg",
    title: "Pure Happiness",
    caption: "\"Your presence makes any room feel like paradise. Thank you so much for making my life beautiful just by being in it.\"",
    tag: "Home Sweet Home 🏡",
    likes: 13
  },
  {
    src: "images/img_12_admiration_night.jpg",
    title: "The Way I Look At You",
    caption: "\"This picture says everything my words can't — you are my queen, my teacher, my world, and my absolute hero.\"",
    tag: "Adoring You ✨",
    likes: 28
  },
  {
    src: "images/img_13_playful_peace.jpg",
    title: "Forever Your Silly Girl",
    caption: "\"No matter how old I grow, I will always be your dramatic, goofy daughter making silly faces just to make you smile!\"",
    tag: "Forever Silly ✌️",
    likes: 21
  },
  {
    src: "images/img_14_warm_hug.jpg",
    title: "My Safest Shelter",
    caption: "\"I wish I could hug you right now just like this... resting my head on your shoulder is my safest place in the whole universe.\"",
    tag: "Warmest Hug 🫂",
    likes: 35
  }
];

// --- 2. DAUGHTER'S RANDOM LOVE NOTES FOR THE JAR ---
const daughterLoveNotes = [
  "Mumma, please remember to smile today! Your smile is the most precious thing in my life. ✨",
  "Yaha rehe ke pata chala apki kya value kya hai... nobody loves me the way you do! 🫂",
  "Sending you the biggest, tightest hug across the distance right this second! 🤗💕",
  "You are not just my mother, you are my safest home and forever person. 🌸",
  "Agli baar pakka sath me double celebration karenge with lots of cake and hugs! 🎂",
  "You deserve every drop of happiness in the entire universe, my queen! 👑💖",
  "Even when I don't say it out loud, I think of you and miss you every single day. 🎀",
  "Thank you for being my anchor, my guide, and my biggest blessing in this lifetime! 🪄",
  "Take care of your health today, eat on time, and remember your daughter loves you endlessly! 💌"
];

// --- 3. WEB AUDIO API - SOOTHING SENTIMENTAL PIANO ENGINE ---
let audioCtx = null;
let isMusicPlaying = false;
let melodyInterval = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Gentle sentimental arpeggio chords (C major 7th / F maj9 / G / Am)
const chordProgression = [
  // C major 7: C4, E4, G4, B4
  [261.63, 329.63, 392.00, 493.88],
  // G major: G3, B3, D4, G4
  [196.00, 246.94, 293.66, 392.00],
  // A minor 7: A3, C4, E4, G4
  [220.00, 261.63, 329.63, 392.00],
  // F major 7: F3, A3, C4, E4
  [174.61, 220.00, 261.63, 329.63]
];

let currentChordIndex = 0;
let noteInChord = 0;

function playPianoNote(freq, duration = 1.4, volume = 0.08) {
  if (!audioCtx || !isMusicPlaying) return;
  
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    // Warm bell-piano tone
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Envelope
    gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(volume, audioCtx.currentTime + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Audio note error:", e);
  }
}

function startBackgroundMelody() {
  initAudioContext();
  isMusicPlaying = true;
  updateMusicUI(true);

  if (melodyInterval) clearInterval(melodyInterval);

  melodyInterval = setInterval(() => {
    if (!isMusicPlaying) return;
    const currentChord = chordProgression[currentChordIndex];
    const freq = currentChord[noteInChord];
    playPianoNote(freq, 1.2, 0.06);

    noteInChord++;
    if (noteInChord >= currentChord.length) {
      noteInChord = 0;
      currentChordIndex = (currentChordIndex + 1) % chordProgression.length;
    }
  }, 420);
}

function stopBackgroundMelody() {
  isMusicPlaying = false;
  if (melodyInterval) {
    clearInterval(melodyInterval);
    melodyInterval = null;
  }
  updateMusicUI(false);
}

function toggleBackgroundMusic() {
  if (isMusicPlaying) {
    stopBackgroundMelody();
  } else {
    startBackgroundMelody();
  }
}

function updateMusicUI(playing) {
  const soundWave = document.getElementById('soundWave');
  const statusText = document.getElementById('musicStatusText');
  if (soundWave && statusText) {
    if (playing) {
      soundWave.classList.remove('paused');
      statusText.textContent = 'Melody: On 🎵';
    } else {
      soundWave.classList.add('paused');
      statusText.textContent = 'Melody: Muted 🔇';
    }
  }
}

// Sound effects: Chime, Blower, Heartbeat
function playChimeEffect() {
  initAudioContext();
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      playPianoNote(freq, 1.0, 0.12);
    }, idx * 120);
  });
}

function playBlowerEffect() {
  initAudioContext();
  try {
    const bufferSize = audioCtx.sampleRate * 0.8;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.8);

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start();
  } catch (e) {
    console.warn("Blower sound error:", e);
  }
}

function playHeartbeatSound() {
  initAudioContext();
  // Double lub-dub sound
  playPianoNote(85, 0.25, 0.25);
  setTimeout(() => {
    playPianoNote(70, 0.35, 0.2);
  }, 160);
}

// --- 4. ENVELOPE / ENTRANCE SURPRISE MODAL ---
function openBirthdaySurprise() {
  playChimeEffect();
  startBackgroundMelody();

  const overlay = document.getElementById('entranceOverlay');
  if (overlay) {
    overlay.classList.add('hidden');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 800);
  }

  // Celebratory confetti burst
  burstGrandConfetti();
}

// --- 5. CONFETTI EFFECTS ---
function burstGrandConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ff6b8b', '#ffd166', '#f85272', '#ff9ebb', '#d4af37']
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#ff758c', '#d4af37', '#ffffff']
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: ['#ff758c', '#d4af37', '#ffffff']
      });
    }, 300);
  }
}

function burstLoveConfetti() {
  playChimeEffect();
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.7 },
      shapes: ['circle'],
      colors: ['#ff3366', '#ff6b8b', '#ff99bb', '#ffffff', '#ffd700']
    });
  }
}

// --- 6. VIRTUAL CAKE STATE MACHINE ---
let candlesBlown = false;
let cakeCutDone = false;

function blowCandles() {
  if (candlesBlown) return;
  candlesBlown = true;

  playBlowerEffect();

  // Hide flames, show smoke
  const flames = document.querySelectorAll('.flame');
  const smokes = document.querySelectorAll('.smoke');

  flames.forEach(f => f.classList.add('extinguished'));
  smokes.forEach(s => s.classList.add('active'));

  // Update instruction & buttons
  const instruction = document.getElementById('instructionText');
  const blowBtn = document.getElementById('blowBtn');
  const cutBtn = document.getElementById('cutBtn');

  if (instruction) {
    instruction.innerHTML = '✨ Wish Made! Step 2: Now tap <strong>Cut the Cake</strong> to share the sweetness! 🍰';
  }
  if (blowBtn) {
    blowBtn.classList.add('disabled');
    blowBtn.disabled = true;
    blowBtn.innerHTML = 'Candles Blown! 💨';
  }
  if (cutBtn) {
    cutBtn.classList.remove('disabled');
    cutBtn.disabled = false;
  }

  // Soft celebration chime
  setTimeout(playChimeEffect, 400);
}

function cutCake() {
  if (!candlesBlown || cakeCutDone) return;
  cakeCutDone = true;

  // Animate knife
  const knife = document.getElementById('cakeKnife');
  const topTier = document.querySelector('.tier-top');
  const toast = document.getElementById('cakeToast');
  const instruction = document.getElementById('instructionText');
  const cutBtn = document.getElementById('cutBtn');

  if (knife) knife.classList.add('cutting');

  setTimeout(() => {
    if (topTier) topTier.classList.add('sliced');
    if (knife) knife.classList.remove('cutting');

    burstGrandConfetti();
    playChimeEffect();

    if (toast) toast.classList.add('show');
    if (instruction) {
      instruction.innerHTML = '🎉 Mumma, the cake is cut! Wishing you infinite joy, health & smiles today! 👑';
    }
    if (cutBtn) {
      cutBtn.classList.add('disabled');
      cutBtn.disabled = true;
      cutBtn.innerHTML = 'Cake Cut with Love 🍰';
    }
  }, 700);
}

function resetCake() {
  candlesBlown = false;
  cakeCutDone = false;

  const flames = document.querySelectorAll('.flame');
  const smokes = document.querySelectorAll('.smoke');
  const topTier = document.querySelector('.tier-top');
  const toast = document.getElementById('cakeToast');
  const instruction = document.getElementById('instructionText');
  const blowBtn = document.getElementById('blowBtn');
  const cutBtn = document.getElementById('cutBtn');

  flames.forEach(f => f.classList.remove('extinguished'));
  smokes.forEach(s => s.classList.remove('active'));
  if (topTier) topTier.classList.remove('sliced');
  if (toast) toast.classList.remove('show');

  if (instruction) {
    instruction.innerHTML = 'Step 1: Tap the candles to blow them out & make a secret wish! 🕯️';
  }
  if (blowBtn) {
    blowBtn.classList.remove('disabled');
    blowBtn.disabled = false;
    blowBtn.innerHTML = '<i class="fa-solid fa-wind"></i> 1. Blow the Candles 🕯️';
  }
  if (cutBtn) {
    cutBtn.classList.add('disabled');
    cutBtn.disabled = true;
    cutBtn.innerHTML = '<i class="fa-solid fa-utensils"></i> 2. Cut the Cake 🍰';
  }
}

// --- 7. PHOTO GALLERY FILTERING & LIGHTBOX ---
let currentLightboxIndex = 0;

function filterGallery(category, btnElement) {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const cards = document.querySelectorAll('.memory-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = 'flex';
      card.style.animation = 'cardFloatIn 0.4s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

function likePhoto(event, index) {
  event.stopPropagation();
  const countSpan = document.getElementById(`like-${index}`);
  if (countSpan) {
    let current = parseInt(countSpan.textContent) || 0;
    current++;
    countSpan.textContent = current;
    memoryData[index].likes = current;
    
    // Animate button
    const btn = event.currentTarget;
    btn.classList.add('liked');
    setTimeout(() => btn.classList.remove('liked'), 400);

    // Mini heart burst
    burstLoveConfetti();
  }
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightboxDirect() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeLightbox(event) {
  if (event.target.id === 'lightboxModal') {
    closeLightboxDirect();
  }
}

function changeLightboxSlide(delta) {
  currentLightboxIndex += delta;
  if (currentLightboxIndex < 0) currentLightboxIndex = memoryData.length - 1;
  if (currentLightboxIndex >= memoryData.length) currentLightboxIndex = 0;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = memoryData[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const caption = document.getElementById('lightboxCaption');
  const indexDisplay = document.getElementById('lightboxIndex');
  const likeDisplay = document.getElementById('lightboxLikeCount');

  if (img) img.src = item.src;
  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (indexDisplay) indexDisplay.textContent = `Memory ${currentLightboxIndex + 1} of ${memoryData.length}`;
  if (likeDisplay) likeDisplay.textContent = `${item.likes} Loves`;
}

function likeCurrentPhoto() {
  const item = memoryData[currentLightboxIndex];
  if (item) {
    item.likes++;
    const countSpan = document.getElementById(`like-${currentLightboxIndex}`);
    if (countSpan) countSpan.textContent = item.likes;
    const likeDisplay = document.getElementById('lightboxLikeCount');
    if (likeDisplay) likeDisplay.textContent = `${item.likes} Loves`;
    burstLoveConfetti();
  }
}

// Keyboard navigation for Lightbox
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightboxModal');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') changeLightboxSlide(-1);
    if (e.key === 'ArrowRight') changeLightboxSlide(1);
    if (e.key === 'Escape') closeLightboxDirect();
  }
});

// Touch swipe support for Lightbox on mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
  const lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
});

function handleSwipe() {
  const threshold = 50;
  if (touchEndX < touchStartX - threshold) {
    changeLightboxSlide(1); // swipe left -> next
  }
  if (touchEndX > touchStartX + threshold) {
    changeLightboxSlide(-1); // swipe right -> prev
  }
}

// --- 8. VIRTUAL HUG MACHINE ENGINE ---
let hugTimer = null;
let hugProgress = 0;
let isHoldingHug = false;
let heartbeatInterval = null;

function startHug(e) {
  if (e) e.preventDefault();
  isHoldingHug = true;
  hugProgress = 0;

  const orb = document.querySelector('.hug-orb-wrapper');
  const status = document.getElementById('hugStatusText');
  const fill = document.getElementById('hugMeterFill');
  const label = document.getElementById('hugBtnLabel');

  if (orb) orb.classList.add('holding');
  if (status) status.textContent = 'Keep holding... sending love across the miles! 🫂';
  if (label) label.textContent = 'SQUEEZING...';

  // Haptic feedback if available
  if (navigator.vibrate) {
    navigator.vibrate(80);
  }

  // Heartbeat sound
  playHeartbeatSound();
  heartbeatInterval = setInterval(playHeartbeatSound, 800);

  const duration = 2500; // 2.5 seconds
  const step = 50;

  hugTimer = setInterval(() => {
    hugProgress += (step / duration) * 100;
    if (fill) fill.style.width = `${Math.min(hugProgress, 100)}%`;

    if (hugProgress >= 100) {
      completeHug();
    }
  }, step);
}

function endHug(e) {
  if (!isHoldingHug) return;
  isHoldingHug = false;

  clearInterval(hugTimer);
  clearInterval(heartbeatInterval);

  const orb = document.querySelector('.hug-orb-wrapper');
  const label = document.getElementById('hugBtnLabel');
  if (orb) orb.classList.remove('holding');

  if (hugProgress < 100) {
    const fill = document.getElementById('hugMeterFill');
    const status = document.getElementById('hugStatusText');
    if (fill) fill.style.width = '0%';
    if (status) status.textContent = 'Almost! Hold down a little longer for the full hug! 💕';
    if (label) label.textContent = 'HOLD FOR HUG';
  }
}

function completeHug() {
  clearInterval(hugTimer);
  clearInterval(heartbeatInterval);
  isHoldingHug = false;

  const orb = document.querySelector('.hug-orb-wrapper');
  const label = document.getElementById('hugBtnLabel');
  const banner = document.getElementById('hugDeliveredBanner');
  const status = document.getElementById('hugStatusText');

  if (orb) orb.classList.remove('holding');
  if (label) label.textContent = 'HUG SENT! 💖';
  if (status) status.textContent = 'A big warm hug has been delivered directly to Mumma! 🥰';
  if (banner) banner.classList.add('show');

  // Haptic vibration fanfare
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 150, 50, 200]);
  }

  burstLoveConfetti();
  playChimeEffect();
}

// --- 9. DAILY REASON TO SMILE (LOVE NOTE JAR) ---
function pickLoveNote() {
  playChimeEffect();
  burstLoveConfetti();

  const noteCard = document.getElementById('noteDisplayCard');
  const noteText = document.getElementById('noteText');

  const randomIndex = Math.floor(Math.random() * daughterLoveNotes.length);
  const selected = daughterLoveNotes[randomIndex];

  if (noteCard) {
    noteCard.style.animation = 'none';
    noteCard.offsetHeight; // trigger reflow
    noteCard.style.animation = 'cardFloatIn 0.4s ease';
  }

  if (noteText) {
    noteText.textContent = selected;
  }
}

// --- 10. VOICE LETTER (NATIVE SPEECH SYNTHESIS) ---
let isSpeaking = false;

function playVoiceLetter() {
  if (!('speechSynthesis' in window)) {
    alert("Speech synthesis is not supported on this browser, but your daughter's letter is right here for you to read with all love!");
    return;
  }

  const btnText = document.getElementById('voiceBtnText');

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    if (btnText) btnText.textContent = "Listen to Daughter's Letter 🎙️";
    return;
  }

  // The exact verbatim letter text from your daughter
  const letterText = `Happy Birthday to my forever person, my mumma, my biggest blessing, and the heart of my little world. 
  I wish me waha hoti to sath me celebrate karte, but nevermind next time. I know waha pe koi nahi hai apko special feel karwane wala, I wish I could give you even half of the happiness you bring into my life. 
  I wish apki smile kabhi fade na ho. Thank you soo much mumma for making my life feel a little more beautiful just by being in it. 
  And so sorry for every time I hurt you intentionally or not, yaha rehe ke pata chala apki kya value kya hai, I wish I could hug you and wish you jaise hamesha karti thi, nevermind I miss you soo much. 
  Love you endlessly, mumma. You deserve all the happiness in the universe, please just stay happy for me. 
  Happy Birthday my queen!`;

  const utterance = new SpeechSynthesisUtterance(letterText);
  utterance.rate = 0.92;
  utterance.pitch = 1.05;

  utterance.onstart = () => {
    isSpeaking = true;
    if (btnText) btnText.textContent = "Pause Letter ⏸️";
  };

  utterance.onend = () => {
    isSpeaking = false;
    if (btnText) btnText.textContent = "Listen Again 🎙️";
  };

  utterance.onerror = () => {
    isSpeaking = false;
    if (btnText) btnText.textContent = "Listen to Daughter's Letter 🎙️";
  };

  window.speechSynthesis.speak(utterance);
}

// --- 11. SMOOTH SCROLL SHORTCUTS ---
function scrollToLetter() {
  const el = document.getElementById('letterSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function scrollToCake() {
  const el = document.getElementById('cakeSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// --- 12. FLOATING SPARKLES & PARTICLES CANVAS ---
function initSparkles() {
  const canvas = document.getElementById('sparkleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 28;
  const symbols = ['🌸', '✨', '🎀', '💖', '⭐'];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 14 + 10,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.6,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      opacity: Math.random() * 0.6 + 0.2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.symbol, 0, 0);
      ctx.restore();

      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
    });

    requestAnimationFrame(render);
  }

  render();
}

// --- 13. ACTIVE NAVIGATION TRACKER ---
function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- INITIALIZE ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initSparkles();
  initScrollSpy();

  const musicBtn = document.getElementById('musicToggleBtn');
  if (musicBtn) {
    musicBtn.addEventListener('click', toggleBackgroundMusic);
  }

  // Pre-load audio context on first user interaction anywhere
  const warmAudio = () => {
    initAudioContext();
    document.removeEventListener('click', warmAudio);
    document.removeEventListener('touchstart', warmAudio);
  };
  document.addEventListener('click', warmAudio);
  document.addEventListener('touchstart', warmAudio);
});
