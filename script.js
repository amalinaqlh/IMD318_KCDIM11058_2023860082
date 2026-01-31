const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      let q = this.value.toLowerCase();
      if (q.includes("bio")) location.href = "biodata.html";
      else if (q.includes("experience")) location.href = "experience.html";
      else if (q.includes("education")) location.href = "education.html";
      else if (q.includes("family")) location.href = "family.html";
      else if (q.includes("gallery")) location.href = "gallery.html";
      else if (q.includes("contact")) location.href = "contact.html";
      else alert("Page not found");
    }
  });
}

const bear = document.getElementById("bear");
const leftPupil = document.querySelector("#leftEye .pupil");
const rightPupil = document.querySelector("#rightEye .pupil");

if (bear && leftPupil && rightPupil) {
  document.addEventListener("mousemove", (e) => {
    const rect = bear.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = 5;

    const angle = Math.atan2(dy, dx);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    leftPupil.style.transform = `translate(${x}px, ${y}px)`;
    rightPupil.style.transform = `translate(${x}px, ${y}px)`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBunga");
  const bgBunga = document.getElementById("bg-bunga");
  const clickSound = document.getElementById("clickSound");

  if (toggleBtn && bgBunga && clickSound) {
    toggleBtn.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
      bgBunga.classList.toggle("active");
    });
  }
});

let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let timer;

function showSlides(n) {
  if (!slides || slides.length === 0 || !dots || dots.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  if (!slides || slides.length === 0) return;
  clearTimeout(timer);
  showSlides(slideIndex += n);
  timer = setTimeout(autoShowSlides, 5000);
}

function currentSlide(n) {
  if (!slides || slides.length === 0) return;
  clearTimeout(timer);
  showSlides(slideIndex = n);
  timer = setTimeout(autoShowSlides, 5000);
}

function autoShowSlides() {
  if (!slides || slides.length === 0) return;
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  showSlides(slideIndex);
  timer = setTimeout(autoShowSlides, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");

  if (slides.length > 0 && dots.length > 0) {
    showSlides(slideIndex = 1);
    timer = setTimeout(autoShowSlides, 5000);
  }
});

function showGallery(category) {
  const bigGalleries = document.querySelectorAll(".big-gallery");
  if (!bigGalleries || bigGalleries.length === 0) return;

  bigGalleries.forEach(g => g.style.display = "none");

  const catOnly = document.querySelector(".category-only");
  const chooseTitle = document.querySelector(".choose-title");
  if (catOnly) catOnly.style.display = "none";
  if (chooseTitle) chooseTitle.style.display = "none";

  const selected = document.querySelector(`.big-gallery.${category}`);
  if (selected) selected.style.display = "flex";
}

function backToMain() {
  const bigGalleries = document.querySelectorAll(".big-gallery");
  if (bigGalleries && bigGalleries.length > 0) bigGalleries.forEach(g => g.style.display = "none");

  const catOnly = document.querySelector(".category-only");
  const chooseTitle = document.querySelector(".choose-title");
  if (catOnly) catOnly.style.display = "flex";
  if (chooseTitle) chooseTitle.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fnameEl = document.getElementById("fname");
    const lnameEl = document.getElementById("lname");
    const stateEl = document.getElementById("state");
    const msgEl = document.getElementById("subject");

    const fname = fnameEl ? fnameEl.value : "";
    const lname = lnameEl ? lnameEl.value : "";
    const state = stateEl ? stateEl.value : "";
    const message = msgEl ? msgEl.value : "";

    const emailTo = "youremail@example.com";
    const subject = encodeURIComponent(`Message from ${fname} ${lname}`);
    const body = encodeURIComponent(`Name: ${fname} ${lname}\nState: ${state}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    form.reset();
  });

  document.querySelectorAll(".copyable").forEach(item => {
    item.addEventListener("click", function () {
      const text = this.getAttribute("data-copy");
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => { alert(`Copied: ${text}`); });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("musicBtn");
  const audio = document.getElementById("bgSound");
  if (!btn || !audio) return;

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      btn.innerText = "💗 Stop Music";
    } else {
      audio.pause();
      audio.currentTime = 0;
      btn.innerText = "🎵 Play Music";
    }
  });
});
