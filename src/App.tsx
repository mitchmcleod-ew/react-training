import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router'

function App() {

  return <div className='w-screen h-screen'>
    <RouterProvider router={appRouter} />
  </div>
}

export default App
