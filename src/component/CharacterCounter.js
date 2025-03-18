import react from "react";
import { useState, useEffect, useMemo, useCallback, useReducer } from "react";
import useCharacterCount from "./useCharacterCount";

// const CharacterLimit = 100;

// const reducer = (text, action) => {
//   if (action.type === "INPUT" && action.text.length <= CharacterLimit) {
//     return action.text;
//   } else return text;
// };

const CharacterCounter = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // const [text, dispatch] = useReducer(reducer, "");

  // useEffect(() => {
  //   setCount(text.length);
  // }, [text]);

  // const handleText = useCallback(
  //   (e) => {
  //     setText(e.target.value);
  //   },
  //   [setText]
  // );

  // const handleText = useCallback((e) => {
  //   dispatch({ type: "INPUT", text: e.target.value });
  // }, []);

  const { text, count, maxLimit, handleText, warning } = useCharacterCount();

  return (
    <div>
      <h2>Character Counter</h2>
      <textarea value={text} placeholder="type..." onChange={handleText} />
      <p>
        Character Counter: {count}/ {maxLimit}
        {warning && <p style={{ color: "red" }}> 90% limit </p>}
      </p>
    </div>
  );
};

export default CharacterCounter;
