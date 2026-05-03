// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    initThreeJSBackground();
    initScrollEffects();
    initTypingEffect();
    initNavigation();
    initThemeToggle();
    initDashboard();
    initSkillsCarousel();
    initAchievements();
    initContactForm();
});

// === THREE.JS ANIMATED BACKGROUND ===
function initThreeJSBackground() {
    const canvas = document.getElementById('bg-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 1200;
    const posArray = new Float32Array(count * 3);
    for(let i = 0; i < count * 3; i++) { posArray[i] = (Math.random() - 0.5) * 15; }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.02, color: 0x00d4ff, transparent: true, opacity: 0.8 });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const lineGeometry = new THREE.BufferGeometry();
    const linePoints = [];
    for(let i = -10; i < 10; i++) { linePoints.push(new THREE.Vector3(-10, -5, i), new THREE.Vector3(10, -5, i)); }
    lineGeometry.setFromPoints(linePoints);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.1 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
        lines.rotation.y += 0.001;
        renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// === SCROLL REVEAL & GSAP ===
function initScrollEffects() {
    const sr = ScrollReveal({ origin: 'bottom', distance: '60px', duration: 1000, delay: 200 });
    sr.reveal('.reveal-up, .reveal-left, .reveal-right', { interval: 100, reset: false });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// === TYPING EFFECT ===
function initTypingEffect() {
    new Typed('.typed-text', {
        strings: ['Frontend Developer', 'Web Developer'],
        typeSpeed: 100, backSpeed: 100, loop: true
    });
}

// === NAVIGATION ===
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
}

// === THEME TOGGLE ===
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    const icon = btn.querySelector('i');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        document.body.style.background = isLight ? '#f8fafc' : '#0b0f19';
        document.body.style.backgroundImage = 'none';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        icon.className = 'fas fa-sun';
        document.body.style.background = '#f8fafc';
    }
}

// === DASHBOARD ===
function initDashboard() {
    const openBtn = document.getElementById('open-dashboard');
    const closeBtn = document.getElementById('closeDashboard');
    const dash = document.getElementById('dashboard');
    
    openBtn.addEventListener('click', () => dash.classList.add('open'));
    closeBtn.addEventListener('click', () => dash.classList.remove('open'));

    // Arrow toggles
    document.querySelectorAll(".arrow-icon").forEach(arrow => {
        const section = arrow.closest(".section");
        arrow.addEventListener("click", (e) => {
            e.stopPropagation();
            section.classList.toggle("open");
        });
    });

    // Theme Switcher
    const lightThemeBtn = document.getElementById('lightThemeBtn');
    const darkThemeBtn = document.getElementById('darkThemeBtn');

    lightThemeBtn.addEventListener('click', () => {
        document.body.classList.add('light-mode');
        lightThemeBtn.classList.add('active');
        darkThemeBtn.classList.remove('active');
        document.body.style.background = '#f8fafc';
        document.body.style.backgroundImage = 'none';
        localStorage.setItem('theme', 'light');
    });

    darkThemeBtn.addEventListener('click', () => {
        document.body.classList.remove('light-mode');  
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
        document.body.style.background = '#0b0f19';
        document.body.style.backgroundImage = 'none';
        localStorage.setItem('theme', 'dark');
    });

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        lightThemeBtn.classList.add('active');
        darkThemeBtn.classList.remove('active');
    } else {
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
    }

    // Typography
    const fontsize = document.getElementById('fontSizeSlider');
    const fontValue = document.getElementById('fontSizeValue');
    const fontfamily = document.getElementById('fontFamilySelector');
    const resetFontBtn = document.getElementById('resetFontBtn');

    fontsize.addEventListener('input', () => {
        const size = fontsize.value + 'px';
        document.documentElement.style.fontSize = size;
        fontValue.textContent = size;
        localStorage.setItem('fontSize', size);
    });

    fontfamily.addEventListener('change', () => {
        document.body.style.fontFamily = fontfamily.value;
        localStorage.setItem('fontfamily', fontfamily.value);
    });

    const savedFontSize = localStorage.getItem('fontSize');
    const savedFontFamily = localStorage.getItem('fontfamily');
    if (savedFontSize) {
        document.documentElement.style.fontSize = savedFontSize;
        fontValue.textContent = savedFontSize;
        fontsize.value = parseInt(savedFontSize);
    }
    if (savedFontFamily) {
        document.body.style.fontFamily = savedFontFamily;
        fontfamily.value = savedFontFamily;
    }

    resetFontBtn.addEventListener('click', () => {
        document.documentElement.style.fontSize = '16px';
        document.body.style.fontFamily = "'Poppins', sans-serif";
        fontsize.value = 16;
        fontValue.textContent = '16px';
        fontfamily.value = "'Poppins', sans-serif";
        localStorage.removeItem('fontSize');
        localStorage.removeItem('fontfamily');
    });

    // Color Palette
    const colorPaletteData = [
        { colors: ['#FF6B6B', '#FFE66D'], icon: null },
        { colors: ['#4ECDC4', '#1A535C'], icon: null },
        { colors: ['#FF9F1C', '#2EC4B6'], icon: null },
        { colors: ['#E71D36', '#FF9F1C'], icon: null },
        { colors: ['#6A0572', '#AB83A1'], icon: null },
        { colors: ['#2E86AB', '#A23B72'], icon: null },
        { colors: ['#F18F01', '#C73E1D'], icon: null },
        { colors: ['#5E60CE', '#5390D9'], icon: null },
        { colors: ['#4CC9F0', '#4361EE'], icon: null },
        { colors: ['#8B4513', '#D2B48C'], icon: 'check' },
        { colors: ['#F72585', '#7209B7'], icon: null },
        { colors: ['#3A0CA3', '#4361EE'], icon: null },
        { colors: ['#F94144', '#F3722C'], icon: null },
        { colors: ['#F8961E', '#F9844A'], icon: null },
        { colors: ['#90BE6D', '#43AA8B'], icon: null },
        { colors: ['#FFA500', '#FFA500'], icon: 'pen' }
    ];

    const colorPaletteGrid = document.getElementById('colorPaletteGrid');
    if (colorPaletteGrid) {
        colorPaletteData.forEach((item) => {
            const circle = document.createElement('div');
            circle.classList.add('color-circle');
            const top = document.createElement('div');
            top.classList.add('color-split', 'top');
            top.style.backgroundColor = item.colors[0];
            const bottom = document.createElement('div');
            bottom.classList.add('color-split', 'bottom');
            bottom.style.backgroundColor = item.colors[1] || item.colors[0];
            circle.appendChild(top);
            circle.appendChild(bottom);
            if (item.icon) {
                const icon = document.createElement('i');
                icon.className = `color-icon fas fa-${item.icon}`;
                circle.appendChild(icon);
            }
            circle.addEventListener('click', () => {
                document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
                circle.classList.add('active');
                document.body.style.background = `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1] || item.colors[0]})`;
                document.documentElement.style.setProperty('--accent', item.colors[0]);
                localStorage.setItem('selectedPalette', JSON.stringify(item));
            });
            colorPaletteGrid.appendChild(circle);
        });
    }

    // Festive Theme
    const festiveOptionsEl = document.getElementById('festiveOptions');
    if (festiveOptionsEl) {
        const options = Array.from(festiveOptionsEl.querySelectorAll('.festive-option'));
        const extractUrl = (bg) => {
            if (!bg || bg === 'none') return null;
            const m = String(bg).match(/url\(["']?(.*?)["']?\)/);
            return m ? m[1] : null;
        };
        const getOptionImage = (opt) => {
            const img = opt.querySelector('.festive-image');
            let bg = img && (img.style.backgroundImage || getComputedStyle(img).backgroundImage);
            return extractUrl(bg);
        };
        const applyFestive = (url, optEl) => {
            if (!url) return;
            const preload = new Image();
            preload.onload = () => {
                document.body.style.backgroundImage = `url("${url}")`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                options.forEach(o => o.classList.remove('active'));
                if (optEl) optEl.classList.add('active');
                localStorage.setItem('festiveTheme', url);
            };
            preload.onerror = () => {
                document.body.style.backgroundImage = 'none';
            };
            preload.src = url;
        };
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const url = getOptionImage(opt);
                applyFestive(url, opt);
            });
        });
        const savedFestive = localStorage.getItem('festiveTheme');
        if (savedFestive) {
            const match = options.find(o => getOptionImage(o) === savedFestive);
            if (match) applyFestive(savedFestive, match);
        }
    }

    // Theme Presets
    const presetCards = document.querySelectorAll('.preset-card');
    const themePresets = {
        professional: { theme: 'dark', backgroundColor: '#1a2a3a', textColor: '#ecf0f1', accentColor: '#3498db' },
        creative: { theme: 'dark', backgroundColor: '#2a1a2a', textColor: '#ffffff', accentColor: '#e74c3c' },
        minimal: { theme: 'light', backgroundColor: '#f0f0f0', textColor: '#333333', accentColor: '#3498db' },
        tech: { theme: 'dark', backgroundColor: '#000428', textColor: '#ffffff', accentColor: '#00d2d3' },
    };
    
    presetCards.forEach(card => {
        card.addEventListener('click', () => {
            const preset = card.dataset.preset;
            const settings = themePresets[preset];
            if (!settings) return;

            if (settings.theme === 'light') {
                document.body.classList.add('light-mode');
                lightThemeBtn.classList.add('active');
                darkThemeBtn.classList.remove('active');
            } else {
                document.body.classList.remove('light-mode');
                darkThemeBtn.classList.add('active');
                lightThemeBtn.classList.remove('active');
            }

            document.body.style.background = settings.backgroundColor;
            document.body.style.backgroundImage = 'none';
            document.documentElement.style.setProperty('--text-primary', settings.textColor);
            document.documentElement.style.setProperty('--accent', settings.accentColor);
            localStorage.setItem('theme', settings.theme);
            presetCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Developer Mode
    const cssVarsToggle = document.getElementById('cssVarsToggle');
    const perfMetricsToggle = document.getElementById('perfMetricsToggle');
    const consoleLogsToggle = document.getElementById('consoleLogsToggle');
    
    if (cssVarsToggle) cssVarsToggle.addEventListener('change', () => {
        if (cssVarsToggle.checked) console.log('CSS Variables:', getComputedStyle(document.documentElement));
    });
    if (perfMetricsToggle) perfMetricsToggle.addEventListener('change', () => {
        if (perfMetricsToggle.checked) console.log('Performance:', performance.getEntriesByType('navigation'));
    });
    if (consoleLogsToggle) consoleLogsToggle.addEventListener('change', () => {
        if (consoleLogsToggle.checked) console.log('Console logs enabled');
    });

    // Settings Panel
    const fixedNavbarToggle = document.getElementById('fixedNavbarToggle');
    const animationToggle = document.getElementById('animationToggle');
    const particleToggle = document.getElementById('particleToggle');
    const smoothScrollToggle = document.getElementById('smoothScrollToggle');
    const resetSettingsBtn = document.getElementById('resetSettingsBtn');
    const resetProfessionalBtn = document.getElementById('resetProfessionalBtn');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const canvas = document.getElementById('bg-canvas');
    
    if (fixedNavbarToggle) fixedNavbarToggle.addEventListener('change', () => {
        document.getElementById('navbar').style.position = fixedNavbarToggle.checked ? 'fixed' : 'relative';
        localStorage.setItem('fixedNavbar', fixedNavbarToggle.checked);
    });
    
    if (animationToggle) animationToggle.addEventListener('change', () => {
        if (animationToggle.checked) document.body.classList.remove('no-animation');
        else document.body.classList.add('no-animation');
        localStorage.setItem('animationEnabled', animationToggle.checked);
    });
    
    if (particleToggle) particleToggle.addEventListener('change', () => {
        canvas.classList.toggle('hidden', !particleToggle.checked);
        localStorage.setItem('particleEnabled', particleToggle.checked);
    });
    
    if (smoothScrollToggle) smoothScrollToggle.addEventListener('change', () => {
        document.documentElement.style.scrollBehavior = smoothScrollToggle.checked ? 'smooth' : 'auto';
        localStorage.setItem('smoothScrolling', smoothScrollToggle.checked);
    });

    // Profile Image
    const changeProfileToggle = document.getElementById('changeProfileToggle');
    const profileImageUpload = document.getElementById('profileImageUpload');
    const profileImageInput = document.getElementById('profileImageInput');
    const defaultImages = [];
    document.querySelectorAll('.profile-image, .hero-image').forEach((img, i) => defaultImages[i] = img.src);
    
    if (changeProfileToggle) changeProfileToggle.addEventListener('change', () => {
        profileImageUpload.style.display = changeProfileToggle.checked ? 'block' : 'none';
        if (!changeProfileToggle.checked) {
            document.querySelectorAll('.profile-image, .hero-image').forEach((img, i) => img.src = defaultImages[i]);
        }
    });
    if (profileImageInput) profileImageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => document.querySelectorAll('.profile-image, .hero-image').forEach(img => img.src = ev.target.result);
            reader.readAsDataURL(file);
        }
    });

    // Text Editing
    const textEditToggle = document.getElementById('textEditToggle');
    const textEditPanel = document.getElementById('textEditPanel');
    const saveTextBtn = document.getElementById('saveTextBtn');
    const homeNameEl = document.querySelector('.hero-name');
    const aboutDescEl = document.querySelector('.about-description');
    const defaultText = { name: homeNameEl?.textContent || '', about: aboutDescEl?.textContent || '' };

    if (textEditToggle) textEditToggle.addEventListener('change', () => {
        textEditPanel.style.display = textEditToggle.checked ? 'block' : 'none';
        if (textEditToggle.checked) {
            document.getElementById('editHomeName').value = homeNameEl?.textContent || '';
            document.getElementById('editAboutText').value = aboutDescEl?.textContent || '';
        } else {
            if (homeNameEl) homeNameEl.textContent = defaultText.name;
            if (aboutDescEl) aboutDescEl.textContent = defaultText.about;
            localStorage.removeItem('customText');
        }
    });
    if (saveTextBtn) saveTextBtn.addEventListener('click', () => {
        if (homeNameEl) homeNameEl.textContent = document.getElementById('editHomeName').value;
        if (aboutDescEl) aboutDescEl.textContent = document.getElementById('editAboutText').value;
        localStorage.setItem('customText', JSON.stringify({
            name: document.getElementById('editHomeName').value,
            about: document.getElementById('editAboutText').value
        }));
    });

    const savedText = localStorage.getItem('customText');
    if (savedText) {
        const t = JSON.parse(savedText);
        if (t.name && homeNameEl) homeNameEl.textContent = t.name;
        if (t.about && aboutDescEl) aboutDescEl.textContent = t.about;
    }

    // Reset All
    if (resetSettingsBtn) resetSettingsBtn.addEventListener('click', () => {
        localStorage.clear();
        document.body.classList.remove('light-mode');
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
        document.documentElement.style.fontSize = '16px';
        document.body.style.fontFamily = "'Poppins', sans-serif";
        fontsize.value = 16; fontValue.textContent = '16px'; fontfamily.value = "'Poppins', sans-serif";
        document.body.style.background = '#0b0f19';
        document.body.style.backgroundImage = 'none';
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--accent', '#00d4ff');
        if (fixedNavbarToggle) fixedNavbarToggle.checked = true;
        document.getElementById('navbar').style.position = 'fixed';
        if (animationToggle) animationToggle.checked = true;
        document.body.classList.remove('no-animation');
        if (particleToggle) particleToggle.checked = true;
        canvas.classList.remove('hidden');
        if (smoothScrollToggle) smoothScrollToggle.checked = true;
        document.documentElement.style.scrollBehavior = 'smooth';
        document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.festive-option').forEach(o => o.classList.remove('active'));
        presetCards.forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.profile-image, .hero-image').forEach((img, i) => img.src = defaultImages[i]);
        alert('All settings reset to default!');
    });

    // Reset to Professional
    if (resetProfessionalBtn) resetProfessionalBtn.addEventListener('click', () => {
        const s = themePresets.professional;
        document.body.classList.remove('light-mode');
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
        document.body.style.background = s.backgroundColor;
        document.body.style.backgroundImage = 'none';
        document.documentElement.style.setProperty('--text-primary', s.textColor);
        document.documentElement.style.setProperty('--accent', s.accentColor);
        document.querySelectorAll('.festive-option').forEach(o => o.classList.remove('active'));
        document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
        presetCards.forEach(c => c.classList.remove('active'));
        document.querySelector('[data-preset="professional"]').classList.add('active');
        localStorage.setItem('theme', 'dark');
        localStorage.removeItem('festiveTheme');
        localStorage.removeItem('selectedPalette');
        alert('Reset to Professional default!');
    });

    // Save Profile
    if (saveProfileBtn) saveProfileBtn.addEventListener('click', () => {
        const profileSettings = {
            theme: localStorage.getItem('theme') || 'dark',
            fontSize: localStorage.getItem('fontSize') || '16px',
            fontFamily: localStorage.getItem('fontfamily') || "'Poppins', sans-serif",
        };
        const profileId = 'portfolio_' + Date.now();
        localStorage.setItem(profileId, JSON.stringify(profileSettings));
        const shareUrl = `${window.location.origin}${window.location.pathname}?profile=${profileId}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Profile saved! URL copied: ' + shareUrl);
        }).catch(() => {
            prompt('Copy this URL:', shareUrl);
        });
    });

    // Load saved settings on start
    if (localStorage.getItem('fixedNavbar') === 'false' && fixedNavbarToggle) {
        fixedNavbarToggle.checked = false;
        document.getElementById('navbar').style.position = 'relative';
    }
    if (localStorage.getItem('animationEnabled') === 'false' && animationToggle) {
        animationToggle.checked = false;
        document.body.classList.add('no-animation');
    }
    if (localStorage.getItem('particleEnabled') === 'false' && particleToggle) {
        particleToggle.checked = false;
        canvas.classList.add('hidden');
    }
    if (localStorage.getItem('smoothScrolling') === 'false' && smoothScrollToggle) {
        smoothScrollToggle.checked = false;
        document.documentElement.style.scrollBehavior = 'auto';
    }
}

// === 3D SKILLS CAROUSEL ===
function initSkillsCarousel() {
    const canvas = document.getElementById('skills-canvas');
    if(!canvas) return;
    
    const skills = [
        { title: "HTML", color: "#E44D26", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { title: "CSS", color: "#2965F1", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
        { title: "JavaScript", color: "#F7DF1E", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
        { title: "React", color: "#61DAFB", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { title: "Node.js", color: "#68A063", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { title: "MongoDB", color: "#4DB33D", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
        { title: "Tailwind CSS", color: "#06B6D4", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { title: "Git & GitHub", color: "#F05032", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { title: "VS Code", color: "#007ACC", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { title: "3D Transform", color: "#A78BFA", custom: true, icon: "3D" },
        { title: "CSS Animation", color: "#F472B6", custom: true, icon: "CSS" }
    ];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const light1 = new THREE.PointLight(0x00d4ff, 1.5, 20);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    const light2 = new THREE.PointLight(0x8b5cf6, 1, 20);
    light2.position.set(-5, -3, 5);
    scene.add(light2);

    const carousel = new THREE.Group();
    scene.add(carousel);
    const cardGroups = [];
    const radius = 4;
    const loader = new THREE.TextureLoader();
    const cardWidth = 2.6;
    const cardHeight = 3;

    // Helper: create canvas texture for skills without standard logos
    function createCustomTexture(text, color) {
        const c = document.createElement('canvas');
        c.width = 256; c.height = 256;
        const ctx = c.getContext('2d');
        // Background
        const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 128);
        grad.addColorStop(0, color);
        grad.addColorStop(1, '#0b0f19');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(10, 10, 236, 236, 24);
        ctx.fill();
        // Border
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(10, 10, 236, 236, 24);
        ctx.stroke();
        // Decorative cube icon for 3D Transform
        if (text === '3D') {
            ctx.save();
            ctx.translate(128, 100);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2.5;
            // Front face
            ctx.beginPath();
            ctx.moveTo(-30, -20); ctx.lineTo(30, -20); ctx.lineTo(30, 30); ctx.lineTo(-30, 30); ctx.closePath();
            ctx.stroke();
            // Top face
            ctx.beginPath();
            ctx.moveTo(-30, -20); ctx.lineTo(-10, -45); ctx.lineTo(50, -45); ctx.lineTo(30, -20); ctx.closePath();
            ctx.stroke();
            // Right face
            ctx.beginPath();
            ctx.moveTo(30, -20); ctx.lineTo(50, -45); ctx.lineTo(50, 5); ctx.lineTo(30, 30); ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
        // Animation waves for CSS Animation
        if (text === 'CSS') {
            ctx.save();
            ctx.translate(128, 100);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2.5;
            for (let w = 0; w < 3; w++) {
                ctx.beginPath();
                ctx.globalAlpha = 1 - w * 0.25;
                for (let x = -40; x <= 40; x++) {
                    const y = Math.sin((x + w * 15) * 0.08) * (12 + w * 6);
                    if (x === -40) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
            ctx.restore();
        }
        // Text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(text === '3D' ? '3D Transform' : 'CSS Animation', 128, 210);
        return new THREE.CanvasTexture(c);
    }

    skills.forEach((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const group = new THREE.Group();

        // Background panel
        const bgGeo = new THREE.PlaneGeometry(cardWidth, cardHeight);
        const bgMat = new THREE.MeshStandardMaterial({ color: 0x15192a, roughness: 0.4, metalness: 0.1, transparent: true, opacity: 0.95 });
        const bgMesh = new THREE.Mesh(bgGeo, bgMat);
        bgMesh.position.z = -0.02;
        group.add(bgMesh);

        // Accent border
        const borderGeo = new THREE.EdgesGeometry(new THREE.PlaneGeometry(cardWidth + 0.08, cardHeight + 0.08));
        const borderMat = new THREE.LineBasicMaterial({ color: new THREE.Color(skill.color), transparent: true, opacity: 0.7 });
        const borderLine = new THREE.LineSegments(borderGeo, borderMat);
        borderLine.position.z = -0.01;
        group.add(borderLine);

        // Bottom accent bar
        const barGeo = new THREE.PlaneGeometry(cardWidth, 0.06);
        const barMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(skill.color) });
        const barMesh = new THREE.Mesh(barGeo, barMat);
        barMesh.position.set(0, -cardHeight / 2 + 0.03, 0.01);
        group.add(barMesh);

        // Logo image
        function addLogoImage(texture) {
            const aspect = texture.image ? (texture.image.width / texture.image.height) : 1;
            const drawW = cardWidth * 0.7;
            const drawH = drawW / aspect;
            const maxH = cardHeight * 0.55;
            const finalH = Math.min(drawH, maxH);
            const finalW = finalH * aspect;
            const imgGeo = new THREE.PlaneGeometry(finalW, finalH);
            const imgMat = new THREE.MeshStandardMaterial({ map: texture, transparent: true, roughness: 0.5, metalness: 0.0 });
            const imgMesh = new THREE.Mesh(imgGeo, imgMat);
            imgMesh.position.y = 0.2;
            group.add(imgMesh);
        }

        if (skill.custom) {
            const tex = createCustomTexture(skill.icon, skill.color);
            addLogoImage(tex);
        } else {
            loader.load(skill.img, (tex) => {
                if (tex.encoding) tex.encoding = THREE.sRGBEncoding;
                addLogoImage(tex);
            });
        }

        group.position.x = Math.sin(angle) * radius;
        group.position.z = Math.cos(angle) * radius;
        group.lookAt(0, 0, 0);
        carousel.add(group);
        cardGroups.push(group);
    });

    let currentIndex = 0;
    const titleEl = document.getElementById('skill-title');
    const dotsContainer = document.getElementById('skills-dots');

    skills.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(i === 0) dot.classList.add('active');
        dot.onclick = () => goTo(i);
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');

    function updateUI(i) {
        gsap.to('.skills-ui', { autoAlpha: 0, y: 20, duration: 0.15, onComplete: () => {
            titleEl.innerText = skills[i].title;
            titleEl.style.color = skills[i].color;
            gsap.to('.skills-ui', { autoAlpha: 1, y: 0, duration: 0.25 });
        }});
        dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    }

    function goTo(i) {
        if(i === currentIndex) return;
        currentIndex = i;
        const targetAngle = -(i / skills.length) * Math.PI * 2;
        gsap.to(carousel.rotation, { y: targetAngle, duration: 1, ease: "power2.inOut" });
        updateUI(i);
    }

    document.getElementById('skill-prev').onclick = () => goTo(currentIndex === 0 ? skills.length - 1 : currentIndex - 1);
    document.getElementById('skill-next').onclick = () => goTo(currentIndex === skills.length - 1 ? 0 : currentIndex + 1);
    updateUI(0);

    const animate = () => {
        requestAnimationFrame(animate);
        const t = Date.now() * 0.001;
        cardGroups.forEach((g, i) => { g.position.y = Math.sin(t + i * 1.2) * 0.1; });
        carousel.rotation.y += 0.0006;
        renderer.render(scene, camera);
    };
    animate();

    let autoRotateTimer;
    function pauseAutoRotate() {
        carousel.rotation.y -= 0.0006;
        clearTimeout(autoRotateTimer);
    }
    document.getElementById('skill-prev').addEventListener('click', pauseAutoRotate);
    document.getElementById('skill-next').addEventListener('click', pauseAutoRotate);
    dots.forEach(d => d.addEventListener('click', pauseAutoRotate));

    window.addEventListener('resize', () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
}
// === 3D ACHIEVEMENTS BOX ===
function initAchievements() {
    const box = document.getElementById('ach-box');
    const btn = document.getElementById('open-box-btn');
    const cardsContainer = document.getElementById('ach-cards-container');
    let isOpen = false;

    btn.addEventListener('click', () => {
        if (!isOpen) {
            box.classList.add('open');
            btn.style.display = 'none';
            setTimeout(() => {
                cardsContainer.style.display = 'grid';
                gsap.from('.ach-card', { y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)" });
            }, 800);
            isOpen = true;
        }
    });
}

// === CONTACT FORM ===
function initContactForm() {
    // ✅ all lowercase: e-m-a-i-l-j-s
    emailjs.init("6YmMdjsZYwG4TCJ9Q");

    const SERVICE_ID = "service_iz1mboo";
    const TEMPLATE_ID = "template_qiwmhki";

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        btn.style.pointerEvents = 'none';

        // ✅ all lowercase here too
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target)
            .then(() => {
                btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                btn.style.background = '#10b981';
                setTimeout(() => { btn.innerHTML = originalText; btn.style.background = ''; e.target.reset(); }, 3000);
            })
            .catch(() => {
                btn.innerHTML = 'Failed! <i class="fas fa-times"></i>';
                btn.style.background = '#ef4444';
                setTimeout(() => { btn.innerHTML = originalText; btn.style.background = ''; }, 3000);
            })
            .finally(() => {
                btn.style.pointerEvents = '';
            });
    });
}