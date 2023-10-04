import React, { Children, createContext, useState } from "react";

//context 생성
//createComtext () : provider와 consumer 두개의 리액트 컴포넌트를 반환

const MyContext = createContext({
  language: "",
  abc: 0,
  setLanguage: () => {},
});

export function LanguageProvider() {
  const [language, setLanguage] = useState("jp");

  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {Children}
      {/* 자식요소로 묶어주는 부분 */}
    </MyContext.Provider>
  );
}
export default MyContext;
