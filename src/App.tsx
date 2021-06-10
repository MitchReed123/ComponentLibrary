import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        //available props to pass:
        // img
        // headerText
        // subText
        // info
        // size
        // cardtype
        //font size
        size="large"
        //to test this delete the "" then re-type them(same for size prop ^)
        cardtype="primary"
      />
    </div>
  );
}

export default App;
