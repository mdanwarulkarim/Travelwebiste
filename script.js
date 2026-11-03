/* ==========================================================================
   Travel-to-Invigorate — Interactive Controller (script.js)
   Author: Md. Anwarul Karim
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark / Light Theme Persistence
  const themeToggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('tti_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('tti_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  }

  // 2. Responsive Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  // 3. Universal Category Filtering & Live Search
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const filterableCards = document.querySelectorAll('[data-category]');

  function filterItems() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const selectedCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    filterableCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const text = card.textContent.toLowerCase();
      const matchesCat = selectedCategory === 'all' || category === selectedCategory;
      const matchesSearch = !query || text.includes(query);

      card.style.display = (matchesCat && matchesSearch) ? 'flex' : 'none';
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterItems();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterItems);
  }

  // 4. Interactive Packing Checklist (PackingTips.html)
  const checkItems = document.querySelectorAll('.check-item');
  const progressBar = document.getElementById('packingProgress');
  const progressText = document.getElementById('packingProgressText');

  if (checkItems.length > 0) {
    const savedChecks = JSON.parse(localStorage.getItem('tti_packing_checks') || '[]');
    checkItems.forEach((item, index) => {
      if (savedChecks.includes(index)) {
        item.classList.add('checked');
        const box = item.querySelector('input[type="checkbox"]');
        if (box) box.checked = true;
      }

      item.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
          const box = item.querySelector('input[type="checkbox"]');
          if (box) box.checked = !box.checked;
        }
        item.classList.toggle('checked');
        savePackingProgress();
      });
    });
    updatePackingUI();
  }

  function savePackingProgress() {
    const checkedIndices = [];
    checkItems.forEach((item, idx) => {
      if (item.classList.contains('checked')) checkedIndices.push(idx);
    });
    localStorage.setItem('tti_packing_checks', JSON.stringify(checkedIndices));
    updatePackingUI();
  }

  function updatePackingUI() {
    if (!progressBar || !progressText) return;
    const total = checkItems.length;
    const completed = document.querySelectorAll('.check-item.checked').length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    progressBar.style.width = pct + '%';
    progressText.textContent = `${completed} of ${total} essentials packed (${pct}%)`;
  }

  // 5. Bangla Language Lessons & Web Speech Pronunciation (language_tips.html)
  const lessonData = {
    1: [
      { bangla: "হ্যালো", phonetic: "Hyālō", english: "Hello" },
      { bangla: "তুমি কেমন আছো?", phonetic: "Tumi kēmon āchō?", english: "How are you?" },
      { bangla: "আমি ভালো আছি, ধন্যবাদ।", phonetic: "Āmi bhālō āchi, dhon'yobād.", english: "I'm fine, thank you." },
      { bangla: "আমার নাম করিম।", phonetic: "Āmār nām Korim.", english: "My name is Karim." },
      { bangla: "বিদায়", phonetic: "Bidāy", english: "Goodbye" },
      { bangla: "তোমার সাথে দেখা হয়ে খুব ভালো লাগলো।", phonetic: "Tōmār sāthē dēkhā hoyē khub bhālō lāglō.", english: "Nice to meet you." },
      { bangla: "তুমি কি ইংরেজিতে কথা বলতে পারো?", phonetic: "Tumi ki Iṅrējitē kothā boltē pārō?", english: "Do you speak English?" }
    ],
    2: [
      { bangla: "ভাত এবং মাছ", phonetic: "Bhāt ēboṅ māch", english: "Rice and Fish (Staple Food)" },
      { bangla: "খাবারটি খুব সুস্বাদু!", phonetic: "Khābārṭi khub susbādu!", english: "The food is very delicious!" },
      { bangla: "আমাকে এক গ্লাস পানি দিন।", phonetic: "Āmākē ēk glās pāni din.", english: "Please give me a glass of water." },
      { bangla: "কাচ্চি বিরিয়ানি", phonetic: "Kācchi Biriyāni", english: "Traditional Mutton Kacchi Biryani" },
      { bangla: "রসগোল্লা এবং মিষ্টি দই", phonetic: "Roshogollā ēboṅ Miṣṭi Doi", english: "Syrup Dumplings & Sweet Yogurt" },
      { bangla: "ঝাল কম দেবেন, প্লিজ।", phonetic: "Jhāl kom dēbēn, plij.", english: "Less spicy, please." }
    ],
    3: [
      { bangla: "এক (১) - দুই (২) - তিন (৩)", phonetic: "Ēk (1) - Dui (2) - Tin (3)", english: "One - Two - Three" },
      { bangla: "চার (৪) - পাঁচ (৫) - ছয় (৬)", phonetic: "Chār (4) - Pā̃ch (5) - Choy (6)", english: "Four - Five - Six" },
      { bangla: "সাত (৭) - আট (৮) - নয় (৯) - দশ (১০)", phonetic: "Sāt (7) - Āṭ (8) - Noy (9) - Dosh (10)", english: "Seven - Eight - Nine - Ten" },
      { bangla: "এটার দাম কত টাকা?", phonetic: "Ēṭār dām koto ṭākā?", english: "How much Taka does this cost?" }
    ],
    4: [
      { bangla: "স্টেশনটা কোথায়?", phonetic: "Sṭēshonṭā kōthāy?", english: "Where is the station?" },
      { bangla: "আমি ঢাকায় যেতে চাই।", phonetic: "Āmi Ḍhākāy jētē chāi.", english: "I want to go to Dhaka." },
      { bangla: "বামে / ডানে যান", phonetic: "Bāmē / Ḍānē jān", english: "Turn Left / Turn Right" },
      { bangla: "এখানে থামুন।", phonetic: "Ēkhānē thāmun.", english: "Stop here, please." }
    ]
  };

  const lessonItems = document.querySelectorAll('.lesson-item[data-lesson]');
  const phraseContainer = document.getElementById('phraseContainer');
  const activeLessonTitle = document.getElementById('activeLessonTitle');

  function renderPhrases(lessonId) {
    if (!phraseContainer) return;
    const phrases = lessonData[lessonId] || lessonData[1];
    phraseContainer.innerHTML = phrases.map(item => `
      <div class="phrase-card">
        <button class="speak-btn" onclick="speakBangla('${item.phonetic.replace(/'/g, "\'")}', '${item.english.replace(/'/g, "\'")}')" title="Listen pronunciation">
          <i class="fa-solid fa-volume-high"></i>
        </button>
        <div class="bangla-script">${item.bangla}</div>
        <div class="phonetic">${item.phonetic}</div>
        <div class="english-meaning">${item.english}</div>
      </div>
    `).join('');
  }

  lessonItems.forEach(item => {
    item.addEventListener('click', () => {
      lessonItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const lessonId = item.getAttribute('data-lesson');
      if (activeLessonTitle) {
        activeLessonTitle.textContent = item.querySelector('span').textContent;
      }
      renderPhrases(lessonId);
    });
  });

  if (phraseContainer) {
    renderPhrases(1);
  }

  // 6. Contact Form Submission Feedback
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formFeedback) {
        formFeedback.style.display = 'block';
        formFeedback.textContent = 'Thank you! Your message has been sent to Md. Anwarul Karim. We will get back to you shortly.';
      }
      contactForm.reset();
    });
  }
});

// Global Speech Helper
window.speakBangla = function(phoneticText, englishText) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phoneticText + ". Meaning: " + englishText);
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  } else {
    alert(`Pronunciation: ${phoneticText} (${englishText})`);
  }
};
