import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Work } from "./components/Work/Work";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";

import "./assets/scss/main.scss";

function App() {
	return (
		<div>
			<Header />
			<Intro />
			<Work />
			<About />
			<Footer />
		</div>
	);
}

export default App;
