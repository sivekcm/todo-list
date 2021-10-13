import List from './List.js'
const Lists = ({ lists, onDelete, onUpdate }) => {
    return (
        <div>
            {lists.map((list) => (
                
                    <List key={list.ListID} list={list} onUpdate={onUpdate} onDelete={onDelete}></List>
                
            ))}
        </div>
    )
}

export default Lists
