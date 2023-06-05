

function App() {
  return  <>
    <h1>Calculadora</h1>
    <div className="calc">
       <div className="result">10</div>
       
       <div className="num">
         <button id="c">C</button>
         <button id="dividir">/</button>
         <button id="mult">*</button>
         <button id="sub">-</button>
         <button>7</button>
         <button>8</button>
         <button>9</button>
         <button id="somar">+</button>
         <button>4</button>
         <button>5</button>
         <button>6</button>
         <button>1</button>
         <button>2</button>
         <button>3</button>
         <button id="r">=</button>
         <button>0</button>
      </div>
    </div>
    <div className="historico">Resultado e historico<hr/></div>
  </>
}

export default App;
