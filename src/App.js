import './App.css';
export default App;


function App() {
  return (
      <div>
        <Hedin title ='t1' description ='d1'/>
          <Hedin title ='t2' description ='d2'/>

      </div>
  );
}
function Hedin (props) {
    return(
        <div>
            <h1> {props.title} </h1>
            <p> {props.description} </p>
        </div>

    )
}

