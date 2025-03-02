import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    axios.get('/api/jokes').then((response) => {

      setJokes(response.data)
    }).catch((error) => {
      console.log(error);

    })

  })

  // useEffect(() => {
  // axios.get('/api/jokes')
  // .than((response) => {
  // setJokes(response.data)
  // }
  // )
  // .catch((error) => {
  // console.log(error);

  // })           
  // })

  return (
    <>
      <h1>Chai and full stack || chai our  code  </h1>

      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dimege&psig=AOvVaw3FgcyiKHYfwbOVsBtjzouI&ust=1722568791938000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj4kfzq0ocDFQAAAAAdAAAAABAX" alt="" />

      <p>JOKES: {jokes.length}</p>

      <div> {
        jokes.map(function (joke, index){
    return    <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
})
      }

      

      </div>
<img src="https://th.bing.com/th/id/OIP.Eh5uDz22sFi39YuULuexsQAAAA?w=474&h=266&rs=1&pid=ImgDetMain" alt="" />


      {/* { */}
      {/* // jokes.map(function (joke, index) { */}
      {/* // return <div key={joke.id}> */}
      {/* <h3>{joke.title}</h3> */}
      {/* <p>{joke.content}</p> */}
      {/* </div> */}
      {/* // }) */}
      {/* // } */}


    </>
  )
}

export default App;

