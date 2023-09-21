
import { useState } from "react";

export default function ToggleFunc() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(!status); 
  };

  return (
    <div>
      <button onClick={handleToggle}>{status ? "사라져라" : "보여라"}</button>
      {status && <p>안녕하세요</p>}
    </div>
  );
}
