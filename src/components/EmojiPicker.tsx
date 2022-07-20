import {useState} from "react"

function EmojiPicker(): JSX.Element {
    const [state, setState] = useState('?')
    const [prevEmoji, setPrevEmoji] = useState('n/a')

    const makeEmojiHappy = () => {
        setPrevEmoji(state)
        setState('😀')
    }

    const makeEmojiSad = () => {
        setPrevEmoji(state)
        setState('😥')
    }

    const makeEmojiContrarian = () => {
        setPrevEmoji(state)
        setState('🙋')
    }

    return (
        <>
            <h1>Hello</h1>
            <p>importnat</p>
            <p>current emoji: {state}</p>
            <p>previous emoji: {prevEmoji}</p>
            <button onClick={makeEmojiSad}>😥</button>
            <button onClick={makeEmojiHappy}>😀</button>
            <button onClick={makeEmojiContrarian}>🙋</button>
        </>
    );
}

export default  EmojiPicker