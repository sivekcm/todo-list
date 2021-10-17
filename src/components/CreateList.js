import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const CreateList = ({onCreate}) => {
    const [name, setName] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!name) {
            alert("Please enter a name for the list.")
            return
        }

        var date = new window.Date();
        var Date = (date.getFullYear() + '-' + date.getMonth())+'-'+date.getDate();

        const Title = name
        await onCreate({Title, Date }) //creates the lst
        setName('')


    }
    return (
        <form className='form' onSubmit={onSubmit}>   
          
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input style={{backgroundColor:'black', color:'white'}} className='btn' type="submit" value="Save" name="" id="" />     
            
        </form>
    )
}

export default CreateList
