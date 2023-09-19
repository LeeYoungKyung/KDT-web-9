import logo from './logo.svg';
import './App.css';

function App() {
    const flag = false;
    let txt = '';
    const name = '로이';
    const animal = '강아지';
    const title = 'Hello World';

    if (flag) {
        txt = 'true 입니다';
    } else {
        txt = 'false 입니다';
    }
    const styles = {
        backgroundColor: 'red',
    };

    //map함수
    const lists = ['k', 'd', 't', 'w', 'e', 'b'];
    //filter함수
    const animals = ['dog', 'cat', 'rabbit'];
    const newAnimals = animals.filter((value) => {
        return value.includes('a');
    });
    console.log(newAnimals);
    //단축평가
    //&&연산자
    const result = true && 'Hello';
    console.log(result);
    //||연산자
    const defaultValue = 1000;
    const price = undefined;
    const dbPrice = price || defaultValue;
    console.log(dbPrice);

    //실습
    const users = [
        { id: 1, name: 'John', age: 25, vip: true },
        { id: 2, name: 'Jane', age: 19, vip: false },
        { id: 3, name: 'Alice', age: 30, vip: true },
        { id: 4, name: 'Bob', age: 18, vip: false },
        { id: 5, name: 'Charlie', age: 35, vip: true },
    ];
    const vipUsers = users.filter((value) => value.vip === true);
    console.log(vipUsers);

    const isLogin = true;

    return (
        <>
        {/* 실습1번 */}
            <div>
                이것은 div입니다
                <h3>이것은 div안에있는 h3태그 입니다</h3>
            </div>
            <div>{3 + 5 == 5 ? <p>정답입니다</p> : <p>오답입니다</p>}</div> 
            {/* 실습 2번 */}
            <h2>
                제 반려동물의 이름은 <u>{name}</u>입니다.
                <br />
                <u>{name}</u>는 {animal}입니다.
            </h2>
{/* 실습 3번 */}
            <div className="text">{title}</div>
            <div className="input">
                아이디: <input />
                <br />
                <br />
                비밀번호: <input />
            </div> 

            {/* 실습 4번 */}
            <div className="all">
                <div className="red"></div>
                <div className="orange"></div>
                <div className="yellow"></div>
                <div className="green"></div>
                <div className="blue"></div>
                <div className="navy"></div>
                <div className="purple"></div>
            </div>
            <h1 style={{ backgroundColor: 'black', color: 'white' }}>Hello React</h1>
            {isLogin && (
                <>
                    <div style={styles}>리액트 시작</div>
                    <input />
                    <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
                    <div className="text">{txt}</div>
                    {lists.map((value, index) => {
                        return (
                            <div key={index}>
                                <p>Hello {value}</p>
                            </div>
                        );
                    })}
                    {vipUsers.map((value) => (
                        <div key={value.id}>{value.name}</div>
                    ))}
                </>
            )}
        </>
    );
}

export default App;