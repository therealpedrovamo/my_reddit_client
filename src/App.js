import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'; //import elements to make the Routing possible.
import Home from './component/Home/Home.js';

const appRouter=createBrowserRouter(createRoutesFromElements(
  <Route index element={<Home />}></Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
