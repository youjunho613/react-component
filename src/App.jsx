import Button from "component/Button/Button";
import Input from "component/Input/Input";
import Modal from "component/Modal";
import Select from "component/Select/Select";
import { StTitle } from "component/Common/commonStComponents";

function App() {
  return (
    <>
      <StTitle>button</StTitle>
      <Button />
      <StTitle>input</StTitle>
      <Input />
      <StTitle>modal</StTitle>
      <Modal />
      <StTitle>select</StTitle>
      <Select />
    </>
  );
}

export default App;
