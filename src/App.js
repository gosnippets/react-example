// import HomeComponent from "./components/HomeComponent";
// import BankInput from "./bank/BankInput";
// import Calculator from "./components/Calculator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetDerivedStateFromProps from "./components/GetDerivedStateFromProps";
import ApiAxiosExample from "./examples/apiExample/ApiAxiosExample";
import ApiFetchExample from "./examples/apiExample/ApiFetchExample";
import About from "./examples/routerExample/About";
import Blog from "./examples/routerExample/Blog";
import BlogDetails from "./examples/routerExample/BlogDetails";
import Home from "./examples/routerExample/Home";
import NoPage from "./examples/routerExample/NoPage";
import PageLayout from "./examples/routerExample/PageLayout";
// import LifeCycleMethodExample from "./components/LifeCycleMethodExample";
// import User from "./components/User";

function App() {
  return (
    // <HomeComponent/>
    // <User/>
    // <BankInput/>
    // <Calculator/>
    // <LifeCycleMethodExample/>
    // <GetDerivedStateFromProps/>
    // <ApiFetchExample/>
    // <ApiAxiosExample/>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id/:username" element={<BlogDetails />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// fetch, axios

// Home: All users details use API: https://jsonplaceholder.typicode.com/users
// About: Static content
// Blog: List of Post use API: https://jsonplaceholder.typicode.com/posts
// Blog Details: Post details: https://jsonplaceholder.typicode.com/posts/1