import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/lab1/Register.tsx";
import Columns from "./pages/lab2/columns.tsx";






function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>
    
    
  
      <Routes>
        <Route path="/" element={<Columns></Columns>}></Route>
        {/* <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
        <Route path="/login" element={<Login></Login>}></Route> */}
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
