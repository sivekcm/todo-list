import { BsTrashFill, BsTypeStrikethrough } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import { useState } from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"

const Item = ({item, toggleCompleted, togglePriority, onDelete}) => {
const [check, setCheck] = useState(false) //for the state of the checkbox
    return (
        <div>
            <ListGroupItem className='select-item' style={item.IsHighPriority.data[0] ? {backgroundColor:'lightyellow'} : {backgroundColor:'#e9f5f5'}}  >
                <p className={item.IsCompleted.data[0] ? 'completed title' : 'title'} 
                    style={item.IsHighPriority.data[0] ? {fontWeight:'bold'} : {color:'#0d6efd'}} 
                    onClick={async () => toggleCompleted(item.ItemID) }>{item.Message}</p> 
                
                <label style={{display:'inline-block', marginRight:'10px'}}>Prioritze  </label>

                <input style={{display:'inline-block', marginInlineEnd:'40px'}} type="checkbox" 
                    onClick={async () => togglePriority(item.ItemID)} 
                    checked={item.IsHighPriority.data[0]} 
                    value={item.IsHighPriority.data[0]} 
                    onChange={(e) => setCheck(e.currentTarget.checked)} 
                    name="isHighPriority" id="isHighPriority" />
                
                <FaTimes className='icon select delete' onClick={async () => await onDelete(item)}/>
            </ListGroupItem>
        </div>
    )
}

export default Item
