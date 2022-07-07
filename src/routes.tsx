import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPosts from "./components/Posts/AddPost";
import Details from "./components/Posts/PostDetail";
import PostList from "./components/Posts/PostList";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Details/:id' element={<Details />} />
        <Route path='/Create' element={<AddPosts />} />
        <Route path='/' element={<PostList />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
