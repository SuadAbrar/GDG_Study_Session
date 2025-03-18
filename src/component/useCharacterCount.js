import { useEffect, useReducer, useState } from "react";

const CharacterLimit = 100;

const reducer = (text, action) => {
  if (action.type === "INPUT" && action.text.length <= CharacterLimit) {
    return action.text;
  } else return text;
};

const useCharacterCount = () => {
  const [text, dispatch] = useReducer(reducer, "");
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (text.length >= 90 && text.length <= CharacterLimit) setWarning(true);
    else setWarning(false);
  }, [text]);

  return {
    text,
    count: text.length,
    maxLimit: CharacterLimit,
    warning,
    setWarning,
    handleText: (e) => dispatch({ type: "INPUT", text: e.target.value }),
  };
};

export default useCharacterCount;
