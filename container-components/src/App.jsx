import { CurrentUserLoader } from "./components/CurrentUserLoader";
import { UserInfo } from "./components/UserInfo";
import { UserLoader } from "./components/UserLoader";
import { ResourceLoader } from "./components/ResourceLoader";
import { DataSource } from "./components/DataSource";
import axios from "axios";

function App() {
  const fetchData = url => async () => {
    const resp = await axios.get(url);
    return resp.data;
  };

  const getLocalStorageData = key => () => {
    return localStorage.getItem(key);
  };

  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      {/* <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader> */}
      {/* <ResourceLoader
        resourceUrl={"https://reqres.in/api/users/3"}
        resourceName={"userr"}
      >
        <UserInfo />
      </ResourceLoader> */}
      <DataSource
        resourceName={"user"}
        getDataFn={fetchData("https://reqres.in/api/users/3")}
      >
        <UserInfo />
      </DataSource>
      {/* <DataSource
        getDataFn={getLocalStorageData("item1")}
        resourceName={"item1"}
      >
        <Text />
      </DataSource> */}
    </>
  );
}
// const Text = ({ item1 }) => {
//   return <h1>{item1}</h1>;
// };
export default App;
