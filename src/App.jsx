import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import DataList from './components/DataList'
import Pagination from './components/Pagination'

function App() {
  const [members, setMembers] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [query, setQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMembers(data)
    })
  }, [])

  const changePageNo = (number) => setCurrentPage(number)
  const lastIndex = currentPage * dataPerPage
  const firstIndex = lastIndex - dataPerPage
  const queryData = members.filter((ele) => ele.name.includes(query) || ele.email.includes(query) || ele.role.includes(query))
  const currentData = queryData.slice(firstIndex, lastIndex)
  const handleQuery = (query) => setQuery(query)
  const handleDelete = (id) => setMembers(members.filter((ele) => ele.id !== id  ))
  const handleDeleteMany = () => {
     const updatedMembers = members.filter(item => !selectedIds.includes(item.id) )
     setMembers(updatedMembers)
  }
  


  return (
    <>
      <div className='container'>
        <Header query={query} handleQuery={handleQuery} selectedIds={selectedIds} handleDeleteMany={handleDeleteMany} />
        <DataList members={currentData} setMembers={setMembers} handleDelete={handleDelete} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
        <Pagination changePageNo={changePageNo} dataPerPage={dataPerPage} data={queryData.length} currentPage={currentPage} />

        </div>
    </>
  )
}

export default App
