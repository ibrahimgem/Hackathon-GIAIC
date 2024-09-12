// Get form and resume container elements
var resumeForm = document.getElementById('resumeForm');
var resumeContainer = document.querySelector('.resume');
// Function to handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload on form submit
    // Get user input values from the form
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var about = document.getElementById('about').value;
    var institute = document.getElementById('degree').value;
    var degree = document.getElementById('degree').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var description = document.getElementById('descirption').value;
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    var skill4 = document.getElementById('skill4').value;
    var skill5 = document.getElementById('skill5').value;
    // Update the dynamic sections in the resume with the user input values
    document.getElementById('dynamic-name').innerText = name;
    document.getElementById('dynamic-title').innerText = title;
    document.getElementById('dynamic-about').innerText = about;
    document.getElementById('dynamic-institute1').innerText = institute;
    document.getElementById('dynamic-degree1').innerText = degree;
    document.getElementById('dynamic-contact').innerText = contact;
    document.getElementById('dynamic-email').innerText = email;
    document.getElementById('dynamic-address').innerText = address;
    document.getElementById('dynamic-company').innerText = company;
    document.getElementById('dynamic-position').innerText = position;
    document.getElementById('dynamic-description').innerText = description;
    // Skills - Updating dynamically
    var skillList = document.querySelector('.skills');
    skillList.innerHTML = "\n        <li><p>".concat(skill1, "</p><span class=\"bar\"><span class=\"html\"></span></span></li>\n        <li><p>").concat(skill2, "</p><span class=\"bar\"><span class=\"css\"></span></span></li>\n        <li><p>").concat(skill3, "</p><span class=\"bar\"><span class=\"typescript\"></span></span></li>\n        <li><p>").concat(skill4, "</p><span class=\"bar\"><span class=\"nextjs\"></span></span></li>\n        <li><p>").concat(skill5, "</p><span class=\"bar\"><span class=\"nodejs\"></span></span></li>\n    ");
    // Show the resume container
    resumeContainer.style.display = 'block';
});
// Hide / Unhide Section
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
