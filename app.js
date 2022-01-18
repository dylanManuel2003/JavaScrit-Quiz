import { questions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import { AppUI } from './models/AppUI.js';


/**
 * 
 * @param {Quiz} quiz the quiz object 
 * @param {AppUI} appUI UI object 
 */
const renderPage = (quiz, appUI) => {
    if(quiz.isEnded()) {
        appUI.showScores(quiz.score)
    } else {
        appUI.showQuestion(quiz.getQuestionIndex().text)
        appUI.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice)
            renderPage(quiz, appUI) 
        })
        appUI.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }
}


function main() {
    const quiz = new Quiz(questions)
    const appUI = new AppUI()
    renderPage(quiz, appUI)

}

main()