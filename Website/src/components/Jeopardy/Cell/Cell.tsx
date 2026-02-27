import "./Cell.css"
import Modal from "../Modal/Modal"
import { useState } from "react"

function Cell({ value, question, answer, title, id }: { value: string, question?: string, answer?: string, title?: boolean, id?: string }) {

    const [modalVisible, setModalVisible] = useState("")

    const onClick = () => { 
        if (modalVisible === "" && id != null) {
            document.getElementById(id+"-question")!.style.height = document.querySelector("#play-game")!.clientHeight + "px"
            document.getElementById(id+"-question")!.style.width = document.querySelector("#play-game")!.clientWidth + "px"
            document.getElementById(id+"-question")!.classList.toggle("modal-none")
            setModalVisible("question")
        } else if (modalVisible === "question") {
            document.getElementById(id+"-question")!.classList.toggle("modal-none")
            document.getElementById(id+"-answer")!.style.height = document.querySelector("#play-game")!.clientHeight + "px"
            document.getElementById(id+"-answer")!.style.width = document.querySelector("#play-game")!.clientWidth + "px"
            document.getElementById(id+"-answer")!.classList.toggle("modal-none")
            setModalVisible("answer")
        } else if (modalVisible === "answer") {
            document.getElementById(id+"-answer")!.classList.toggle("modal-none")
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
            <div id={id+"-question"} className="modal modal-none">
                {
                    question && (
                        <Modal text={question}></Modal>
                    )
                }
            </div>
            <div id={id+"-answer"} className="modal modal-none">
                {
                    answer && (
                        <Modal text={answer}></Modal>
                    )
                }
            </div>
        </div>
    )
}

export default Cell
