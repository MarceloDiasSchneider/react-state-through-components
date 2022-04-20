import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [user, setuser] = useState("Marcelo");

  function updateUser(newuser) {
    setuser(newuser)
  }

  return (
    <main>
      <Header user={user} updateUser={updateUser} />
      <Body user={user} updateUser={updateUser}/>
    </main>
  );
}

export default App;
