import '@/styles/index.less'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import router from '@/router/index'
function App() {
  console.log('app', store.getState().user)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<h1>Initial Load...</h1>}></RouterProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
