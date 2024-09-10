document.getElementById('characterSelect').addEventListener('change', function() {
    const selectedCharacter = this.value;

    const characterDivs = document.querySelectorAll('#paragraphContainer div');
    characterDivs.forEach(div => div.classList.add('hidden'));

    if (selectedCharacter !== 'none') {
        document.getElementById(selectedCharacter).classList.remove('hidden');
    }
});
