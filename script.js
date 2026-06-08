// Player functionality
const playBtn = document.querySelector('.play-btn-large');
const prevBtn = document.querySelectorAll('.player-controls button')[0];
const nextBtn = document.querySelectorAll('.player-controls button')[2];
const volumeSlider = document.querySelector('.volume-slider');
const trackTitle = document.querySelector('.track-title');

// Track data
const tracks = [
    { title: 'Midnight Groove', artist: 'Black Dvine', duration: '3:45' },
    { title: 'Neon Nights', artist: 'Black Dvine', duration: '4:12' },
    { title: 'Cosmic Pulse', artist: 'Black Dvine', duration: '3:58' },
    { title: 'Electric Dreams', artist: 'Black Dvine', duration: '4:05' }
];

let currentTrack = 0;
let isPlaying = false;

// Play/Pause functionality
playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    updatePlayerDisplay();
});

// Previous track
prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    updatePlayerDisplay();
});

// Next track
nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    updatePlayerDisplay();
});

// Update player display
function updatePlayerDisplay() {
    const track = tracks[currentTrack];
    trackTitle.textContent = `${isPlaying ? '▶ ' : '⏸ '}${track.title} - ${track.artist}`;
}

// Volume control
volumeSlider.addEventListener('input', (e) => {
    console.log(`Volume: ${e.target.value}%`);
});

// Track card play buttons
const trackCards = document.querySelectorAll('.track-card');
trackCards.forEach((card, index) => {
    const playButton = card.querySelector('.play-btn');
    playButton.addEventListener('click', () => {
        currentTrack = index;
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        updatePlayerDisplay();
        console.log(`Now playing: ${tracks[index].title}`);
    });
});

// Like button functionality
const likeButtons = document.querySelectorAll('.track-controls button:first-child');
likeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.target.closest('button').classList.toggle('liked');
        const isLiked = btn.classList.contains('liked');
        console.log(`Track ${isLiked ? 'liked' : 'unliked'}`);
    });
});

// Share button functionality
const shareButtons = document.querySelectorAll('.track-controls button:nth-child(2)');
shareButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('Track shared! 🎵');
    });
});

// Download button functionality
const downloadButtons = document.querySelectorAll('.track-controls button:last-child');
downloadButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('Download started! 📥');
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name') || 'Guest';
        const email = formData.get('email');
        const message = formData.get('message');
        
        console.log('Form submitted:', { name, email, message });
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero button - Listen Now
const listenNowBtn = document.querySelector('.hero .btn-primary');
if (listenNowBtn) {
    listenNowBtn.addEventListener('click', () => {
        const tracksSection = document.querySelector('#tracks');
        tracksSection.scrollIntoView({ behavior: 'smooth' });
        currentTrack = 0;
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        updatePlayerDisplay();
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        playBtn.click();
    } else if (e.code === 'ArrowRight') {
        nextBtn.click();
    } else if (e.code === 'ArrowLeft') {
        prevBtn.click();
    }
});

// Initialize player display
updatePlayerDisplay();

// Add hover effects to track cards
trackCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

console.log('🎵 Black Dvine Music Player Initialized');
