import { RouterProvider } from 'react-router-dom'
import routes from '@/router/index'
import '@/styles/index.less'
import { Provider } from 'react-redux'
import { store } from '@/store'
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  )
}

export default App
