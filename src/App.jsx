import React, { Component, useState, useEffect } from 'react'
import logo from './assets/react.svg'
import axios from 'axios'

const App = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  async function getUsers() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center gap-y-6 h-screen'>
      <img
        src={logo}
        onClick={() => setCount(0)}
        className='w-40 cursor-pointer'
        alt='React logo'
      />
      <button
        type='button'
        onClick={() => setCount(count + 1)}
        className='block text-lg text-white bg-[#00d8fe] p-3 rounded-lg hover:bg-[#00b8d8]'
      >
        {/* Comment */}
        Count is: {count}
      </button>
      <ul>
        {users.map((user) => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  )
}

// NOTE: React Component
// export class App extends Component {
//   state = {
//     count: 0,
//   }

//   render() {
// return (
//   <div className='flex flex-col justify-center items-center gap-y-6 h-screen'>
//     <img
//       src={logo}
//       onClick={() => this.setState({ count: 0 })}
//       className='w-40 cursor-pointer'
//       alt='React logo'
//     />
//     <button
//       type='button'
//       onClick={() => this.setState({ count: this.state.count + 1 })}
//       className='block text-lg text-white bg-[#00d8fe] p-3 rounded-lg hover:bg-[#00b8d8]'
//     >
//       {/* Comment */}
//       Count is: {this.state.count}
//     </button>
//   </div>
// )
//   }
// }

export default App