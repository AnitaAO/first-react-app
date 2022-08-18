/*
Challenge: Create your own custom React component!
Call it "MainContent", and have it return a simple 
h1 element that says "I'm learning React!"

Afterwards, render it below the Navbar (which
you can do inside th ReactDom.render call below)
*/
const Navbar = () => (
    <nav class="navbar">
        <a href="/">Navbar</a>
        <a>
            <img src="" alt="Menu-icon" />
        </a>
    </nav>
)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
<div>
    <Navbar />
    <MainContent />
</div>, 
    document.getElementById("root")
)
