document.getElementById('donate-toggle-btn').addEventListener('click', function() {
    if (document.getElementById('donate-toggle-btn').className.includes('bg-[#B4F461]')) {

        document.getElementById('donate-toggle-btn').classList.remove('bg-[#B4F461]', 'border-none');
        document.getElementById('donate-toggle-btn').classList.add('bg-white', 'border-[#111111]/[0.3]');

        sectionToggle('donate-section');

        document.getElementById('history-toggle-btn').classList.remove('bg-white', 'border-[#111111]/[0.3]');
        document.getElementById('history-toggle-btn').classList.add('bg-[#B4F461]', 'border-none');

        return;
    }

    if (document.getElementById('donate-toggle-btn').className.includes('bg-white')) {

        document.getElementById('donate-toggle-btn').classList.remove('bg-white', 'border-[#111111]/[0.3]');
        document.getElementById('donate-toggle-btn').classList.add('bg-[#B4F461]', 'border-none');

        sectionToggle('donate-section');

        document.getElementById('history-toggle-btn').classList.remove('bg-[#B4F461]', 'border-none');
        document.getElementById('history-toggle-btn').classList.add('bg-white', 'border-[#111111]/[0.3]');

        return;
    }
})

document.getElementById('history-toggle-btn').addEventListener('click', function() {
    if (document.getElementById('history-toggle-btn').className.includes('bg-[#B4F461]')) {

        document.getElementById('history-toggle-btn').classList.remove('bg-[#B4F461]', 'border-none');
        document.getElementById('history-toggle-btn').classList.add('bg-white', 'border-[#111111]/[0.3]');

        sectionToggle('history-section');

        document.getElementById('donate-toggle-btn').classList.remove('bg-white', 'border-[#111111]/[0.3]');
        document.getElementById('donate-toggle-btn').classList.add('bg-[#B4F461]', 'border-none');

        return;
    }

    if (document.getElementById('history-toggle-btn').className.includes('bg-white')) {

        document.getElementById('history-toggle-btn').classList.remove('bg-white', 'border-[#111111]/[0.3]');
        document.getElementById('history-toggle-btn').classList.add('bg-[#B4F461]', 'border-none');

        sectionToggle('history-section');

        document.getElementById('donate-toggle-btn').classList.remove('bg-[#B4F461]', 'border-none');
        document.getElementById('donate-toggle-btn').classList.add('bg-white', 'border-[#111111]/[0.3]');
        
        return;
    }
})