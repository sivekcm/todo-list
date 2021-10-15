import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListGroupItem } from 'react-bootstrap'

const List = ({ list, onDelete, onUpdate }) => {
    const [showUpdate,setShowUpdate] = useState(false)
    const [Title,setTitle] = useState(list.Title)
    const Date = list.Date
    const ListID = list.ListID
    return (
        <>
            {showUpdate ? <div><input value={ Title } onChange={(e) => setTitle(e.target.value)}/><FcCheckmark onClick={ async () => {setShowUpdate(!showUpdate); onUpdate({ListID, Title, Date } )} }/></div> 
            : <ListGroupItem style={{margin: '100'}}><Link className='title' to={'/list/' + ListID}>{Title}</Link> <BsPencilFill style={{marginInline:'25px'}} onClick={ () => setShowUpdate(!showUpdate) }/> <BsFillTrashFill onClick={ async () => onDelete(list.ListID) }/>{showUpdate || <p>{list.Date}</p>}</ListGroupItem>}
            
        </>
    )
}

export default List
