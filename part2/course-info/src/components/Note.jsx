const Note = ({ note, handleDelete }) => {
    return (
        <li className='note'>
            {note.content} 
            <button onClick={handleDelete}> Delete </button>
        </li>
    )
}

export default Note