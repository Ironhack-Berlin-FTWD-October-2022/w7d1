import './App.css';

function App() {
  // JSX - JavaScript Extended

  // You can assign HTML to variables and render variables with {}
  const hello = <h1>Hello students!</h1>

  // You can embed any valid JavaScript expression
  // const name = "Micaela"
  // const hello = <h1>Hello {name.toUpperCase()}</h1>

  // You can also return JSX from functions
  // const hello = () => <h1>Hello students!</h1>

  // All elements must be wrapped with one root element
  // This is called a react fragment: <></>
  // const hello = (
  //   <>
  //     <h1>Hello Jacob</h1>
  //     <h1>Hello Ines</h1>
  //     <h1>Hello Robert</h1>
  //   </>
  // )

  // You can use inline styling in React
  // Some property names in React are different:
  // background-color => backgroundColor
  // class => className
  // for => htmlFor
  // onclick => onClick
  // const style = { color: "purple", backgroundColor: "yellow" }
  // const hello = (
  //   <>
  //     <h1 style={style}>Hello Frances!</h1>
  //     <h1 style={{ color: "orange", backgroundColor: "blue" }}>Hello GaYeong!</h1>
  //   </>
  // )

  return (
    <div className="App">
      {hello}

      {/* {hello()} */}
    </div>
  );
}

export default App;
