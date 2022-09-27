import logo from './logo.svg';
import '../src/styles/App.css';
import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
// import "rc-steps/assets/iconfont.css";

function App() {
  return (
      <Steps current={1}>
  <Steps.Step title="first" />
  <Steps.Step title="second" />
  <Steps.Step title="third" />
</Steps>
  );
}

export default App;
