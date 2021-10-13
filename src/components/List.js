import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const List = ({ list, onDelete, onUpdate }) => {
    const [showUpdate,setShowUpdate] = useState(false)
    const [Title,setTitle] = useState(list.Title)
    const Date = list.Date
    const ListID = list.ListID
    return (
        <div>
            {showUpdate ? <div><input value={ Title } onChange={(e) => setTitle(e.target.value)}/><FcCheckmark onClick={ async () => {setShowUpdate(!showUpdate); onUpdate({ListID, Title, Date } )} }/></div> 
            : <h2><Link to={'/list/' + ListID}>{Title}</Link> <BsPencilFill onClick={ () => setShowUpdate(!showUpdate) }/> <BsFillTrashFill onClick={ async () => onDelete(list.ListID) }/></h2>}
            {showUpdate || <p>{list.Date}</p>}
        </div>
    )
}

export default List
