import { useContext } from "react";
import CompoB from "./CompoB";
import UserContext from "../Utils/UserContext";

const CompoA = () => {
  const user = {
    // This is our local store
    name: "ErGovind",
    skill: "Software-Developer",
    email: "ergovind@gamil.com",
  };

  // Now calling our global store using useContext() hook

  const myUser = useContext(UserContext);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="m-5 px-2 py-3 shadow-md rounded-md">
        <h1>CompoA (Profile) From Context Api (useContext)</h1>
        <p>Name -: {myUser.name}</p>
        <p>Profession -: {myUser.profession}</p>
        <p>Email -: {myUser.email}</p>
      </div>
      <CompoB data={user} />
    </div>
  );
};

export default CompoA;
