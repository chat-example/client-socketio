import { Link } from "react-router-dom";
import LoginForm from "../components/auth/loginForm.view";

const Login = () => {
  return  <LoginForm 
    extraContent={<Link to="/signup" className="text-[#37a0ef] mt-3 inline-block">회원가입</Link>}
  />
}

export default Login;
