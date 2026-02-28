import "./Cell.css"
import ModalGame from "../ModalGame/ModalGame"
import { useState } from "react"

function Cell({ value, question, answer, title, id }: { value: string, question?: string, answer?: string, title?: boolean, id?: string }) {

    const [modalVisible, setModalVisible] = useState("")

    const onClick = () => { 
        if (modalVisible === "" && id != null) {
            // document.getElementById(id+"-question")!.style.height = document.querySelector("#play-game")!.clientHeight + "px"
            document.getElementById(id+"-question")!.style.width = document.querySelector("#play-game")!.clientWidth + "px"
            document.getElementById(id+"-question")!.classList.toggle("modal-game-none")
            setModalVisible("question")
        } else if (modalVisible === "question") {
            document.getElementById(id+"-question")!.classList.toggle("modal-game-none")
            // document.getElementById(id+"-answer")!.style.height = document.querySelector("#play-game")!.clientHeight + "px"
            document.getElementById(id+"-answer")!.style.width = document.querySelector("#play-game")!.clientWidth + "px"
            document.getElementById(id+"-answer")!.classList.toggle("modal-game-none")
            setModalVisible("answer")
        } else if (modalVisible === "answer") {
            document.getElementById(id+"-answer")!.classList.toggle("modal-game-none")
            setModalVisible("completed")
        }
    }

    return (
        <div onClick={onClick}>
            {
                modalVisible === "completed" && (
                    <div className="completed"></div>
                )
            }
            <div className={`cell ${title ? "title" : ""}`}>
                <p>{value}</p>
            </div>
            <div id={id+"-question"} className="modal-game modal-game-none">
                {
                    question && (
                        <ModalGame text={question}></ModalGame>
                    )
                }
            </div>
            <div id={id+"-answer"} className="modal-game modal-game-none">
                {
                    answer && (
                        <ModalGame text={answer}></ModalGame>
                    )
                }
            </div>
        </div>
    )
}

export default Cell
