import '@/styles/index.less'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { publicRoutes, routes } from '@/router/index'
import { createBrowserRouter } from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
function App() {

  const router = createBrowserRouter([...publicRoutes, ...routes])

  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} fallbackElement={<h1>Initial Load...</h1>}></RouterProvider>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  )
}

export default App
