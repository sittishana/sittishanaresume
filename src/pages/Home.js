import React, { useState } from "react";

function Home() {
  const [displayName, setDisplayName] = useState(false);
  const [getName, setGetName] = useState("");

  const onChangeName = async (e) => {
    setGetName(e.target.value);
  };
  const submitName = async () => {
    setDisplayName(!displayName);
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h1>Welcome to React Js</h1>
      <div>
        <input
          style={{ padding: "5px" }}
          id="nameInput"
          onChange={(e) => {
            onChangeName(e);
          }}
        ></input>
      </div>
      <div>
        <h2>{getName ? `Hi ${getName}` : ""}</h2>
      </div>
    </div>
  );
}

export default Home;
