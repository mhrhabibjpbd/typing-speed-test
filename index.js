document.addEventListener("DOMContentLoaded", () => {
    const sentence = [
        "The quick brown fox jumps over the lazy dog.",
        "JavaScript is a versatile programming language.",
        "I love coding and learning new technologies.",
        "Front-end development is an exciting field.",
        "Debugging code can be challenging but rewarding.",
        "The weather today is perfect for a walk.",
        "You can build amazing websites with HTML and CSS.",
        "Consistency is key to mastering any skill.",
        "I am working on improving my coding skills.",
        "Practice makes perfect, especially in programming."
    ];

    const randomText = document.getElementById('randomText');
    const typingInput = document.getElementById('typingInput');
    const typingTestButton = document.getElementById('typingTestButton');
    const showResult = document.getElementById('showResult');

    let randomSentence;
    let typingTimeStart;

    typingTestButton.addEventListener('click', startButton);
    typingInput.addEventListener('input', inputChecked);

    document.addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
            typingTestButton.classList.add('typingTestButtonHover')
            typingTestButton.click();
            typingInput.value = "";
            showResult.textContent = "";
        }
        document.addEventListener('keyup', (event) => {
            if(event.key === 'Enter'){
                typingTestButton.classList.remove('typingTestButtonHover');
            }
        })
    })

    function startButton(){
       const sentenceIndex = Math.floor(Math.random() * sentence.length);
       randomSentence = sentence[sentenceIndex];
       randomText.textContent = randomSentence;
       typingInput.removeAttribute("disabled");
       typingInput.focus();
       typingTimeStart = new Date().getTime();
       
    }

    function inputChecked(){
        const typeText = typingInput.value;

        if(typeText == randomSentence){
            const typingTimeEnd = new Date().getTime();
            const timeSecond = (typingTimeEnd - typingTimeStart) / 1000;
            const wordLength = typeText.split(' ').length;
            const wordPerMinute = (wordLength / timeSecond) * 60;
            showResult.textContent = `Your typing speed ${wordPerMinute.toFixed(2)} word per minutes`
        }
    }
})