import { UseSelector, useDispatch, useSelector } from "react-redux";
import { loginAction } from "./store";

export default function login() {
  const login = useSelector(state => state.login.isLogin);
  return (
    <>
      {login ? (
        <>
          <div>로그인하였습니다</div>
          <button onClick={() => dispatch(loginAction.logout())}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <div>로그아웃하였습니다</div>
          <button onClick={() => dispatch(loginAction.login())}>로그인</button>
        </>
      )}
    </>
  );
}
