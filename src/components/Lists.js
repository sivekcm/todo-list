import { ListGroup } from 'react-bootstrap'
import List from './List.js'
const Lists = ({ lists, onDelete, onUpdate }) => {
    return (
        <ListGroup style={{marginInline: '30%', marginTop:'60px', marginBottom: '30px'}}>
            {lists.map((list) => (
                
                    <List key={list.ListID} list={list} onUpdate={onUpdate} onDelete={onDelete}></List>
                
            ))}
        </ListGroup>
    )
}

export default Lists
