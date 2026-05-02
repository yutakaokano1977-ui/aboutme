// ナビのアクティブハイライト（スクロール連動）
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => observer.observe(s));

// ナビ背景：スクロールで濃くなる
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 10 ? 'rgba(15,23,42,0.97)' : 'rgba(15,23,42,0.85)';
}, { passive: true });

// ヒーローのアバター：画像なければフォールバック表示
const avatarImg = document.querySelector('.hero-avatar img');
if (avatarImg) {
  avatarImg.addEventListener('error', () => {
    avatarImg.style.display = 'none';
    const fb = document.getElementById('avatar-fallback');
    if (fb) fb.style.display = 'flex';
  });
}
