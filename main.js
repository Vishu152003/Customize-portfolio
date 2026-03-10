// Mobile menu toggle
const menuIcon = document.querySelector('.bars');
const navLinks = document.querySelector('.navlinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.navlinks a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


const typed = new Typed('.multiple-text',{
    strings:['Frontened developer', 'web developer'],
    typeSpeed:110,
    backSpeed:110,
    backDelay:1000,
    loop:true

});

var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop:true,
      spaceBetween: 20,
      slidesPerView: "auto",
      
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        slideShadows: true,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      autoplay: {
        delay:1000,
        disableOnInteraction:false,

      },
      speed:800,
      
    });


    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00d4ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.45 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 140, "color": "#00d4ff", "opacity": 0.25, "width": 1 },
        "move": { "enable": true, "speed": 2.5, "out_mode": "out" }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 180, "line_linked": { "opacity": 0.6 } },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });

const openBtn = document.getElementById('open');
const dashboard = document.getElementById('dashboard');
const closeDashboard = document.getElementById('closeDashboard');      
document.querySelectorAll(".arrow-icon").forEach(arrow => {
  const section = arrow.closest(".section");
  arrow.addEventListener("click", () => {
    section.classList.toggle("open");
  });
});


        openBtn.addEventListener('click', () => {
            dashboard.classList.add('open');
            dashboard.style.display="block";
        });
        
        closeDashboard.addEventListener('click', () => {
            dashboard.classList.remove('closeDashboard');
            dashboard.style.display="none";
            
        });

       
        // Theme Switcher
        
        
     const lightThemeBtn = document.getElementById('lightThemeBtn');
     const darkThemeBtn = document.getElementById('darkThemeBtn');

    lightThemeBtn.addEventListener('click', () => {
    document.body.classList.add('light');
    lightThemeBtn.classList.add('active');
    darkThemeBtn.classList.remove('active');

    // Update button icon
    const buttonIcons = openBtn.querySelectorAll('i');
    buttonIcons.forEach(icon => {
        icon.className = 'fa-solid fa-moon';
    });
    
    // Set particle container background to white
    document.getElementById('particles-js').style.backgroundColor = '#ffffff';
  
    document.getElementById('particles-js').style.backgroundImage = 'none';
    
    localStorage.setItem('theme', 'light');
});
//dark theme
    darkThemeBtn.addEventListener('click', () => {
    document.body.classList.remove('light');  
    darkThemeBtn.classList.add('active');
    lightThemeBtn.classList.remove('active');
  
    
    // Update button icon
    const buttonIcons = openBtn.querySelectorAll('i');
    buttonIcons.forEach(icon => {
        icon.className = 'fa-solid fa-sun';
    });
    
    // Set particle container background to dark
    document.getElementById('particles-js').style.backgroundColor = '#11121a';
    document.getElementById('particles-js').style.backgroundImage = 'none';
    localStorage.setItem('theme', 'dark');
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    lightThemeBtn.classList.add('active');
    darkThemeBtn.classList.remove('active');
    
    // Update button icon
    const buttonIcons = openBtn.querySelectorAll('i');
    buttonIcons.forEach(icon => {
        icon.className = 'fa-solid fa-moon';
    });
    
    // Set particle container background to white
    document.getElementById('particles-js').style.backgroundColor = '#ffffff';

    document.getElementById('particles-js').style.backgroundImage = 'none';
} else {
    // Default to dark theme
    document.body.classList.remove('light');
    darkThemeBtn.classList.add('active');
    lightThemeBtn.classList.remove('active');
    
    // Update button icon
    const buttonIcons = openBtn.querySelectorAll('i');
    buttonIcons.forEach(icon => {
        icon.className = 'fa-solid fa-sun';
    });
    
    // Set particle container background to dark
    document.getElementById('particles-js').style.backgroundColor = '#11121a';
    document.getElementById('particles-js').style.backgroundImage = 'none';
}


// typography

const fontsize=document.getElementById('fontSizeSlider');
const fontValue=document.getElementById('fontSizeValue');
const fontfamily=document.getElementById('fontFamilySelector');
const resetBtn=document.getElementById('resetFontBtn')

fontsize.addEventListener('input' , ()=>{
  const size=fontsize.value + 'px';
  document.documentElement.style.setProperty('--font-size',size);
  fontValue.textContent = size;
       localStorage.setItem('fontSize', size);

});

fontfamily.addEventListener('change',()=>{
  const font=fontfamily.value;
  document.documentElement.style.setProperty('--font-family',font);
  localStorage.setItem('fontfamily',font);

})

const savedFontsize=localStorage.getItem('fontSize');
const savedFontfamily=localStorage.getItem('fontfamily');
if(savedFontsize){
   document.documentElement.style.setProperty('--font-size',savedFontsize);
  fontValue.textContent=savedFontsize;
  fontsize.value=parseInt(savedFontsize);
}

if(savedFontfamily){
  document.documentElement.style.setProperty('--font-family',savedFontfamily);
  fontfamily.value=savedFontfamily;
  
}

resetBtn.addEventListener('click', () => {
  // Remove CSS variables → fallback values apply automatically
  document.documentElement.style.removeProperty('--font-size');
  document.documentElement.style.removeProperty('--font-family');

  // Reset display values
  fontsize.value = 16; // your slider base value
  fontValue.textContent = '16px';
  fontfamily.value = "'Poppins', sans-serif";

  // Clear localStorage
  localStorage.removeItem('fontSize');
  localStorage.removeItem('fontfamily');
});

// Color Palette Selector
document.addEventListener("DOMContentLoaded", () => {
  const colorPaletteData = [
    { colors: ['#FF6B6B', '#FFE66D','#FFD700'], icon: null },
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
  if (!colorPaletteGrid) return; // guard if element missing

  // Dashboard defaults (prevent dashboard inheriting global vars)
  const DASHBOARD_DEFAULT_ACCENT = '#00d4ff';
  const DASHBOARD_DEFAULT_TEXT = '#ffffff';
  const dashboardEl = document.getElementById('dashboard');

  // small helpers
  const hexToRgb = (hex) => {
    const h = hex.replace('#','');
    const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  };
  const luminance = (r,g,b) => {
    // relative luminance 0..1
    const a = [r,g,b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4);
    });
    return 0.2126*a[0] + 0.7152*a[1] + 0.0722*a[2];
  };

  // ensure dashboard has its own local CSS vars initially
  if (dashboardEl) {
    dashboardEl.style.setProperty('--accent-color', DASHBOARD_DEFAULT_ACCENT);
    dashboardEl.style.setProperty('--text-color', DASHBOARD_DEFAULT_TEXT);
    dashboardEl.style.color = DASHBOARD_DEFAULT_TEXT;
  }

  colorPaletteData.forEach((item, index) => {
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
      // active state
      document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
      circle.classList.add('active');

      // apply visual background (gradient) and CSS vars
      const topColor = item.colors[0];
      const bottomColor = item.colors[1] || item.colors[0];
      document.body.style.background = `linear-gradient(135deg, ${topColor}, ${bottomColor})`;

      // ensure particles container doesn't override background
      const particles = document.getElementById('particles-js');
      if (particles) { particles.style.background = 'transparent'; particles.style.backgroundImage = 'none'; }

      // set global accent and text color CSS vars
      document.documentElement.style.setProperty('--accent-color', topColor);
      const rgb = hexToRgb(topColor);
      const lum = luminance(rgb.r, rgb.g, rgb.b);
      const textColor = lum > 0.5 ? '#111' : '#ffffff';
      document.documentElement.style.setProperty('--text-color', textColor);

      // Prevent dashboard from inheriting updated root vars:
      if (dashboardEl) {
        // keep dashboard using its own fixed colors
        dashboardEl.style.setProperty('--accent-color', DASHBOARD_DEFAULT_ACCENT);
        dashboardEl.style.setProperty('--text-color', DASHBOARD_DEFAULT_TEXT);
        dashboardEl.style.color = DASHBOARD_DEFAULT_TEXT;
      }

      // save selection
      localStorage.setItem('selectedPalette', JSON.stringify(item));
    });

    colorPaletteGrid.appendChild(circle);
  });
});


// Festive Theme Selector

document.addEventListener('DOMContentLoaded', () => {
  const festiveOptionsEl = document.getElementById('festiveOptions');
  const particles = document.getElementById('particles-js');
  if (!festiveOptionsEl) return;

  const mapByLabel = {
    holi: 'assets/images/photo.jpg',
    diwali: 'assets/images/diwali.jpg',
    christmas: 'assets/images/two.jpg',
    rakshabandhan: 'assets/images/rakshabandhan.jpg',
    navratri: 'assets/images/nav.jpg'
  };

  const options = Array.from(festiveOptionsEl.querySelectorAll('.festive-option'));

  const extractUrl = (bg) => {
    if (!bg || bg === 'none') return null;
    const m = String(bg).match(/url\(["']?(.*?)["']?\)/);
    return m ? m[1] : null;
  };

  const getOptionImage = (opt) => {
    const img = opt.querySelector('.festive-image');
    let bg = img && (img.style.backgroundImage || getComputedStyle(img).backgroundImage);
    const url = extractUrl(bg);
    if (url) return url;
    const label = (opt.querySelector('span')?.textContent || '').trim().toLowerCase();
    return mapByLabel[label] || null;
  };

  const applyFestive = (url, optEl) => {
    if (!url) return;

    // preload and check natural size for debugging
    const preload = new Image();
    preload.onload = () => {
      console.log('Festive image loaded:', url, '→', preload.naturalWidth + 'x' + preload.naturalHeight);
      // if image is small, warn
      if (preload.naturalWidth < 1200) {
        console.warn('Festive image appears small — use a higher resolution image (>=1200px wide).');
      }

      // apply fully-loaded image
      document.body.style.backgroundImage = `url("${url}")`;
      document.body.style.transition = 'background-image 0.5s ease-in-out';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.imageRendering = 'auto';

      // mark that a festive image is active so other handlers can avoid overwriting it
      document.body.dataset.festive = 'true';

      if (particles) {
        // ensure particles don't visually block background
        particles.style.background = 'transparent';
        particles.style.backgroundImage = 'none';
        // ensure particles canvas sits behind content (z-index controlled in CSS too)
      }

      options.forEach(o => o.classList.remove('active'));
      if (optEl) optEl.classList.add('active');
      localStorage.setItem('festiveTheme', url);
    };
    preload.onerror = () => {
      console.error('Failed to load festive image:', url);
      document.body.style.backgroundImage = 'linear-gradient(135deg,#3a0ca3,#00d4ff)';
      document.body.dataset.festive = 'false';
    };
    preload.src = url;
  };

  options.forEach(opt => {
    opt.tabIndex = 0;
    opt.addEventListener('click', () => {
      const url = getOptionImage(opt);
      applyFestive(url, opt);
    });
    opt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        opt.click();
      }
    });
  });

  // restore saved festive theme (URL)
  const saved = localStorage.getItem('festiveTheme');
  if (saved) {
    const match = options.find(o => getOptionImage(o) === saved);
    if (match) applyFestive(saved, match);
    else applyFestive(saved, null);
  }
});



//Theme presents
const presetCards = document.querySelectorAll('.preset-card');
        
        const themePresets = {
  professional: {
    theme: 'dark',
    fontSize: '20px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: 'linear-gradient(135deg, #2c3e50, #3498db)',
    textColor: '#ecf0f1',
    accentColor: '#3498db',
    borderRadius: '6px',
  },
  creative: {
    theme: 'dark',
    fontSize: '20px',
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: 'linear-gradient(135deg, #8e44ad, #e74c3c)',
    textColor: '#ffffff',
    accentColor: '#e74c3c',
    borderRadius: '12px',
  },
  minimal: {
    theme: 'light',
    fontSize: '20px',
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor: 'linear-gradient(135deg, #ecf0f1, #bdc3c7)',
    textColor: '#ffffff',
    accentColor: '#3498db',
    borderRadius: '4px',
  },
  tech: {
    theme: 'dark',
    fontSize: '20px',
    fontFamily: "'Lato', sans-serif",
    backgroundColor: 'linear-gradient(135deg, #000428, #004e92)',
    textColor: '#ffffff',
    accentColor: '#00d2d3',
    borderRadius: '8px',
  },
};      
// ...existing code...
presetCards.forEach(card => {
    card.addEventListener('click', () => {
        const preset = card.dataset.preset;
        const settings = themePresets[preset];
        if (!settings) return; // safety

        // Apply theme
        if (settings.theme === 'light') {
            document.body.classList.add('light');
            if (lightThemeBtn) lightThemeBtn.checked = true;
            if (darkThemeBtn) darkThemeBtn.checked = false;
            // Update button icon
            const buttonIcons = openBtn.querySelectorAll('i');
            buttonIcons.forEach(icon => icon.className = 'fa-solid fa-moon');
        } else {
            document.body.classList.remove('light');
            if (darkThemeBtn) darkThemeBtn.checked = true;
            if (lightThemeBtn) lightThemeBtn.checked = false;
            const buttonIcons = openBtn.querySelectorAll('i');
            buttonIcons.forEach(icon => icon.className = 'fa-solid fa-sun');
        }

        // Apply typography
        if (fontSizeSlider) fontSizeSlider.value = parseInt(settings.fontSize);
        if (fontValue) fontValue.textContent = settings.fontSize;
        document.documentElement.style.setProperty('--font-size', settings.fontSize);
        if (fontFamilySelector) fontFamilySelector.value = settings.fontFamily;
        document.documentElement.style.setProperty('--font-family', settings.fontFamily);

        // Apply background (use .background to support gradients) and ensure particles container is transparent
        document.body.style.background = settings.backgroundColor;
        const p = document.getElementById('particles-js');
        if (p) { p.style.background = 'transparent'; p.style.backgroundImage = 'none'; }

        // Apply text color
        document.documentElement.style.setProperty('--text-color', settings.textColor);

        // Save settings
        localStorage.setItem('theme', settings.theme);
        localStorage.setItem('fontSize', settings.fontSize);
        localStorage.setItem('fontFamily', settings.fontFamily);
        localStorage.setItem('backgroundColor', settings.backgroundColor);
        localStorage.setItem('themeBg', settings.backgroundColor);
        localStorage.setItem('textColor', settings.textColor);

        // Update active state
        presetCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
// ...existing code...

// Developer Mode
        const cssVarsToggle = document.getElementById('cssVarsToggle');
        const perfMetricsToggle = document.getElementById('perfMetricsToggle');
        const consoleLogsToggle = document.getElementById('consoleLogsToggle');
        
        cssVarsToggle.addEventListener('change', () => {
            if (cssVarsToggle.checked) {
                // Show CSS variables in console
                console.log('CSS Variables:', getComputedStyle(document.documentElement));
            }
        });
        
        perfMetricsToggle.addEventListener('change', () => {
            if (perfMetricsToggle.checked) {
                // Show performance metrics
                console.log('Performance Metrics:', performance.getEntriesByType('navigation'));
            }
        });
        
        consoleLogsToggle.addEventListener('change', () => {
            if (consoleLogsToggle.checked) {
                console.log('Console logs enabled for debugging');
            }
        });



//setting panel

const fixedNavbarToggle = document.getElementById('fixedNavbarToggle');
        const animationToggle = document.getElementById('animationToggle');
        const particleToggle = document.getElementById('particleToggle');
        const smoothScrollToggle = document.getElementById('smoothScrollToggle');
        const resetSettingsBtn = document.getElementById('resetSettingsBtn');
        const resetProfessionalBtn = document.getElementById('resetProfessionalBtn');
        const saveProfileBtn = document.getElementById('saveProfileBtn');
        
        fixedNavbarToggle.addEventListener('change', () => {
            if (fixedNavbarToggle.checked) {
                document.documentElement.style.setProperty('--navbar-fixed', 'fixed');
            } else {
                document.documentElement.style.setProperty('--navbar-fixed', 'relative');
            }
            localStorage.setItem('fixedNavbar', fixedNavbarToggle.checked);
        });
        
        animationToggle.addEventListener('change', () => {
            if (animationToggle.checked) {
                document.body.classList.remove('no-animation');
            } else {
                document.body.classList.add('no-animation');
            }
            localStorage.setItem('animationEnabled', animationToggle.checked);
        });
        
        particleToggle.addEventListener('change', () => {
         
            if (particleToggle.checked) {
                document.documentElement.style.setProperty('--particle-opacity', '1');
            } else {
                document.documentElement.style.setProperty('--particle-opacity', '0');
            }
            localStorage.setItem('particleEnabled', particleToggle.checked);
        });
        
        smoothScrollToggle.addEventListener('change', () => {
            if (smoothScrollToggle.checked) {
                document.documentElement.style.setProperty('--smooth-scrolling', 'smooth');
            } else {
                document.documentElement.style.setProperty('--smooth-scrolling', 'auto');
            }
            localStorage.setItem('smoothScrolling', smoothScrollToggle.checked);
        });
        
        // Load saved settings
        if (localStorage.getItem('fixedNavbar') !== null) {
            const fixed = localStorage.getItem('fixedNavbar') === 'true';
            fixedNavbarToggle.checked = fixed;
            document.documentElement.style.setProperty('--navbar-fixed', fixed ? 'fixed' : 'relative');
        }
        
        if (localStorage.getItem('animationEnabled') !== null) {
            const anim = localStorage.getItem('animationEnabled') === 'true';
            animationToggle.checked = anim;
            if (!anim) {
                document.body.classList.add('no-animation');
            }
        }
        
        if (localStorage.getItem('particleEnabled') !== null) {
            const particles = localStorage.getItem('particleEnabled') === 'true';
            particleToggle.checked = particles;
            document.documentElement.style.setProperty('--particle-opacity', particles ? '1' : '0');
        }
        
        if (localStorage.getItem('smoothScrolling') !== null) {
            const smooth = localStorage.getItem('smoothScrolling') === 'true';
            smoothScrollToggle.checked = smooth;
            document.documentElement.style.setProperty('--smooth-scrolling', smooth ? 'smooth' : 'auto');
        }
        
      //Change the profile image
     const changeProfileToggle = document.getElementById('changeProfileToggle');
const profileImageUpload = document.getElementById('profileImageUpload');
const profileImageInput = document.getElementById('profileImageInput');

// Store default image sources
const defaultImages = [];
document.querySelectorAll('.profile-image').forEach((img, index) => {
    defaultImages[index] = img.src;  // Save original source
});

changeProfileToggle.addEventListener('change', () => {
    if (changeProfileToggle.checked) {
        profileImageUpload.style.display = 'block';
    } else {
        profileImageUpload.style.display = 'none';
        // Revert to default images when toggle is OFF
        document.querySelectorAll('.profile-image').forEach((img, index) => {
            img.src = defaultImages[index];
        });
    }
});

profileImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelectorAll('.profile-image').forEach(img => {
                img.src = e.target.result;
            });
        };
        reader.readAsDataURL(file);
    }
});

//enable text editing
const textEditToggle = document.getElementById('textEditToggle');
const textEditPanel = document.getElementById('textEditPanel');
const saveTextBtn = document.getElementById('saveTextBtn');

// Elements from your site
const homeNameEl = document.querySelector('.home-name');
const homeRoleEl = document.querySelector('.home-role');
const aboutDescEl = document.querySelector('.about-description');

// Save default text
const defaultText = {
  homeName: homeNameEl.textContent,
  homeRole: homeRoleEl.textContent,
  aboutDesc: aboutDescEl.textContent
};

// Toggle ON/OFF behavior
textEditToggle.addEventListener('change', () => {
  if (textEditToggle.checked) {
    textEditPanel.style.display = 'block';
    // Fill current text into input fields
    document.getElementById('editHomeName').value = homeNameEl.textContent;
    document.getElementById('editHomeRole').value = homeRoleEl.textContent;
    document.getElementById('editAboutText').value = aboutDescEl.textContent;
  } else {
    textEditPanel.style.display = 'none';
    // Reset to default
    homeNameEl.textContent = defaultText.homeName;
    homeRoleEl.textContent = defaultText.homeRole;
    aboutDescEl.textContent = defaultText.aboutDesc;
    localStorage.removeItem('customText');
  }
});

// Save new text
saveTextBtn.addEventListener('click', () => {
  const newHomeName = document.getElementById('editHomeName').value;
  const newHomeRole = document.getElementById('editHomeRole').value;
  const newAboutText = document.getElementById('editAboutText').value;

  homeNameEl.textContent = newHomeName;
  homeRoleEl.textContent = newHomeRole;
  aboutDescEl.textContent = newAboutText;

  // Save in localStorage
  localStorage.setItem('customText', JSON.stringify({
    homeName: newHomeName,
    homeRole: newHomeRole,
    aboutDesc: newAboutText
  }));
});

// Restore saved text on page load
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('customText');
  if (saved) {
    const { homeName, homeRole, aboutDesc } = JSON.parse(saved);
    if (homeName) homeNameEl.textContent = homeName;
    if (homeRole) homeRoleEl.textContent = homeRole;
    if (aboutDesc) aboutDescEl.textContent = aboutDesc;
  }
});


        // Reset All to Default
        resetSettingsBtn.addEventListener('click', () => {
            // Clear all localStorage
            localStorage.clear();
            
            // Reset to default theme
            document.body.classList.remove('light');
            darkThemeBtn.checked = true;
            lightThemeBtn.checked = false;
            // Update button icon
            const buttonIcons = openBtn.querySelectorAll('i');
            buttonIcons.forEach(icon => {
                icon.className = 'fa-solid fa-sun';
            });
            
            // Reset typography
            fontsize.value = 20;
            fontValue.textContent = '20px';
            document.documentElement.style.setProperty('--font-size', '20px');
            fontFamilySelector.value = "'Roboto', 'Poppins', sans-serif";
            document.documentElement.style.setProperty('--font-family', "'Roboto','Poppins', sans-serif");
            
            // Reset background
            document.body.style.backgroundColor = '#11121a';
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            

// Reset background
document.body.style.backgroundColor = '#11121a';
document.body.style.backgroundImage = 'none'; // reset any image
document.documentElement.style.setProperty('--text-color', '#ffffff');


            // Reset settings
            fixedNavbarToggle.checked = true;
            document.documentElement.style.setProperty('--navbar-fixed', 'fixed');
            animationToggle.checked = true;
            document.body.classList.remove('no-animation');
            particleToggle.checked = true;
            document.documentElement.style.setProperty('--particle-opacity', '1');
            smoothScrollToggle.checked = true;
            document.documentElement.style.setProperty('--smooth-scrolling', 'smooth');
            
            // Reset active states
            document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.festive-option').forEach(o => o.classList.remove('active'));
            document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
            
            alert('All settings have been reset to default!');
        });
        
        // Fixed: Reset to Professional Default
resetProfessionalBtn.addEventListener('click', () => {
    // Apply professional preset
    const settings = themePresets.professional;

    // Apply theme
    document.body.classList.remove('light');
    darkThemeBtn.checked = true;
    lightThemeBtn.checked = false;

    // Update button icon
    const buttonIcons = openBtn.querySelectorAll('i');
    buttonIcons.forEach(icon => {
        icon.className = 'fa-solid fa-sun';
    });

    // Apply typography
    fontsize.value = parseInt(settings.fontSize);
    fontValue.textContent = settings.fontSize;
    document.documentElement.style.setProperty('--font-size', settings.fontSize);
    fontFamilySelector.value = settings.fontFamily;
    document.documentElement.style.setProperty('--font-family', settings.fontFamily);

    // Reset festive background completely
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = settings.backgroundColor;
    document.documentElement.style.setProperty('--text-color', settings.textColor);
    document.body.dataset.festive = 'false'; // clear festive state

    // Clear festive and palette selections visually
    document.querySelectorAll('.festive-option').forEach(o => o.classList.remove('active'));
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));

    // Apply main settings
    fixedNavbarToggle.checked = true;
    document.documentElement.style.setProperty('--navbar-fixed', 'fixed');
    animationToggle.checked = true;
    document.body.classList.remove('no-animation');
    particleToggle.checked = true;
    document.documentElement.style.setProperty('--particle-opacity', '1');
    smoothScrollToggle.checked = true;
    document.documentElement.style.setProperty('--smooth-scrolling', 'smooth');

    // Save only professional settings and remove festiveTheme
    localStorage.setItem('theme', settings.theme);
    localStorage.setItem('fontSize', settings.fontSize);
    localStorage.setItem('fontFamily', settings.fontFamily);
    localStorage.setItem('backgroundColor', settings.backgroundColor);
    localStorage.setItem('textColor', settings.textColor);
    localStorage.setItem('fixedNavbar', true);
    localStorage.setItem('animationEnabled', true);
    localStorage.setItem('particleEnabled', true);
    localStorage.setItem('smoothScrolling', true);
    localStorage.removeItem('festiveTheme'); // remove festive theme
    localStorage.removeItem('selectedPalette'); // optional: also clear color palette

    // Update preset active state
    presetCards.forEach(c => c.classList.remove('active'));
    document.querySelector('[data-preset="professional"]').classList.add('active');

    alert('Reset to professional default settings!');
});

        // Save Profile
        saveProfileBtn.addEventListener('click', () => {
            const profileSettings = {
                theme: localStorage.getItem('theme') || 'dark',
                fontSize: localStorage.getItem('fontSize') || '16px',
                fontFamily: localStorage.getItem('fontFamily') || "'Poppins', sans-serif",
                backgroundColor: localStorage.getItem('backgroundColor') || '#11121a',
                textColor: localStorage.getItem('textColor') || '#ffffff',
                fixedNavbar: localStorage.getItem('fixedNavbar') !== 'false',
                animationEnabled: localStorage.getItem('animationEnabled') !== 'false',
                particleEnabled: localStorage.getItem('particleEnabled') !== 'false',
                smoothScrolling: localStorage.getItem('smoothScrolling') !== 'false',
                selectedPalette: localStorage.getItem('selectedPalette'),
                festiveTheme: localStorage.getItem('festiveTheme')
            };
            
            const profileId = 'portfolio_' + Date.now();
            localStorage.setItem(profileId, JSON.stringify(profileSettings));
            
            const shareUrl = `${window.location.origin}${window.location.pathname}?profile=${profileId}`;
            
            // Copy to clipboard
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert(`Profile saved! Share this URL: ${shareUrl}`);
            }).catch(() => {
                // Fallback: show in a prompt
                prompt('Copy this URL to share your profile:', shareUrl);
            });
        });
        // Reset to Professional Default
resetProfessionalBtn.addEventListener('click', () => {
  const settings = themePresets.professional;
  
  // Apply theme
  if (settings.theme === 'light') {
    document.body.classList.add('light');
    lightThemeBtn.checked = true;
    darkThemeBtn.checked = false;
    const buttonIcons = openBtn.querySelectorAll('i');
    buttonIcons.forEach(icon => icon.className = 'fa-solid fa-moon');
  } else {
    document.body.classList.remove('light');
    darkThemeBtn.checked = true;
    lightThemeBtn.checked = false;
    const buttonIcons = openBtn.querySelectorAll('i');
    buttonIcons.forEach(icon => icon.className = 'fa-solid fa-sun');
  }

  // Typography
  fontsize.value = parseInt(settings.fontSize);
  fontValue.textContent = settings.fontSize;
  document.documentElement.style.setProperty('--font-size', settings.fontSize);
  fontfamily.value = settings.fontFamily;
  document.documentElement.style.setProperty('--font-family', settings.fontFamily);

  // Background & text color
  document.body.style.background = settings.backgroundColor;
  document.documentElement.style.setProperty('--text-color', settings.textColor);

  // Accent color (optional for buttons/links)
  document.documentElement.style.setProperty('--accent-color', settings.accentColor);

  // Reset particles background to transparent
  const particles = document.getElementById('particles-js');
  if (particles) {
    particles.style.background = 'transparent';
    particles.style.backgroundImage = 'none';
  }

  // Save settings in localStorage
  localStorage.setItem('theme', settings.theme);
  localStorage.setItem('fontSize', settings.fontSize);
  localStorage.setItem('fontFamily', settings.fontFamily);
  localStorage.setItem('backgroundColor', settings.backgroundColor);
  localStorage.setItem('textColor', settings.textColor);
  localStorage.setItem('accentColor', settings.accentColor);

  // Clear active festive/palette/preset
  document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.festive-option').forEach(o => o.classList.remove('active'));
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));

  // Mark professional preset as active
  const professionalCard = document.querySelector('.preset-card[data-preset="professional"]');
  if (professionalCard) professionalCard.classList.add('active');

  alert('Theme reset to Professional default!');
});

        
        // Load profile from URL
        const urlParams = new URLSearchParams(window.location.search);
        const profileId = urlParams.get('profile');
        if (profileId && localStorage.getItem(profileId)) {
            const profileSettings = JSON.parse(localStorage.getItem(profileId));
            
            // Apply settings
            if (profileSettings.theme === 'light') {
                document.body.classList.add('light');
                lightThemeBtn.checked = true;
                darkThemeBtn.checked = false;
                // Update button icon
                const buttonIcons = openBtn.querySelectorAll('i');
                buttonIcons.forEach(icon => {
                    icon.className = 'fa-solid fa-moon';
                });
            } else {
                document.body.classList.remove('light');
                darkThemeBtn.checked = true;
                lightThemeBtn.checked = false;
                // Update button icon
                const buttonIcons = openBtn.querySelectorAll('i');
                buttonIcons.forEach(icon => {
                    icon.className = 'fa-solid fa-sun';
                });
            }
            
            if (profileSettings.fontSize) {
                fontSizeSlider.value = parseInt(profileSettings.fontSize);
                fontValue.textContent = profileSettings.fontSize;
                document.documentElement.style.setProperty('--font-size', profileSettings.fontSize);
            }
            
            if (profileSettings.fontFamily) {
                fontFamilySelector.value = profileSettings.fontFamily;
                document.documentElement.style.setProperty('--font-family', profileSettings.fontFamily);
            }
            
            if (profileSettings.backgroundColor) {
                document.body.style.backgroundColor = profileSettings.backgroundColor;
            }
            
            if (profileSettings.textColor) {
                document.documentElement.style.setProperty('--text-color', profileSettings.textColor);
            }
            
            if (profileSettings.fixedNavbar !== undefined) {
                fixedNavbarToggle.checked = profileSettings.fixedNavbar;
                document.documentElement.style.setProperty('--navbar-fixed', profileSettings.fixedNavbar ? 'fixed' : 'relative');
            }
            
            if (profileSettings.animationEnabled !== undefined) {
                animationToggle.checked = profileSettings.animationEnabled;
                if (!profileSettings.animationEnabled) {
                    document.body.classList.add('no-animation');
                }
            }
            
            if (profileSettings.particleEnabled !== undefined) {
                particleToggle.checked = profileSettings.particleEnabled;
                document.documentElement.style.setProperty('--particle-opacity', profileSettings.particleEnabled ? '1' : '0');
            }
            
            if (profileSettings.smoothScrolling !== undefined) {
                smoothScrollToggle.checked = profileSettings.smoothScrolling;
                document.documentElement.style.setProperty('--smooth-scrolling', profileSettings.smoothScrolling ? 'smooth' : 'auto');
            }
            
            // Load selected palette if exists
            if (profileSettings.selectedPalette) {
                const savedPalette = JSON.parse(profileSettings.selectedPalette);
                const index = colorPaletteData.findIndex(item => 
                    JSON.stringify(item) === JSON.stringify(savedPalette)
                );
                
                if (index !== -1) {
                    const circle = colorPaletteGrid.children[index];
                    circle.click();
                }
            }
            
            // Load festive theme if exists
            if (profileSettings.festiveTheme) {
                const index = festiveThemes.findIndex(theme => theme.name === profileSettings.festiveTheme);
                if (index !== -1) {
                    festiveOptions.children[index].click();
                }
            }
        }
