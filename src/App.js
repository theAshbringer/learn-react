import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("ТЕКСТ");

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
