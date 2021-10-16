import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
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
            : <ListGroupItem  style={{backgroundColor:'#e9f5f5'}}>
                <Link className='title select' style={{textDecoration:'none'}} to={'/list/' + ListID}>{Title}</Link> 
            {showUpdate || <p style={{display:'inline-block', marginRight:''}}>{list.Date.toString().substring(0,10)}</p>}
            <FaTimes className='icon select delete' onClick={ async () => onDelete(list.ListID) }/>
            <BsPencilFill className='icon select edit' onClick={ () => setShowUpdate(!showUpdate) }/> 
            </ListGroupItem>}
            
        </>
    )
}

export default List
