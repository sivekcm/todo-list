import { BsTrashFill, BsTypeStrikethrough } from "react-icons/bs"
import { useState } from "react"
const Item = ({item, toggleCompleted, togglePriority, onDelete}) => {
const [check, setCheck] = useState(false) //for the state of the checkbox
    return (
        <div>
            <h1 className={item.IsCompleted ? 'completed' : ''} onDoubleClick={async () => toggleCompleted(item.ItemID) }>{item.Message}
                <label htmlFor="isHighPriority">High Priority?  </label>
                <input type="checkbox" onClick={async () => togglePriority(item.ItemID)} value={item.IsHighPriority} onChange={(e) => setCheck(e.currentTarget.checked)} name="isHighPriority" id="isHighPriority" />
                <BsTrashFill style={{marginInline:'100px'}} onClick={async () => await onDelete(item)}/>
            </h1>
        </div>
    )
}

export default Item
