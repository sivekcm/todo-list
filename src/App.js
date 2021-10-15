import { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Btn from './components/Btn.js';
import Lists from './components/Lists.js';
import CreateList from './components/CreateList.js';
import List from './components/List.js';
import Items from './components/Items.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useParams } from "react-router-dom";
import ListContainer from './components/ListContainer.js';


function App() {
  const [showCreateList, setShowCreateList] = useState(false) //for showing the create list form
  const [list, setList] = useState([]) //for rendering the lists
  //gets the initial list from server on component mount
  useEffect(() => {
    const getLists = async () => {
      const listsFromServer = await fetchLists()
      console.log(listsFromServer)
      console.log(JSON.parse(listsFromServer.body))
      setList(JSON.parse(listsFromServer.body))
    }

    getLists()
  }, [])

  //fetches lists from server
  const fetchLists = async () => {
    const res = await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list", {method: 'GET', mode: 'cors', cache: 'no-cache', headers: { 'Content-Type': 'application/json'}})
    const data = await res.json()
    //console.log(data)
    return data
  }

  //delets a list from the server
  const deleteListFunc = async (ListID) => {
    setList(list.filter((list) => list.ListID !== ListID ))
    alert("Are you sure you want to delete?")
    await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list/" + ListID, {method: 'DELETE', mode: 'cors', cache: 'no-cache', headers: { 'Content-Type': 'application/json'}})
   
  }

  //creates a list on the server
  const createList = async (list) => {
    await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list/", {method: 'POST', mode: 'cors', cache: 'no-cache', body: JSON.stringify(list), headers: { 'Content-Type': 'application/json'}})
    const newLists = await fetchLists()
    setList(JSON.parse(newLists.body))
    setShowCreateList(false)
  }

  //updates list on the server
  const updateList = async (newList) => {
    await fetch("https://trr97bv1x0.execute-api.us-east-1.amazonaws.com/Prod/list/", {method: 'PUT', mode: 'cors', cache: 'no-cache', body: JSON.stringify(newList), headers: { 'Content-Type': 'application/json'}})
  }

  return (
    <div className="App">
      <Router>
        <Route path='/' exact render={(props) => (
          <>
            <Header title='Todo Lists'></Header>
            <Lists lists={list} onUpdate={updateList} onDelete={deleteListFunc}></Lists>
    
                {showCreateList && <CreateList onCreate={createList}/>}
              <Btn showCreate={showCreateList} onCreateListClick={() => setShowCreateList(!showCreateList) }></Btn>
  
          </>
        )} />     
        <Route path="/list/:id" component={ListContainer}/>
      </Router>
    </div>
  );
}

export default App;
