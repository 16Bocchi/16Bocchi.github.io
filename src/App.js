import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Projects } from "./components/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Contact } from "./components/Contact";
import { BottomBar } from "./components/BottomBar";

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Landing />
            <section>
                <About />
            </section>
            <section>
                <Projects />
            </section>
            <section>
                <Contact />
            </section>
            <section>
                <BottomBar id='bottom-bar' />
            </section>
        </div>
    );
}

export default App;
