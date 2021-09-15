import { Header } from "./Header/Header";
import { Intro } from "./Intro/Intro";
import { Work } from "./Work/Work";
import { About } from "./About/About";
import { Footer } from "./Footer/Footer";

export function Portfolio() {
	return (
		<div className="portfolio">
			<Header />
			<Intro />
			<Work />
			<About />
			<Footer />
		</div>
	);
}