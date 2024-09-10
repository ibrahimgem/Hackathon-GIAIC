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
