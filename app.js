function toggleSectionVisibility(sectionClass) {
    var section = document.querySelector(".".concat(sectionClass));
    if (section) {
        section.style.display = (section.style.display === 'block' || section.style.display === '') ? 'none' : 'block';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var toggleButtons = {
        'toggle-about': 'about',
        'toggle-education': 'education',
        'toggle-contact': 'contact',
        'toggle-address': 'address',
        'toggle-work': 'work-experience',
        'toggle-skills': 'skills'
    };
    Object.keys(toggleButtons).forEach(function (buttonId) {
        var button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function () {
                toggleSectionVisibility(toggleButtons[buttonId]);
            });
        }
    });
});
