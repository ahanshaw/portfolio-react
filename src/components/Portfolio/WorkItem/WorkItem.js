import {Link} from 'react-router-dom';

import useInView from "react-cool-inview";

export function WorkItem({ item }) {
	const { observe, inView } = useInView({
		threshold: .5
	});

    return (
		<div className="portfolio__work__item">
			<div ref={observe} className={inView ? "work__item__container in-view" : "work__item__container"}>
				<div className="work__item__copy">
					<h2>{item.title}</h2>
					<p>{item.date}</p>
					<p>Platform: {item.platform}</p>
					<p>Role: {item.role}</p>
					<p>{item.description}</p>
					<Link to={`/admin/edit/${item.id}`}>Edit Item</Link>
				</div>
				<div className="work__item__image">
					<img src={`/images/${item.title.toLowerCase().replace(/\s/g, '-')}.jpg`} alt="{item.title} homepage" />
				</div>
			</div>
		</div>
    );
}
