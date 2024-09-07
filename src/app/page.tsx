// import ObjectRender,{Primitive} from "./components/ObjectRender";

import ObjectRender from "./components/ObjectRender"

// import ListRender from "./components/ListRender"
// const name = "Bas" ;
// const age = 18 ;
// const alive = true;
// const App = () => {
//   return <div>
//     <ObjectRender/>
//     <Primitive />
//             Hello, {name }<br></br>
//             Old, {age}<br></br>
//             Are yoy Alive ?, {alive}
//             </div>;
//         };
        

// export default App;

function App() {
  const task = {
      title: "เบิกงบ",
      amount: 20,
  };
  // render
  return <ObjectRender title={task.title} />
}

export default App