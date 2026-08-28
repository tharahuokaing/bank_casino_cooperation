// State Variables
let currentLang = 'km';
let demoBalance = 1000000;

// Language Switcher Functionality
function switchLanguage(lang) {
    currentLang = lang;

    // Update Active Button UI
    document.getElementById('btn-km').classList.toggle('active', lang === 'km');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Update text content for elements with data attributes
    const elements = document.querySelectorAll('[data-km][data-en]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

// Simulation Functionality (Educational RNG Demo)
function runSimulation() {
    const resultElement = document.getElementById('sim-result');
    const balanceElement = document.getElementById('balance');

    const cost = 50;
    if (demoBalance < cost) {
        if (currentLang === 'km') {
            resultElement.textContent = "តុល្យភាពប្រាក់និម្មិតមិនគ្រប់គ្រាន់! សូមចុច 'កំណត់ឡើងវិញ'។";
        } else {
            resultElement.textContent = "Insufficient demo credits! Please click 'Reset Balance'.";
        }
        resultElement.style.color = "#d32f2f";
        return;
    }

    demoBalance -= cost;

    // Simulating RNG Outcome (Educational algorithm test)
    const outcomes = [0, 20, 50, 100, 200];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const reward = outcomes[randomIndex];

    demoBalance += reward;
    balanceElement.textContent = `$${demoBalance}`;

    // Display Results dynamically based on selected language
    if (reward > cost) {
        resultElement.style.color = "#2e7d32";
        if (currentLang === 'km') {
            resultElement.textContent = `លទ្ធផល៖ ជោគជ័យ! អ្នកបានទទួលប្រាក់និម្មិត +$${reward}`;
        } else {
            resultElement.textContent = `Simulation Result: Success! You generated +$${reward} demo credits`;
        }
    } else {
        resultElement.style.color = "#d32f2f";
        if (currentLang === 'km') {
            resultElement.textContent = `លទ្ធផល៖ ការបាត់បង់ប្រាក់និម្មិត -$${cost - reward}`;
        } else {
            resultElement.textContent = `Simulation Result: Virtual net loss -$${cost - reward}`;
        }
    }
}

// Reset Demo Balance
function resetSimulation() {
    demoBalance = 1000000;
    document.getElementById('balance').textContent = `$${demoBalance}`;
    const resultElement = document.getElementById('sim-result');
    
    if (currentLang === 'km') {
        resultElement.textContent = "បានបន្តសមតុល្យដើម $1,000,000 រួចរាល់។";
    } else {
        resultElement.textContent = "Demo balance reset to $1,000,000.";
    }
    resultElement.style.color = "#333333";
}
