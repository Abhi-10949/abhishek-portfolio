// --- DATA ---
// All your portfolio information is stored here.
// To add, edit, or remove items, just modify these arrays.

const skills = [
    { name: 'HTML5', iconUrl: 'assets/skills/html5.svg' },
    { name: 'CSS3', iconUrl: 'assets/skills/css3.svg' },
    { name: 'JavaScript', iconUrl: 'assets/skills/javascript.svg' },
    { name: 'React', iconUrl: 'assets/skills/react.svg' },
    { name: 'Node.js', iconUrl: 'assets/skills/nodejs.svg' },
    { name: 'TailwindCSS', iconUrl: 'assets/skills/tailwindcss.svg' },
    { name: 'MongoDB', iconUrl: 'assets/skills/mongodb.svg' },
    { name: 'Python', iconUrl: 'assets/skills/python.svg' },
    { name: 'Git', iconUrl: 'assets/skills/git.svg' },
    { name: 'Figma', iconUrl: 'assets/skills/figma.svg' },
    { name: 'Docker', iconUrl: 'assets/skills/docker.svg' },
    { name: 'Express.js', iconUrl: 'assets/skills/express.svg', invertOnDark: true },
];

const projects = [
    { title: 'Portfolio Website', description: 'A personal portfolio website to showcase my skills and projects (the one you are looking at!).', image: 'https://placehold.co/600x400/8b5cf6/FFFFFF?text=Project+3', tags: ['HTML', 'TailwindCSS', 'JavaScript'], liveUrl: '#', sourceUrl: 'https://github.com/Abhi-10949/abhishek-portfolio' },
    // { title: 'Task Management App', description: 'A Kanban-style task management application to organize workflows and improve productivity.', image: 'https://placehold.co/600x400/10b981/FFFFFF?text=Project+2', tags: ['React', 'Firebase', 'TailwindCSS'], liveUrl: '#', sourceUrl: 'https://github.com/Abhi-10949' },
    { title: 'Photography Website Dashboard', description: 'A full-featured e-commerce website with product listings, a shopping cart, and a checkout process.', image: 'https://placehold.co/600x400/3b82f6/FFFFFF?text=Project+1', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], liveUrl: '#', sourceUrl: 'https://github.com/Abhi-10949/Web-D-Playground/tree/main/MERN_STACK/MINI%20Project(CSS)' },
    { title: 'Spotify Clone', description: 'A web app that displays the current weather and forecast for a searched city using a third-party API.', image: 'https://placehold.co/600x400/f59e0b/FFFFFF?text=Project+4', tags: ['JavaScript', 'API', 'HTML', 'CSS'], liveUrl: '#', sourceUrl: 'https://github.com/Abhi-10949/Web-D-Playground/tree/main/MERN_STACK/SpotifyClone_Project(CSS)' },
    // { title: 'AI Chatbot', description: 'An intelligent chatbot built with Python and NLP libraries for customer support simulation.', image: 'https://placehold.co/600x400/ef4444/FFFFFF?text=Project+5', tags: ['Python', 'Flask', 'NLP'], liveUrl: '#', sourceUrl: 'https://github.com/Abhi-10949' },
    // { title: 'Blogging Platform', description: 'A full-stack blogging platform where users can create, read, update, and delete posts.', image: 'https://placehold.co/600x400/34d399/FFFFFF?text=Project+6', tags: ['Next.js', 'GraphQL', 'PostgreSQL'], liveUrl: '#', sourceUrl: 'https://github.com/Abhi-10949' }
];

const achievements = [
    {
        title: 'Blockchain Technology in IOT Security',
        description: 'Co-authored a paper titled Implemented blockchain-based security for IoT devices to ensure data integrity and secure communication.',
        url: '#',
        date: 'May 2025'
    },
    // {
    //     title: 'Winner, National Hackathon 2023',
    //     description: 'Led a team of four to win first place by developing a mobile app for local community engagement in under 48 hours.',
    //     url: '#',
    //     date: 'October 2023'
    // }
];

const certifications = [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', url: '#', date: 'Issued Jan 2024' },
    { name: 'Google Professional Cloud Developer', issuer: 'Google Cloud', url: '#', date: 'Issued Aug 2023' },
    { name: 'Certified JavaScript Developer', issuer: 'FreeCodeCamp', url: '#', date: 'Issued May 2023' }
];

// --- APP INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- DYNAMIC CONTENT RENDERING ---
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const invertClass = skill.invertOnDark ? 'dark:invert' : '';
            skillsContainer.innerHTML += `
                <div class="skill-card bg-white dark:bg-gray-800 p-6 rounded-lg text-center transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md reveal">
                    <div class="skill-icon mb-4 inline-flex items-center justify-center transition-transform duration-300">
                        <img src="${skill.iconUrl}" alt="${skill.name} logo" class="w-12 h-12 ${invertClass}" loading="lazy"/>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${skill.name}</h3>
                </div>`;
        });
    }

    const projectsContainer = document.getElementById('projects-container');
    const projectFilters = document.getElementById('project-filters');
    if (projectsContainer && projectFilters) {
        const allTags = [...new Set(projects.flatMap(p => p.tags))];
        allTags.forEach(tag => {
            projectFilters.innerHTML += `<button class="filter-btn px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition" data-filter="${tag}">${tag}</button>`;
        });

        const renderProjects = (filter = 'all') => {
            projectsContainer.innerHTML = '';
            const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.tags.includes(filter));
            filteredProjects.forEach(project => {
                projectsContainer.innerHTML += `
                    <div class="project-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg reveal">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">${project.title}</h3>
                            <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                            <div class="flex flex-wrap gap-2 mb-4">${project.tags.map(tag => `<span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">${tag}</span>`).join('')}</div>
                            <div class="flex justify-between items-center mt-6">
                                <a href="${project.liveUrl}" target="_blank" class="text-blue-500 dark:text-blue-400 hover:underline font-semibold">Live Demo</a>
                                <a href="${project.sourceUrl}" target="_blank" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path></svg></a>
                            </div>
                        </div>
                    </div>`;
            });
            ScrollReveal().reveal('.reveal', { delay: 200, distance: '20px', origin: 'bottom', easing: 'ease-in-out', reset: false });
        };
        renderProjects();
        projectFilters.addEventListener('click', e => {
            if (e.target.classList.contains('filter-btn')) {
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                renderProjects(e.target.dataset.filter);
            }
        });
    }

    const achievementsContainer = document.getElementById('achievements-container');
    if(achievementsContainer) {
        achievements.forEach(ach => {
            achievementsContainer.innerHTML += `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md reveal">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">${ach.title}</h3>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">${ach.description}</p>
                            <p class="text-sm text-gray-500 mt-1">${ach.date}</p>
                        </div>
                        <a href="${ach.url}" target="_blank" class="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 whitespace-nowrap">
                            Read More
                        </a>
                    </div>
                </div>`;
        });
    }

    const certificationsContainer = document.getElementById('certifications-container');
    if(certificationsContainer) {
        certifications.forEach((cert, index) => {
            certificationsContainer.innerHTML += `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md reveal">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">${cert.name}</h3>
                            <p class="text-gray-600 dark:text-gray-400">${cert.issuer}</p>
                            <p class="text-sm text-gray-500 mt-1">${cert.date}</p>
                        </div>
                        <a href="${cert.url}" target="_blank" class="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 whitespace-nowrap">View Credential</a>
                    </div>
                    <div class="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                        <img id="cert-image-${index}" src="https://placehold.co/600x300/e5e7eb/374151?text=Upload+Certificate" class="w-full rounded-md mb-4 object-contain max-h-80 bg-gray-200 dark:bg-gray-700">
                        <label for="cert-upload-${index}" class="cursor-pointer text-blue-500 dark:text-blue-400 hover:underline font-medium py-2 px-4 rounded-lg text-center block w-full sm:w-auto sm:inline-block">Upload Image</label>
                        <input type="file" id="cert-upload-${index}" class="hidden" accept="image/*" data-target="cert-image-${index}">
                    </div>
                </div>`;
        });
    }

    // --- UI INTERACTIONS ---
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            const targetImageId = event.target.dataset.target;
            const imageElement = document.getElementById(targetImageId);
            reader.onload = (e) => {
                if(imageElement) {
                    imageElement.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
    }

    document.getElementById('profile-photo-upload').dataset.target = 'profile-photo';
    document.getElementById('about-photo-upload').dataset.target = 'about-photo';

    document.addEventListener('change', (e) => {
        if (e.target.type === 'file' && e.target.dataset.target) {
            handleImageUpload(e);
        }
    });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        header.classList.toggle('shadow-lg', window.scrollY > 50);
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Dark Mode Toggle Logic
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleButton = document.getElementById('theme-toggle');

    if (themeToggleButton && themeToggleDarkIcon && themeToggleLightIcon) {
        // Set initial icon state based on theme
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }

        themeToggleButton.addEventListener('click', function() {
            // Toggle icons
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // Toggle theme
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });
    }

    // Typewriter effect for hero subtitle
    const typedRoleElement = document.getElementById('typed-role');
    if (typedRoleElement) {
        const phrases = ['Full-Stack Developer', 'MERN Engineer', 'Open Source Contributor', 'Tech Enthusiast'];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeSpeed = 90;
        const deleteSpeed = 50;
        const holdDelay = 1200;

        function typeLoop() {
            const current = phrases[phraseIndex];
            if (!isDeleting) {
                typedRoleElement.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(typeLoop, holdDelay);
                    return;
                }
            } else {
                typedRoleElement.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
            }
            setTimeout(typeLoop, isDeleting ? deleteSpeed : typeSpeed);
        }
        typeLoop();
    }

    // Scrollspy for nav links
    const navLinks = Array.from(document.querySelectorAll('nav .nav-link'));
    const sectionIds = navLinks.map(link => link.getAttribute('href')).filter(Boolean).map(href => href.replace('#', ''));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    function updateActiveNav() {
        const scrollPos = window.scrollY + 120; // offset for fixed header
        let activeId = null;
        for (const section of sections) {
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                activeId = section.id;
                break;
            }
        }
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
        });
    }
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Scroll-to-top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        function toggleScrollTopBtn() {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.remove('hidden');
            } else {
                scrollTopBtn.classList.add('hidden');
            }
        }
        window.addEventListener('scroll', toggleScrollTopBtn);
        toggleScrollTopBtn();
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Dynamic footer year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ScrollReveal animations
    ScrollReveal().reveal('.reveal', { delay: 200, distance: '20px', origin: 'bottom', easing: 'ease-in-out', reset: false, duration: 600, viewFactor: 0.2 });
    ScrollReveal().reveal('h1', { delay: 200, origin: 'left', distance: '30px' });
    ScrollReveal().reveal('p.text-xl', { delay: 400, origin: 'left', distance: '30px' });
    ScrollReveal().reveal('p.text-lg', { delay: 600, origin: 'left', distance: '30px' });
    ScrollReveal().reveal('#home .flex.justify-center', { delay: 800, origin: 'bottom' });
    ScrollReveal().reveal('#home .relative.group', { delay: 600, origin: 'right', distance: '50px', scale: 0.85 });
});
