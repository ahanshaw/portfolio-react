import React, { useState, useEffect } from "react";
import { database } from '../../../services/firebase';
import { WorkItem } from "../WorkItem/WorkItem";

export function Work() {
	const [work, setWork] = useState([]);

	useEffect(() => {
		database.ref('work').once('value', function (snapshot) {
			let workArr = [];
			snapshot.forEach(work => {
				workArr.push(work.val());
			});
			setWork(workArr);
		});
	}, []);

	return (
		<section id="work" className="portfolio__work">
			{work.map((item, index) => {
				return (
					<WorkItem key={index} item={item} />
				)
			})}
		</section>
	);
}