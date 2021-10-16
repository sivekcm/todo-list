import { useState } from "react"
const CreateItem = ({ListID, onCreateItem}) => {
    const [item, setItem] = useState('') //the message of the new item being created

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!item) {
            alert("please enter a description for the task to do")
            return
        }

        const IsHighPriority = false
        const IsCompleted = false
        const Message = item

        await onCreateItem({ListID,Message,IsCompleted,IsHighPriority}) //creates the item
        setItem('')

    }
    return (
        <form className='form' onSubmit={onSubmit}>
   
                <input type="text" placeholder='Add new task to do' value={item} onChange={(e) => setItem(e.target.value)} />
        
            <input style={{backgroundColor:'black', color:'white'}} className='btn' type="submit" value="Save" />
        </form>
    )
}

export default CreateItem
