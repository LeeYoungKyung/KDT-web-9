import React, { useState } from "react";

interface Props {
  name: string;
}

interface Data {
  name: string;
  age: number;
}

//컴포넌트 제작 방법2

const Types: React.FC<Props> = props => {
  const [count, setCount] = useState<Data | null>();
  return <>hello{props.name}</>;
};
export default Types;

//컴포넌트 제작 방법1

// export default function Types({ name }: Props) {
//   return (
//     <>
//       <h2>Hello{name}</h2>
//     </>
//   );
// }
//더 많이 씀
