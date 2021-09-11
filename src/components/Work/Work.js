import React, { useState, useEffect } from "react";

import database from '../../services/firebase';

export function Work() {
	const [work, setWork] = useState([]);
	const [agencyWork, setAgencyWork] = useState([]);
	const [probonoWork, setProbonoWork] = useState([]);

	useEffect(() => {
		database.ref('work').once('value', function (snapshot) {
			let workArr = [];
			snapshot.forEach(work => {
				workArr.push(work.val());
			});
			setWork(workArr);
		});
	}, []);

	useEffect(() => {
		let agency = work.filter(function(item) {
			return item.type === "agency";
		});
		setAgencyWork(agency);

		let proBono = work.filter(function(item) {
			return item.type === "pro bono";
		});
		setProbonoWork(proBono);
	}, [work]);

	/*
	"id": 1,
	"title": "Strawdog Theatre",
	"url": "https://www.strawdog.org/",
	"platform": "Craft CMS",
	"image1": "/images/strawdog.jpg",
	"image1alt": "Strawdog Theatre Company homepage",
	"role": "Design, Development",
	"date": "2019",
	"description": "<p>In this project, I redesigned a theater company&#8217;s previous static site, reorganizing and adding content to enhance the user experience. I also developed it in Craft CMS for easy updating. The homepage is animated on first visit to draw the user in and hint at the dynamic nature of the company&#8217;s&nbsp;work.</p>",
	"type": "pro bono"
	*/

	return (
		<section className="work">
			<h2>Work</h2>
			<h3>Agency</h3>
			{agencyWork.map((item, index) => {
				return (
					<div key={index} className="work__item">
						<h2>{item.title}</h2>
						{item.description}
						<p>{item.type}</p>
					</div>
				)
			})}
			<h3>Pro Bono</h3>
			{probonoWork.map((item, index) => {
				return (
					<div key={index} className="work__item">
						<h2>{item.title}</h2>
						{item.description}
						<p>{item.type}</p>
					</div>
				)
			})}
		</section>
	);
}