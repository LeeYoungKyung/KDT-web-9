import logo from './logo.svg';
import './App.css';

function App() {
    const flag = false;
    let txt = '';

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