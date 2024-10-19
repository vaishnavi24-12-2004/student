// Function to display the dropdown options based on category selected
function showDropdown(category) {
    const appSelect = document.getElementById('appSelect');
    appSelect.innerHTML = ''; // Clear previous options

    // Set default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select an app';
    appSelect.appendChild(defaultOption);

    // Define apps based on category
    let apps = [];
    if (category === 'math') {
        apps = [
            { name: 'Math Solver', url: 'https://play.google.com/store/apps/details?id=mathsolver' },
            { name: 'Algebra Helper', url: 'https://play.google.com/store/apps/details?id=algebrahelper' }
        ];
    } else if (category === 'science') {
        apps = [
            { name: 'Physics Pro', url: 'https://play.google.com/store/apps/details?id=physicspro' },
            { name: 'Chemistry Lab', url: 'https://play.google.com/store/apps/details?id=chemistrylab' }
        ];
    } else if (category === 'languages') {
        apps = [
            { name: 'Duolingo', url: 'https://play.google.com/store/apps/details?id=duolingo' },
            { name: 'Memrise', url: 'https://play.google.com/store/apps/details?id=memrise' }
        ];
    } else if (category === 'history') {
        apps = [
            { name: 'World History', url: 'https://play.google.com/store/apps/details?id=worldhistory' },
            { name: 'Ancient Civilizations', url: 'https://play.google.com/store/apps/details?id=ancientciv' }
        ];
    }

    // Populate dropdown with apps
    apps.forEach(app => {
        const option = document.createElement('option');
        option.value = app.url;
        option.textContent = app.name;
        appSelect.appendChild(option);
    });
}

// Function to open the selected app link
function openApp() {
    const appSelect = document.getElementById('appSelect');
    const selectedAppUrl = appSelect.value;

    if (selectedAppUrl) {
        window.open(selectedAppUrl, '_blank');
    }
}
