import {useState} from "react"

function EmojiPicker(): JSX.Element {
    const [state, setState] = useState('?')
    const [prevEmoji, addToEmojiHistory] = useState<string[]>([])

    const makeEmojiHappy = () => {
        addToEmojiHistory(prevEmoji => [...prevEmoji, state])
        setState('😀')
    }

    const makeEmojiSad = () => {
        addToEmojiHistory(prevEmoji => [...prevEmoji, state])
        setState('😥')
    }

    const makeEmojiContrarian = () => {
        addToEmojiHistory(prevEmoji => [...prevEmoji, state])
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