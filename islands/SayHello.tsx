/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

function SayHello() {
  const [message, setMessage] = useState("hello world");

  return (
    <div>
      <h1>{message}</h1>

      <button onClick={() => setMessage("Codigo actualizado!!!!")}>
        Click me
      </button>
    </div>
  );
}

export default SayHello;
