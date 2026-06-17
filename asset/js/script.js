

// মোবাইল মেনু টগল ফাংশন
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// স্লাইডার কন্ট্রোল লজিক
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.gita-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // ইন্ডেক্স লিমিট হ্যান্ডেল করা
    if (index >= slides.length) { currentSlideIndex = 0; }
    if (index < 0) { currentSlideIndex = slides.length - 1; }
    
    // সব স্লাইড এবং ডটস ডি-অ্যাক্টিভেট করা
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // নির্দিষ্ট স্লাইড এবং ডট অ্যাক্টিভেট করা
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// প্রতি ৫ সেকেন্ড পর পর অটোমেটিক স্লাইড পরিবর্তন (সিনেমাটিক মুভমেন্ট)
setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}, 5000);

/* ========================================================
   ২. জাভাস্ক্রিপ্ট মোড ফিক্স (আপনার স্ক্রিপ্ট ফাইলের নিচে এটি বসান)
   ======================================================== */

// ব্রাউজারে আগে কোনো মোড সেভ করা আছে কিনা তা চেক করা (না থাকলে ডিফল্ট 'light')
const savedTheme = localStorage.getItem('theme') || 'light';

// পেজ লোড হওয়ার সাথে সাথে থিম সেট করা
document.documentElement.setAttribute('data-theme', savedTheme);
updateToggleButton(savedTheme);

function toggleTheme() {
    // বর্তমান থিম কি আছে তা দেখা
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme === 'light') {
        newTheme = 'dark';
    }

    // নতুন থিম অ্যাপ্লাই এবং লোকাল স্টোরেজে সেভ করা
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // বাটনের আইকন আপডেট করা
    updateToggleButton(newTheme);
}

// থিম অনুযায়ী চাঁদের ও সূর্যের আইকন পরিবর্তন করার সাব-ফাংশন
function updateToggleButton(theme) {
    const iconSpan = document.querySelector('.mode-icon');
    if (iconSpan) {
        if (theme === 'dark') {
            iconSpan.textContent = '☀️'; // ডার্ক মোড হলে সূর্য দেখাবে (যাতে ক্লিক করলে লাইট হয়)
        } else {
            iconSpan.textContent = '🌙'; // লাইট মোড হলে চাঁদ দেখাবে
        }
    }
}
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    // যদি ওভারলে না থাকে তবে এটি কাজ করবে
});
