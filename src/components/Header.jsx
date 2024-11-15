import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="logo" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Scrimba Code-Along DJS07</h4>
        </header>
    )
}
