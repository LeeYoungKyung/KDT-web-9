

export default Event = () =>{

    const handleClick = ()=>{
        alert("클릭했습니다")
    }
    const handleClick2 = (str)=>{
        console.log(e)
        alert(str)
    }

    return(
        <>
        <button onClick={handleClick}>클릭</button>
        <button onClick={(event) => handleClick2(event,'2번클릭')}>클릭2</button>
    </>
    )
    
}
