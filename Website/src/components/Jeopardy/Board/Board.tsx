import { useEffect } from "react";
import Cell from "../Cell/Cell";
import "./Board.css"

function Board({ questions, preview }: { questions: any[], preview?: boolean }) {

  questions = questions.flat()
  var categories = questions.map(q => q.category).filter((value, index, self) => self.indexOf(value) === index)

  var questions_category_value: any[] = []

  var shuffledQuestions = [];
  while (questions.length) {
    var randomIndex = Math.floor(Math.random() * questions.length),
        element = questions.splice(randomIndex, 1)
    shuffledQuestions.push(element[0]);       
  }

  shuffledQuestions.forEach(q => {
    if (questions_category_value.find((qc: any) => qc.category === q.category && qc.value === q.value) == null) {
      questions_category_value.push(q)
    }
  })

  var number_questions = questions_category_value.length
  useEffect(() => {
    if (number_questions !== 0 && !preview) {
      var interval = setInterval(() => {
        if (document.querySelectorAll(".completed").length == number_questions) {
          alert("Game completed!")
          window.location.reload()
          clearInterval(interval)
        }
      }, 1500)
    }
  })

  return (
    <>
      {
        categories.map(category => {
          return (
            <div className="category" key={category}>
              <Cell value={category} title={true}></Cell>
              {
                questions_category_value.sort((a, b) => a.value - b.value).filter(cat => cat.category === category).map((q, i) => {
                  return (
                    preview ? <Cell value={q.value}></Cell> : <Cell value={q.value} question={q.question} answer={q.answer} id={`${category}-${i}`}></Cell>
                  )
                })
              }
          </div>
          )
        })
      }
    </>
  )
}

export default Board
