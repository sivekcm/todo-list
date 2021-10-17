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
        

            <ListGroupItem className='select-item'  style={{backgroundColor:'#e9f5f5'}}>
            {showUpdate ? <div className='title'><input  value={ Title } onChange={(e) => setTitle(e.target.value)}/></div> 
            : <Link className='title' style={{textDecoration:'none'}} to={'/list/' + ListID}>{Title}</Link> 

                
                 }
            <p style={{display:'inline-block', marginRight:''}}>{list.Date.toString().substring(0,10)}</p>
            <FaTimes className='icon select delete' onClick={ async () => onDelete(list.ListID) }/>
            {showUpdate ? <FcCheckmark className='icon select' onClick={ async () => {setShowUpdate(!showUpdate); onUpdate({ListID, Title, Date } )} }/> : <BsPencilFill className='icon select edit' onClick={ () => setShowUpdate(!showUpdate) }/> }
            </ListGroupItem>
            
        </>
    )
}

export default List
