import Item from "./Item"
import { ListGroup } from 'react-bootstrap'

const Items = ({items, toggleCompleted, togglePriority, onDelete}) => {
    function compare(a,b) {
        return (a.isHighPriority - b.isHighPriority);
        // false values first
        // return (x === y)? 0 : x? 1 : -1;
    }
    items.sort((a,b) => a.isHighPriority - b.isHighPriority)
    return (
        <ListGroup style={{marginInline: '30%', marginTop:'60px', marginBottom: '30px'}}>
            {items.map((item) => (
                
                <Item key={item.ItemID} togglePriority={togglePriority} toggleCompleted={toggleCompleted} item={item} onDelete={onDelete} ></Item>
            
            ))}
        </ListGroup>
    )
}

export default Items
