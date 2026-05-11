import { useContext, useEffect } from "react";
import axios from "./components/util/axios.customize";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchAccount = async () => {
      setAppLoading(true);
      try {
        const res = await axios.get(`/v1/api/account`);
        if (res && !res.message) {
          setAuth({
            isAuthenticated: true,
            user: {
              email: res.email,
              name: res.name
            }
          });
        }
      } catch (error) {
        console.log("Reset token error hoặc chưa đăng nhập");
      }
      setAppLoading(false);
    };
    fetchAccount();
  }, []);

  return (
    <div>
      {appLoading === true ? (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;