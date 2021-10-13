import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Btn from './Btn';
import CreateItem from './CreateItem';
import Header from './Header';
import Items from './Items';
const ListContainer = () => {
    const { id } = useParams() //the listID path parameter
    const [items, setItems] = useState([]) //the items in the todo list
    const [query, setQuery] = useState(0) //for getting the item id within useEffect hook
    const [showCreateItem, setShowCreateItem] = useState(false) //for showing the create item form
    //gets the inital list of items in the todo list on page load
    useEffect(() => {
        const getItems = async () => {
          const itemsFromServer = await fetchItems()
          setItems(itemsFromServer)
        }
    
        getItems()
      }, [])

      //For updating the item when the state changes
      useEffect(() => {
        const putItems = async () => {
            console.log(items)
            const res = items.find(item => item.ItemID === query
            )
            await updateItem(res)
        }
        putItems()
      }, [items, query])

    //handles when an item is marked as completes
    const toggleCompleted = async (id) => {
        //https://stackoverflow.com/questions/880512/prevent-text-selection-after-double-click  
        //disables text highlighting on double click
            if(document.selection && document.selection.empty) {
                document.selection.empty();
            } else if(window.getSelection) {
                var sel = window.getSelection();
                sel.removeAllRanges();
            }
        //updates the IsCompleted property of the item    
        setItems(items.map((item) => 
            item.ItemID === id ? { ...item, IsCompleted: !item.IsCompleted } : item
        ))
        setQuery(id)
        
    }

    //handles when the "high priority" checkbox is checked
    const togglePriority = async (id) => {
        setItems(items.map((item) => 
            item.ItemID === id ? { ...item, IsHighPriority: !item.IsHighPriority } : item
        ))
        setQuery(id)
        
    }

    //updates item on server
    const updateItem = async (item) => {
        console.log(item)
        const res = await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list/" + id + "/item", {method: 'PUT', body:JSON.stringify(item), mode: 'cors', cache: 'no-cache', headers: { 'Content-Type': 'application/json'}})
    }
    
    //fetches items from server
    const fetchItems = async () => {
        const res = await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list/" + id + "/item", {method: 'GET', mode: 'cors', cache: 'no-cache', headers: { 'Content-Type': 'application/json'}})
        const data = await res.json()
        return data
    }

    //delets an item from the server
    const deleteItem = async (oldItem) => {
        console.log(oldItem)
        setItems(items.filter((item) => item.ItemID !== oldItem.ItemID))
        const res = await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list/" + id + "/item/" + oldItem.ItemID, {method: 'DELETE', mode: 'cors', cache: 'no-cache', headers: { 'Content-Type': 'application/json'}})
    }

    //creates an item on the server
    const createItem = async (newItem) => {
        await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list/" + id + "/item", {method: 'POST', body:JSON.stringify(newItem), mode: 'cors', cache: 'no-cache', headers: { 'Content-Type': 'application/json'}})
        setShowCreateItem(false)
        const data = await fetchItems()
        setItems(data)
    }

    return (
        <div>
            <Items togglePriority={togglePriority} toggleCompleted={toggleCompleted} onDelete={deleteItem} items={items}/>
            <Btn onCreateListClick={() => setShowCreateItem(!showCreateItem)} showCreate={showCreateItem}/>
            {showCreateItem && <CreateItem ItemID={id} onCreateItem={createItem}/>}
            
        </div>
    )
}

export default ListContainer
