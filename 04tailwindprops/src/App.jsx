import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    username: "john doe",
    age: 23
  }

  let myArr = [1, 2, 3]
  return (
    <>
      <h2 className='bg-slate-800 uppercase text-white p-2 rounded'>tailwind test</h2>

      <Card username="john deo" someObj={myArr} Obj={myObj}  btntext = "click here"/>

      <Card username="maxx"  btntext = "visit here"/>

    </>
  )
}

export default App
