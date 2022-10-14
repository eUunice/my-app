import "./App.css";
import { useEffect, useState, React, useReducer } from "react";
// import  UnitControl  from "./components/UnitControl";
import CardFooter from "./components/CardFooter";
// import UnitConverter from './components/UnitConverter';
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  useNavigate,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import Home from "./components/home";
import Parent from "./components/Parent";
import About from "./components/About";
import Loading from "./components/Loading";
import Children from "./layouts/Children";
import Child1 from "./layouts/Child1";
import Child2 from "./layouts/Child2";

function App() {
  // let nav = useNavigate();

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/layouts/Children",
      element: <Children />,
      children: [
        {
          path: "/layouts/Children/Child1",
          element: <Child1 />,
        },
        {
          path: ":Child2",
          element: <Child2 />,
        },
      ],
    },
    {
      path: "/Parent",
      element: <Parent />,
    },
    {
      path: "/About",
      element: <About />,
    },
  ]);

  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/parent">Parent </Link>
      <Link to="/About">About </Link>
      <Link to="/layouts/Children">Children </Link>

      {element}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/About" element={<About />} />
      </Routes> */}
    </>
  );
}

// function App() {
//   // 定義事件處理器
//   const [inputValue, setInputValue] = useState(0)
//   // console.log(inputValue);

//   const handleInputChange = (e) => {
//     // 取輸入的值

//     const { value } = e.target;
//     console.log(value);
//     // 將值放入state
//     setInputValue(value);
//   };

//   return (
//     <div className="container">
//       <div className="card-header">Network Speed Converter</div>
//       <div className="card-body">
//       <UnitControl />
//       <UnitConverter inputValue={inputValue} handleInputChange={handleInputChange}></UnitConverter></div>

//       {/* 想要傳入Cardfooer的資料 透過key=value方式傳入 */}
//       <CardFooter inputValue={inputValue} />

//     </div>
//   );
// }

export default App;
