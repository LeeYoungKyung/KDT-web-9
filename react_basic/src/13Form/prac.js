import { useContext, useState } from "react";
import MyContext from "./14Context/store/lang-context";

export default function Prac() {
  const value = useContext(MyContext);
  const [selectedLanguage, setSelectedLanguage] = useState(value.language);
  const [selectedMode, setSelectedMode] = useState(value.mode);

  const handleLanguageChange = e => {
    setSelectedLanguage(e.target.value);
    value.setLanguage(e.target.value);
  };

  const handleModeChange = e => {
    setSelectedMode(e.target.value);
    value.setMode(e.target.value);
  };

  return (
    <div>
      <h2>현재 선택된 언어 : {selectedLanguage}</h2>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="ko">한국어</option>
        <option value="en">영어</option>
      </select>

      <h2>현재 선택된 모드 : {selectedMode}</h2>
      <select value={selectedMode} onChange={handleModeChange}>
        <option value="light">라이트 모드</option>
        <option value="dark">다크 모드</option>
      </select>
    </div>
  );
}
