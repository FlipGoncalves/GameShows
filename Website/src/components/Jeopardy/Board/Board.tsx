import { useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.css"

function Board({ questions, preview, created }: { questions: any[], preview?: boolean, created?: boolean }) {

  const [questionsCategoryValue, setQuestionsCategoryValue] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    questions = questions.flat()
    setCategories(questions.map(q => q.category).filter((value, index, self) => self.indexOf(value) === index))

    var shuffledQuestions = [];
    while (questions.length) {
      var randomIndex = Math.floor(Math.random() * questions.length),
          element = questions.splice(randomIndex, 1)
      shuffledQuestions.push(element[0]);       
    }

    var tmp: any[] = []
    shuffledQuestions.forEach(q => {
      if (tmp.find((qc: any) => qc.category === q.category && qc.value === q.value) == null) {
        tmp.push(q)
      }
    })
    setQuestionsCategoryValue([...tmp])
  }, [questions])

  useEffect(() => {
    if (questionsCategoryValue.length !== 0 && !preview && created) {
      var interval = setInterval(() => {
        if (document.querySelectorAll(".completed").length == questionsCategoryValue.length) {
          alert("Game completed!")
          window.location.reload()
          clearInterval(interval)
        }
      }, 1500)
    }
  }, [created])

  return (
    <>
      {
        categories.map(category => {
          return (
            <div className="category" key={category}>
              <Cell value={category} title={true}></Cell>
              {
                questionsCategoryValue.sort((a, b) => a.value - b.value).filter(cat => cat.category === category).map((q, i) => {
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
