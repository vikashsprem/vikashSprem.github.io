/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });


/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });


/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });


/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });


/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });



/* FETCH API */

document.addEventListener('DOMContentLoaded', function () {
    const projectContainer = document.getElementById('project-container');
    const apiUrl = 'https://api.github.com/users/vikashsprem/repos';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                if (!repo.fork) {
                    const projectDiv = document.createElement('div');
                    projectDiv.className = 'project';

                    const projectName = document.createElement('h2');
                    projectName.textContent = repo.name;

                    const projectDescription = document.createElement('p');
                    projectDescription.textContent = repo.description || 'No description available.';

                    const technologiesDiv = document.createElement('div');
                    technologiesDiv.className = 'technologies';
                    const technologies = ['Java', 'Spring Boot', 'MySQL', 'React/Angular', , 'JavaScript', 'HTML', 'CSS', 'Docker']; // You can modify this as needed
                    technologies.forEach(tech => {
                        const techSpan = document.createElement('span');
                        techSpan.textContent = tech;
                        technologiesDiv.appendChild(techSpan);
                    });

                    const demoLink = document.createElement('a');
                    demoLink.href = repo.homepage || repo.html_url;
                    demoLink.textContent = 'Demo Link';
                    demoLink.target = '_blank';

                    const sourceCodeLink = document.createElement('a');
                    sourceCodeLink.href = repo.html_url;
                    sourceCodeLink.textContent = 'Source Code';
                    sourceCodeLink.target = '_blank';

                    projectDiv.appendChild(projectName);
                    projectDiv.appendChild(projectDescription);
                    projectDiv.appendChild(technologiesDiv);
                    projectDiv.appendChild(demoLink);
                    projectDiv.appendChild(sourceCodeLink);

                    projectContainer.appendChild(projectDiv);

                    setTimeout(() => {
                        projectDiv.classList.add('visible');
                    }, 100);
                }
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});
