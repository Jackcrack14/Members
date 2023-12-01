import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import DataList from './components/DataList'

function App() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMembers(data)
    })
  }, [])

  return (
    <>
      <div>
        <Header />
        <DataList members={members} />

        </div>
    </>
  )
}

export default App
