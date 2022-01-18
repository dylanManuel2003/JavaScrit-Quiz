export class AppUI {
    constructor() {}

    /**
     * @param {string} text title of question to render
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} choices this choices of questions
     */
    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for( let i=0;i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]))

            choicesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score the total score
     */
    showScores(score){
        const quizEndTML = `
            <h1>Resultado:</h1>
            <h2>Tu puntaje es: ${score}</h2>
        `;

        const element = document.getElementById('quiz');
        element.innerHTML = quizEndTML;
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz 
     * @param {number} total the total questions
     */
    showProgress(currentIndex, total){
        const progressElement = document.getElementById('progress');
        progressElement.innerHTML = `Pregunta ${currentIndex} de ${total}`
    }
}