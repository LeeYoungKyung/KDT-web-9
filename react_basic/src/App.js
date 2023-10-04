// import { useState } from "react";
// import MyContext, {
//   LanguageProvider,
// } from "./13Form/14Context/store/lang-context";

import Prac from "./13Form/prac";

// import LanguageSelector from "./13Form/14Context/store/LangSelector";

function App() {
  // const [language, setLanguage] = useState("ko");
  return (
    <>
      <Prac />
      {/* <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider> */}
      {/* <MyContext.Provider
        value={{ language: language, setLanguage: setLanguage }} */}
      {/* > */}
      {/* <MyContext.Consumer>
          {value => {
            return (
              <div>
                <h2>현재 선택된 언어 : {value.language}</h2>
                <select
                  value={value.language}
                  onChange={e => value.setLanguage(e.target.value)}
                >
                  <option value="ko">한국어</option>
                  <option value="en">영어</option>
                  <option value="jp">일본어</option>
                </select>
              </div>
            );
          }}
        </MyContext.Consumer> */}

      {/* </MyContext.Provider> */}
    </>
  );
}

export default App;
