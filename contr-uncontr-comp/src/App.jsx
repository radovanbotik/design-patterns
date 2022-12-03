import { ConForm } from "./components/ConForm";
import { UncForm } from "./components/UncForm";
import { ConModal } from "./components/ConModal";
import { useState } from "react";
import { UnconOnboardingFlows } from "./components/UnconOnboardingFlows";
import { ConOnboardingFlows } from "./components/ConOnboardingFlows";

const StepOne = ({ goToNext }) => (
  <>
    <button onClick={() => goToNext({ name: "user1" })}>Next Step</button>
    <h1>step 1</h1>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <button onClick={() => goToNext({ age: 51 })}>Next Step</button>
    <h2>step 2</h2>
  </>
);
const StepTwoAndHalf = ({ goToNext }) => (
  <>
    <p>cg you qualify for discount!</p>
    <button onClick={() => goToNext({})}>Next Step</button>
    <h2>step 2</h2>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <button onClick={() => goToNext({ shipping: "free" })}>Next Step</button>
    <h3>step 3</h3>
  </>
);

function App() {
  // const [modalState, setModalState] = useState(false);

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      {/* <UncForm />; */}
      {/* <ConForm /> */}
      {/* <button onClick={() => setModalState(prev => !prev)}>
        {modalState ? "hide modal" : "show modal"}
      </button>
      <ConModal
        modalState={modalState}
        onRequestClose={() => setModalState(false)}
      >
        <Heading />
      </ConModal> */}
      {/* <UnconOnboardingFlows onFinish={data => console.log(data)}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnconOnboardingFlows> */}

      <ConOnboardingFlows
        currentIndex={currentIndex}
        onNext={onNext}
        onFinish={data => console.log(data)}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 50 && <StepTwoAndHalf />}
        <StepThree />
      </ConOnboardingFlows>
    </>
  );
}

export default App;

const Heading = () => {
  return <h3>this is a popup</h3>;
};
