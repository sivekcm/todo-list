import Item from "./Item"
import { ListGroup } from 'react-bootstrap'

const Items = ({items, toggleCompleted, togglePriority, onDelete}) => {
    return (
        <ListGroup style={{marginInline: '30%', marginTop:'60px', marginBottom: '30px'}}>
            {items.map((item) => (      
                <Item key={item.ItemID} togglePriority={togglePriority} toggleCompleted={toggleCompleted} item={item} onDelete={onDelete} ></Item>     
            ))}
        </ListGroup>
    )
}

export default Items
