import "./styles.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  context: {
    count: 0
  },
  states: {
    inactive: {
      on: { TOGGLE: "active" }
    },
    active: {
      entry: "tambahCount",
      on: { TOGGLE: "inactive" }
      invoke : {
        src : 

      }
    }
  }
},
{
  actions : {
    "tambahCount" :  assign(
      (context,event)=>({count: context.count + 1, naon:'wakwaw'})
      )
  }
}
);

function App() {
  const [state, send] = useMachine(toggleMachine, {
      services:{
        fetchData : async ()=> ['habil','ganteng','pisan']}
    });
  const active = state.matches("active");
  const { count } = state.context;
  const { naon } = state.context;

  return (
    
    <div className="App">
      <p> naon : {naon} </p>
      <h1>XState React Template</h1>
      <h2>Fork this template!</h2>
      <button onClick={() => send("TOGGLE")}>
        Click me ({active ? "✅" : "❌"})
      </button>{" "}
      <code>
        Toggled <strong>{count}</strong> times
      </code>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
