// Get form and resume container elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.querySelector('.resume') as HTMLElement;

// Function to handle form submission
resumeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit

    // Get user input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    const institute = (document.getElementById('degree') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const description = (document.getElementById('descirption') as HTMLTextAreaElement).value;
    const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;
    const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;
    const skill4 = (document.getElementById('skill4') as HTMLInputElement).value;
    const skill5 = (document.getElementById('skill5') as HTMLInputElement).value;

    // Update the dynamic sections in the resume with the user input values
    (document.getElementById('dynamic-name') as HTMLElement).innerText = name;
    (document.getElementById('dynamic-title') as HTMLElement).innerText = title;
    (document.getElementById('dynamic-about') as HTMLElement).innerText = about;
    (document.getElementById('dynamic-institute1') as HTMLElement).innerText = institute;
    (document.getElementById('dynamic-degree1') as HTMLElement).innerText = degree;
    (document.getElementById('dynamic-contact') as HTMLElement).innerText = contact;
    (document.getElementById('dynamic-email') as HTMLElement).innerText = email;
    (document.getElementById('dynamic-address') as HTMLElement).innerText = address;
    (document.getElementById('dynamic-company') as HTMLElement).innerText = company;
    (document.getElementById('dynamic-position') as HTMLElement).innerText = position;
    (document.getElementById('dynamic-description') as HTMLElement).innerText = description;

    // Skills - Updating dynamically
    const skillList = document.querySelector('.skills') as HTMLElement;
    skillList.innerHTML = `
        <li><p>${skill1}</p><span class="bar"><span class="html"></span></span></li>
        <li><p>${skill2}</p><span class="bar"><span class="css"></span></span></li>
        <li><p>${skill3}</p><span class="bar"><span class="typescript"></span></span></li>
        <li><p>${skill4}</p><span class="bar"><span class="nextjs"></span></span></li>
        <li><p>${skill5}</p><span class="bar"><span class="nodejs"></span></span></li>
    `;

    // Show the resume container
    resumeContainer.style.display = 'flex';
});



// Hide / Unhide Section
function toggleSectionVisibility(sectionClass: string) {
    const section = document.querySelector(`.${sectionClass}`) as HTMLElement;
    if (section) {
        section.style.display = (section.style.display === 'block' || section.style.display === '') ? 'none' : 'block';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = {
        'toggle-about': 'about',
        'toggle-education': 'education',
        'toggle-contact': 'contact',
        'toggle-address': 'address',
        'toggle-work': 'work-experience',
        'toggle-skills': 'skills'
    };

    Object.keys(toggleButtons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                toggleSectionVisibility(toggleButtons[buttonId]);
            });
        }
    });
});
