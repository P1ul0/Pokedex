import { BodyLogin } from "../../components/BodyLogin/index";
import { Header } from "../../components/Header";
import "./style.css"
export const Login = () => {
  return (
    <>
    <Header />
    <div className="corpo">
    <BodyLogin/>
    </div>
    
    </>
  );
};
