import { useState } from "react";

function EmojiPicker(): JSX.Element {
  const makeList = (prevEmoji : string) : JSX.Element => {
        return (
            <li>
            <ul>{prevEmoji}</ul>
            </li>
            )
      }
  const [state, setState] = useState("?");
  const [prevEmoji, addToEmojiHistory] = useState<string[]>([]);

  prevEmoji.map(makeList)

  const makeEmojiHappy = () => {
    addToEmojiHistory((prevEmoji) => [...prevEmoji, state]);
    setState("😀");
  };

  const makeEmojiSad = () => {
    addToEmojiHistory((prevEmoji) => [...prevEmoji, state]);
    setState("😥");
  };

  const makeEmojiContrarian = () => {
    addToEmojiHistory((prevEmoji) => [...prevEmoji, state]);
    setState("🙋");
  };

  return (
    <>
      <h1>Hello</h1>
      <p>importnat</p>
      <p>current emoji: {state}</p>
      <p>previous emoji: {prevEmoji.slice(-5)}</p>
      <button onClick={makeEmojiSad}>😥</button>
      <button onClick={makeEmojiHappy}>😀</button>
      <button onClick={makeEmojiContrarian}>🙋</button>
    </>
  );
}

export default EmojiPicker;
