import { useEffect, useState } from "react"
import Board from "./Board/Board"
import "./Jeopardy.css"
import questions from './questions.json'

function Jeopardy() {

  const [selectedRows, setSelectedRows] = useState<number>(4)
  const [selectedPlayers, setSelectedPlayers] = useState<number>(4)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [questionsList, setQuestionsList] = useState<any[]>([])

  var minRows = 1;
  var maxRows = 6;

  useEffect(() => {
    setQuestionsList(questions)
  }, [])

  const onChangeCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
      document.getElementById("category_"+category)?.setAttribute("checked", "true")
    } else if (selectedCategories.length < 6) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      document.getElementById("category_"+category)?.setAttribute("checked", "false")
    }
  }
    
  const filteredQuestions = questionsList.filter(q => selectedCategories.includes(q.category)).map(q => {
    return q.questions.map(qt => {
      qt.category = q.category
      return qt
    }).filter(q => q.value <= selectedRows * 100)
  })

  const onlyUnique = (value: string, index: number, array: string[]) => {
    return array.indexOf(value) === index;
  }

  const onCreateBoard = () => {
    if (selectedCategories.length !== 0) {
      document.getElementById("setup-game")?.classList.add("game-hidden")
      document.getElementById("play-game")?.classList.remove("game-hidden")
      document.querySelector("body")?.classList.add("body-center")
    }
  }
  
  const validateFile = (json_file: any) => {
    if (!Array.isArray(json_file)) {
      return false
    }
    json_file.forEach((cat: any) => {
      if (cat.category == null || cat.questions == null) {
        return false
      }
      cat.questions.forEach((q: any) => {
        if (q.question == null || q.answer == null || q.value == null) {
          return false
        }
      })
    })
    return true
  }

  const onFileChosen = async (file: Blob) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    var json_file = JSON.parse(await file.text())

    if (!validateFile(json_file)) {
      alert("Invalid file format!")
      return
    }

    setQuestionsList(prev => [...prev, ...json_file])
  }

  return (
    <>
      <div id="setup-game">
        <h1>Jeopardy</h1>
        <div className="board-container">
          <div className="div-col-2">
            {/* <h2>Number of Players: {selectedPlayers}</h2>
            <div className="slidecontainer">
              <input type="range" min="2" max="6" value={selectedPlayers} className="slider" id="myRange" onChange={(e) => setSelectedPlayers(parseInt(e.target.value))} />
            </div> */}
            <h2>Level: {selectedRows}</h2>
            <div className="slidecontainer">
              <input type="range" min={minRows} max={maxRows} value={selectedRows} className="slider" id="myRange" onChange={(e) => setSelectedRows(parseInt(e.target.value))} />
            </div>
            <h2>Categories (Max: 6)</h2>
            <div className="category-container">
              {
                questionsList.map((question) => question.category).filter(onlyUnique).map((category) => (
                  <div className="checkbox-wrapper">
                    <div className="round">
                      <input type="checkbox" id={`category_${category}`} name="category" value={category} onChange={() => onChangeCategory(category)} checked={selectedCategories.includes(category)} />
                      <label htmlFor={`category_${category}`}></label>
                      <span onClick={() => onChangeCategory(category)}>{category}</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <h2>Import Questions</h2>
            <input type="file" id="file-input" accept=".json" onChange={e => onFileChosen(e.target.files[0])} />
          </div>
          <div className="div-col-10 preview">
            <h2>Preview</h2>
            <div className="board">
              <Board questions={filteredQuestions} preview={true}></Board>
            </div>
          </div>
        </div>
        <button className="btn-create-board" onClick={onCreateBoard}>Create Board</button>
      </div>
      <div id="play-game" className="game-hidden board-no-limits board-container">
        <Board questions={filteredQuestions}></Board>
      </div>
    </>
  )
}

export default Jeopardy
