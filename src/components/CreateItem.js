import { useState } from "react"
const CreateItem = ({ListID, onCreateItem}) => {
    const [item, setItem] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!item) {
            alert("please enter a description for the task to do")
            return
        }

        const IsHighPriority = false
        const IsCompleted = false
        const Message = item

        await onCreateItem({ListID,Message,IsCompleted,IsHighPriority})
        setItem('')

    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder='Add new task to do' value={item} onChange={(e) => setItem(e.target.value)} />
            </div>
            <input type="submit" value="Save" />
        </form>
    )
}

export default CreateItem
