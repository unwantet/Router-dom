import { BrowserRouter,RouterProvider, createBrowserRouter  } from "react-router-dom";
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { MainLayout } from "./components/Layout/MainLayout";



function App() {
  const routes = createBrowserRouter([
    {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
    }
])
  return (
    <div className="container">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App;