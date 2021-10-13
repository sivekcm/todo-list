import { useState } from "react"

const CreateList = ({onCreate}) => {
    const [name, setName] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!name) {
            alert("Please enter a name for the list.")
            return
        }

        var date = new window.Date();
        var Date = (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear();

        const Title = name
        await onCreate({Title, Date })
        setName('')


    }
    return (
        <form onSubmit={onSubmit}>   
            <div>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <input type="submit" value="Save" name="" id="" />     
        </form>
    )
}

export default CreateList
