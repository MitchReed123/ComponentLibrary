import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        img="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzgyNTV8MXwxfGFsbHwxfHx8fHx8Mnx8MTYyMzMzNDA1NA&ixlib=rb-1.2.1&q=80&w=1080"
        headerText="Mitchell Reed"
        subText="JR. Web Developer"
        info="works with a bunch of stuff"
        varient="contained"
        // secondary
        //font size
        size="medium"
        // rounded="rounded"
        cardtype="primary"
      />
    </div>
  );
}

export default App;
