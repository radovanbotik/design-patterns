import "./App.css";
import { printProps } from "./components/PrintProps";
import { UserInfo } from "./components/UserInfo";
import { withUser } from "./components/withUser";
import { withUser2 } from "./components/withUser2";
import { withEditabledUser } from "./components/withEditabledUser";
import { UserInfoForm } from "./components/UserInfoForm";
import Form from "./components/Form";
import ResourceForm from "./components/ResourceForm";

//userinfowrapped is the component that we are returning from
//printprop function
const UserInfoWrapped = printProps(UserInfo);
const WithUserLoader = withUser(UserInfo, 2);
const UserLoader = withUser2(UserInfo);
// const EditableUser = withEditabledUser(UserInfoForm, 3);

function App() {
  return (
    <>
      {/* <WithUserLoader prop1={"prop1"}></WithUserLoader> */}
      {/* <UserLoader url={"https://reqres.in/api/users/"} userId={5} /> */}
      {/* <EditableUser /> */}
      {/* <UserInfoForm /> */}
      <Form />
      <ResourceForm />
    </>
  );
}

export default App;
