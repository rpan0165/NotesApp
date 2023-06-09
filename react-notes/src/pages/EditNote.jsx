import { Link } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'

const EditNote = () => {
  return (
    <section>
    <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary">Save</button>
        <button className="btn lg danger"><RiDeleteBin6Line /></button>
    </header>
    <form action="" className="create-note__form">
        <input type="text" placeholder="Title" autoFocus/>
        <textarea name="" rows="28" placeholder="Note details..."></textarea>
    </form>
   </section>
  )
}

export default EditNote
