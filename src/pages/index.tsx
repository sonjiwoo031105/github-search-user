import { useState } from 'react'
import './App.css'

async function getSearchedUsers(word: string) {
  const response = await fetch(`https://api.github.com/search/users?q=${word}`);
  const jsonData = await response.json();
  console.log(jsonData);

  return jsonData;
}

function App() {
  

  return (
    <div></div>
  )
}

export default App
