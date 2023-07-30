import { RouterProvider } from 'react-router-dom'
import '@/styles/index.less'
import { Provider } from 'react-redux'
import { store } from '@/store'
import router from '@/router/index'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
