import React, {useState} from "react";
import "./App.css";

const App = ()=>{
    const [num, setNum]= useState(0);

    
    
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={num}/>
                </form>
                <div className="keypad">
                    <button className="highlight" id="clear">Clear</button>
                    <button className="highlight"id="backspace">c</button>
                    <button name="/">&divide;</button>
                    <button name="7"onClick={inputNum} value={7}>7</button>
                    <button name="8"onClick={inputNum} value={8}>8</button>
                    <button name="9"onClick={inputNum} value={9}>9</button>
                    <button name="*">&times;</button>
                    <button name="4"onClick={inputNum} value={4}>4</button>
                    <button name="5"onClick={inputNum} value={5}>5</button>
                    <button name="6"onClick={inputNum}value={6}>6</button>
                    <button name="-">&ndash;</button>
                    <button name="1"onClick={inputNum} value={1}>1</button>
                    <button name="2"onClick={inputNum} value={2}>2</button>
                    <button name="3"onClick={inputNum} value={3}>3</button>
                    <button name="+">+</button>
                    <button name="0"onClick={inputNum} value={0}>0</button>
                    <button name="."onClick={inputNum} value={"."}>.</button>
                    <button className="highlight"  id="result">=</button>

                </div>
            </div>
        </>
    );
}
export default App;

{/*
    const [result, setResult] = useState("");
    const [oldNum, setOldNum] = useState("");
    const [operator, setOperator] = useState("");

    const handleClick = (e)=>{
        setResult(result.concat(e.target.name))  //concat:é usada para concatenar (ou combinar) dois ou mais arrays ou strings em um único array ou string.
    }
    

    const clear =() => {
        setResult('')

    }
    const backspace = () => {
        setResult(result.slice(0, result.length -1))
    }

    

    const calculate = () =>{
        console.log("calculloii")
        console.log(oldNum);
        console.log(result);
        console.log(operator);
    }
    
    const handleOperator = (e)=>{
        var operatorInput = e.target.value;

        setOperator(operatorInput);
        setOldNum(result);
        setResult(0)
        
    }
    const calculete = () => {
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult('Error')
        }
    }*/}