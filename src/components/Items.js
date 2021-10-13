import Item from "./Item"

const Items = ({items, toggleCompleted, togglePriority, onDelete}) => {
    return (
        <div>
            {items.map((item) => (
                
                <Item key={item.ItemID} togglePriority={togglePriority} toggleCompleted={toggleCompleted} item={item} onDelete={onDelete} ></Item>
            
            ))}
        </div>
    )
}

export default Items
