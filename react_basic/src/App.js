// import SignupForm from "./10hook/SignupForm";

import { Outlet } from "react-router-dom";
import Header from "./12Router/Header";

// import StylePrac4 from "./11Style/StylePrac4";
// import StyledComponent from "./11Style/StyledComponent";

// import SassComponent from "./11Style/SassComponent";

// import Style from "./11Style/Style";

function App() {
  return (
    <>
      {/* <StylePrac4 /> */}
      {/* <SignupForm/> */}
      {/* <Style/> */}
      {/* <SassComponent/> */}
      {/* <StyledComponent /> */}
      {/*       
      <Router /> */}
      <Header />
      <Outlet />
    </>
  );
}

export default App;
