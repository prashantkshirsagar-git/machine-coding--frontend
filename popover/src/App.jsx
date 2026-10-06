import "./App.css";
import Popover from "./popover/popover";

const App = () => {
  return (
    <div>
      <Popover>
        <Popover.Action>Click Me</Popover.Action>
        <Popover.Content>Hello There!!!</Popover.Content>
      </Popover>
      Hello There!!! 2
    </div>
  );
};

export default App;
