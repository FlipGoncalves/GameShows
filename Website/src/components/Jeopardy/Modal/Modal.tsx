import "./Modal.css"

function Modal({ text }: { text: string }) {

    return (
        <div className="modal-bg">
            <p>{text}</p>
        </div>
    )
}

export default Modal
