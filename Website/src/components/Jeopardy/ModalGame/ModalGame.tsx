import "./ModalGame.css"

function ModalGame({ text }: { text: string }) {

    return (
        <div className="modal-bg">
            <p>{text}</p>
        </div>
    )
}

export default ModalGame
