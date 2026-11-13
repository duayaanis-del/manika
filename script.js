// Track list for each section (make sure these filenames match your MP3 files)
const songs = {
  main: 'main.mp3',
  memories: 'memories.mp3',
  reasons: 'reasons.mp3',
  proposal: 'proposal.mp3'
};

let currentTrack = 'main';

// Helper function to switch and play a specific song
function playTrack(trackKey) {
  const music = document.getElementById('bg-music');
  const newSrc = songs[trackKey];

  if (!music || !newSrc) return;

  currentTrack = trackKey;

  // Only reload if switching to a different song
  if (!music.src.endsWith(newSrc)) {
    music.src = newSrc;
    music.currentTime = 0;
  }

  music.volume = 0.5;
  music.play().catch(() => {
    // Browser will wait for the user's first tap/click before starting audio
  });
}

// Try to start main.mp3 on page load, and guarantee it plays on first tap/click anywhere
window.addEventListener('DOMContentLoaded', () => {
  playTrack('main');
});

document.addEventListener('click', () => {
  const music = document.getElementById('bg-music');
  if (music && music.paused) {
    playTrack(currentTrack);
  }
}, { once: true });

// Start main music and move to Screen 2 when she clicks YES
function startExperience() {
  playTrack('main');
  nextScreen(2);
}

// Function to switch between screens
function nextScreen(screenNumber) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  // Play main.mp3 on Screen 1, Screen 2, and Screen 4
  if (screenNumber === 1 || screenNumber === 2 || screenNumber === 4) {
    playTrack('main');
  }

  // Show the target screen
  const targetScreen = document.getElementById(`screen-${screenNumber}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

// Function to handle opening different gift/surprise contents
function openGift(type) {
  const contentDiv = document.getElementById('gift-content');

  // Play the specific song for the selected card
  playTrack(type);

  if (type === 'memories') {
    contentDiv.innerHTML = `
      <h3>Our Favorite Memory 📸</h3>
      <p style="text-align: center;">Every single moment I spend with you feels like magic. Your smile literally brightens up my entire world!</p>
      
      <div class="memories-gallery">
        <div class="polaroid-card">
          <img src="pic1.jpg" alt="Memory 1">
          <p>One of my favorite days with you ❤️</p>
        </div>

        <div class="polaroid-card">
          <img src="pic2.jpg" alt="Memory 2">
          <p>Still my favorite smile ✨</p>
        </div>

        <div class="polaroid-card">
          <img src="pic3.jpg" alt="Memory 3">
          <p>Every moment with you is my favorite 💕</p>
        </div>

        <div class="polaroid-card">
          <img src="pic4.jpg" alt="Memory 4">
          <p>The best memories are always with you 🥰</p>
        </div>

        <div class="polaroid-card">
          <img src="pic5.jpg" alt="Memory 5">
          <p>Can't wait to make a million more 💖</p>
        </div>
      </div>
    `;
  } else if (type === 'reasons') {
    contentDiv.innerHTML = `
      <h3>Letter For My Forever</h3>
      <p><b>To Someone Who Means More Than Words Can Ever Explain ❤️</b></p>
      <p>I have honestly been thinking about how to put everything I feel into words, and the more I think about it, the more I realise that no matter how long this message gets, it will probably never be enough to explain what you mean to me. But I still want to try, because you deserve to know just how special you are to me.</p>
      <p>Sometimes, someone enters your life without you even realising how much of an impact they're going to have on you. And slowly, without even trying, they become someone you look forward to talking to, someone whose messages can change your mood, someone you think about during the most random moments of the day. For me, that person is you.</p>
      <p>It's funny how the smallest things can end up meaning the most. A random conversation, a silly joke, a little argument, a good morning text, or even just knowing that I get to talk to you. These might seem like ordinary things, but to me, they hold a special place. It's not always about grand gestures or big moments. Sometimes, it's simply about having someone who makes even the most ordinary days feel a little brighter.</p>
      <p>I want you to know that I appreciate you. Not just the way you make me feel, but you as a person. Your personality, your little habits, your way of thinking, your laughter, your opinions, and all those tiny details that make you different from everyone else. I want to keep discovering more about you, even the things you think are unimportant. I want to know about your happiest memories, your biggest dreams, the things that make you nervous, the things that make you laugh uncontrollably, and even the little things that bother you.</p>
      <p>I don't want you to ever feel like you have to pretend to be someone else around me. You don't have to be happy all the time, you don't have to have everything figured out, and you certainly don't have to be perfect. I want you to feel comfortable being completely yourself. Whether you're having the best day ever or one of those days when absolutely nothing seems to go right, I want you to know that you deserve patience, kindness, and understanding.</p>
      <p>I know that relationships aren't always going to be like a movie. There will be misunderstandings, disagreements, difficult conversations, and moments when we might not understand each other immediately. But I don't believe that something meaningful is measured by how perfect everything looks from the outside. I believe it's about two people who are willing to understand each other, communicate honestly, learn from their mistakes, and make an effort even when things aren't easy.</p>
      <p>I want to experience all the little things with you. The random late-night conversations, the pointless arguments over the silliest things, the inside jokes that nobody else understands, the unexpected pictures, the long calls, the moments when we can't stop laughing, and even the quiet moments when we don't necessarily need to say anything.</p>
      <p>I want us to have memories that we'll look back on someday and think about how beautiful it was to experience all those moments together. I want to celebrate your achievements as if they were my own, encourage you whenever you doubt yourself, and remind you that your dreams matter. I want to hear about the things you're excited about, even if you end up talking about them for hours. Your happiness matters to me, and I never want you to feel that the things important to you are insignificant.</p>
      <p>And please, never think that you have to earn appreciation by doing something extraordinary. You deserve to feel valued simply for being you. You don't need to have the perfect appearance, say the perfect things, or have the perfect day to deserve love and kindness. The person you already are is someone worth appreciating.</p>
      <p>I also want to be someone who grows with you. Someone who learns how to understand you better with time, recognises when something is bothering you, respects your boundaries, and never makes you feel that your feelings don't matter. I know I'll have things to learn, and I know I won't always get everything right, but I want to keep improving because something meaningful deserves genuine effort.</p>
      <p>If I could describe what I want, it would be something simple but beautiful. A connection where we can laugh without holding back, talk without feeling judged, share our thoughts without hesitation, and trust each other enough to be vulnerable. Something where we can be silly one minute and have the deepest conversations the next. Something that feels safe, honest, peaceful, and exciting all at once.</p>
      <p>I don't know what every day in the future will look like, and I don't want to pretend that I have everything figured out. But I do know that there are so many memories I'd love to create, so many conversations I'd love to have, and so many little moments I'd love to experience.</p>
      <p>I hope that one day, when you look back at this message, you remember that someone genuinely wanted to make you feel special. Someone noticed the little things, appreciated your presence, and wanted to put their feelings into words rather than leave them unsaid.</p>
      <p>And if there's one thing I really want you to take away from all of this, it's that you are not just another person in my life. You've become someone I genuinely care about, someone whose happiness matters to me, and someone I feel incredibly lucky to know.</p>
      <p>I made this little website because I didn't want this to be just another ordinary message. I wanted to put some thought into it, make something meaningful, and give you a little moment that you could revisit whenever you wanted. Every word here comes from a genuine place, and I hope you can feel that while reading it.</p>
      <p>So, before you move on to the next page, take a moment. I hope this makes you smile, because seeing you happy is one of the nicest feelings.</p>
      <p>And whatever happens next, I hope you never forget how special you are and how much you deserve to be appreciated.</p>
      <p>Some people make life more beautiful simply by being a part of it. For me, you're one of those people.</p>
      <p><b>With all the affection in my heart, ❤️</b></p>
    `;
  
  } else if (type === 'proposal') {
    contentDiv.innerHTML = `
      <h3>The Big Question 💍</h3>
      <p style="text-align: center;">You mean everything to me. So I have to ask...<br><br><b>Will you do me the absolute honor of being my girlfriend?</b></p>
      <div class="btn-group">
        <button class="yes-btn" onclick="sayYes()">YES ❤️</button>
        <button class="no-btn" onclick="nextScreen(5)">NO ❌</button>
      </div>
    `;
  }
  // Reset scroll position to the top whenever a new card opens
  contentDiv.scrollTop = 0;

  // Move to Screen 3 to display the content
  nextScreen(3);
}

// Function when she clicks YES on The Big Question
function sayYes() {
  const contentDiv = document.getElementById('gift-content');
  contentDiv.innerHTML = `
    <h3>YAYYYYY!! 🥰💖</h3>
    <img src="giphy (1).webp" alt="Celebration Kiss" class="card-gif">
    <p style="text-align: center;"><b>You just made me the happiest person alive!</b><br><br>I can't wait for all the memories, laughs, and adventures ahead of us. ❤️</p>
  `;
}

// Populate background with cute love memes, emojis, and all 5 GIFs
function createBackgroundDecorations() {
  const container = document.getElementById('bg-decorations');
  if (!container) return;

  const items = [
    // Floating Background GIFs (all 5 .webp files)
    { type: 'gif', src: 'giphy.webp', top: '24%', left: '16%', rot: '-7deg', delay: '0.4s' },
    { type: 'gif', src: 'giphy (1).webp', top: '22%', right: '16%', rot: '6deg', delay: '1.0s' },
    { type: 'gif', src: 'giphy (3).webp', bottom: '22%', left: '16%', rot: '-5deg', delay: '1.6s' },
    { type: 'gif', src: 'giphy (4).webp', bottom: '22%', right: '16%', rot: '7deg', delay: '0.8s' },
    { type: 'gif', src: 'giphy (2).webp', top: '5%', left: '47%', rot: '-4deg', delay: '1.3s' },

    // Cute Love Meme Stickers
    { type: 'meme', emoji: '🥺👉👈', text: 'me waiting for u to say yes', top: '10%', left: '7%', rot: '-6deg', delay: '0s' },
    { type: 'meme', emoji: '😻💘', text: 'pov: u stole my whole heart', top: '12%', right: '7%', rot: '5deg', delay: '1.2s' },
    { type: 'meme', emoji: '🐶❤️', text: '100% certified lover boy', bottom: '12%', left: '7%', rot: '6deg', delay: '0.8s' },
    { type: 'meme', emoji: '💌✨', text: 'no refund, u stuck with me now', bottom: '12%', right: '7%', rot: '-5deg', delay: '1.8s' },

    // Floating Love Emojis
    { type: 'emoji', emoji: '💖', top: '6%', left: '28%', rot: '10deg', delay: '0.5s' },
    { type: 'emoji', emoji: '🌹', top: '8%', right: '30%', rot: '-12deg', delay: '1.5s' },
    { type: 'emoji', emoji: '🥰', top: '45%', left: '5%', rot: '-8deg', delay: '2s' },
    { type: 'emoji', emoji: '💘', top: '46%', right: '6%', rot: '12deg', delay: '0.3s' },
    { type: 'emoji', emoji: '🧸', bottom: '34%', left: '9%', rot: '8deg', delay: '1.1s' },
    { type: 'emoji', emoji: '🍫', bottom: '34%', right: '9%', rot: '-10deg', delay: '2.2s' },
    { type: 'emoji', emoji: '💞', bottom: '6%', left: '32%', rot: '5deg', delay: '1.7s' },
    { type: 'emoji', emoji: '✨', bottom: '7%', right: '31%', rot: '-5deg', delay: '0.9s' }
  ];

  items.forEach(item => {
    const el = document.createElement(item.type === 'gif' ? 'img' : 'div');
    el.style.setProperty('--rot', item.rot);
    el.style.animationDelay = item.delay;

    if (item.top) el.style.top = item.top;
    if (item.bottom) el.style.bottom = item.bottom;
    if (item.left) el.style.left = item.left;
    if (item.right) el.style.right = item.right;

    if (item.type === 'gif') {
      el.className = 'bg-gif';
      el.src = item.src;
      el.alt = 'Cute love gif';
    } else if (item.type === 'meme') {
      el.className = 'bg-meme';
      el.innerHTML = `<span>${item.emoji}</span>${item.text}`;
    } else {
      el.className = 'bg-emoji';
      el.textContent = item.emoji;
    }

    container.appendChild(el);
  });
}

// Run when the page loads
createBackgroundDecorations();