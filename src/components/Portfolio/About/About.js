import useInView from "react-cool-inview";

export function About() {
	const { observe, inView } = useInView({
		threshold: .2
	});
	
	return (
		<section id="about" className="portfolio__about">
			<div ref={observe} className={inView ? "about__container in-view" : "about__container"}>
				<div className="about__site">
					<h2>About This Site</h2>
					<p>I created this site using Vue.js and Vue CLI. The work items are generated from JSON files to make adding new projects&nbsp;easy.</p>
					<p>Most animations use CSS transitions, except for my otter pal, who was created with an SVG and&nbsp;Greensock.</p>
					<p>The font family is either Avenir Next Variable, if your browser supports variable fonts, or Open Sans, if it&nbsp;doesn’t.</p>
					<p>The site is responsive (of course!), and was built&nbsp;mobile-first. It was tested in IE11, Edge, Chrome, Safari, and Firefox, as well as on iPhone and&nbsp;iPad.</p>
					<p>Hosted by <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/">Netlify</a> from my Github repo (CD for the&nbsp;win!).</p>
				</div>
				<div className="about__me">
					<h2>About Me</h2>
					<p>I built my first website more than twenty years ago, and while I’ve also worked in web and print design, writing, and editing since then, HTML and CSS have always been my truest loves. (I’ve become rather fond of Vue.js, too.) I’m all about animation and creating delightful user interfaces with a focus on accessibility and good&nbsp;UX.</p>
					<p>I typically use Sass and BEM for projects, along with my own slightly modified version of <a target="_blank" rel="noopener noreferrer" href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">ITCSS</a> for larger projects. I have a lot of experience with vanilla JavaScript and jQuery as&nbsp;well.</p>
					<p>I am currently a Front-End Engineer at <a target="_blank" rel="noopener noreferrer" href="https://cliquestudios.com/">Clique Studios</a>. Previously I was a Senior Interactive Developer at <a target="_blank" rel="noopener noreferrer" href="https://www.elevatestudios.com">Elevate</a>. I was also a mentor for new front-end developers at Designation (now Flatiron School) UI/UX design bootcamp.</p>
					<p>When I’m not coding, I’m probably out running. You can find me on the lakefront path every summer as a group leader for the Chicago Area Running Association’s <a target="_blank" rel="noopener noreferrer" href="https://www.cararuns.info/smtp">Chicago Marathon training&nbsp;program</a>. In 2018 I ran my first (but not last)&nbsp;ultramarathon.</p><p>And yes, I really, really like both otters and spectacularly bad&nbsp;puns.</p>
				</div>
			</div>
		</section>
	);
}