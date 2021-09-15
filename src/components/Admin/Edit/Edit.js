import React, { useState, useEffect } from "react";
import {useParams, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { database } from '../../../services/firebase';
import { auth } from '../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Edit() {
	const [user] = useAuthState(auth);
	const { workId } = useParams();
	const [item, setItem] = useState([]);

	//const [workEdited, setWorkEdited] = useState(false);
	const { register, formState: { errors }, handleSubmit } = useForm({
		defaultValues: {
			title: item.title,
			year: item.year,
			role: item.role,
			tools: item.tools,
			description: item.description
		}
	});

	console.log('user ', user);

	const onSubmit = (data) => {
		database.ref('work/' + workId)
			.set({
				title: data.title,
				year: data.year,
				role: data.role,
				tools: data.tools,
				description: data.description
			})
			.then(
				//setWorkEdited(true),
			)
			.catch()
	}

	useEffect(() => {
		database.ref('work/' + workId).once('value', function (snapshot) {
			setItem(snapshot.val());
		});
	}, [workId]);

    if (!user){
        return (
            <Link to={`/admin/login`}>Log In</Link>
        );
    }

	return (
		<div id="edit" className="admin">
			<h2>Edit Work</h2>
			<form className="add__form" onSubmit={handleSubmit(onSubmit)}>
				<input id="id" name="id" type="hidden" value={item.id} />
				<fieldset>
					<label htmlFor="title">Title</label>
					<input
						id="title"
						name="title"
						type="text"
						defaultValue={item.title}
						{...register('title')}
					/>
					{errors.title && <p className="error">Please add a title.</p>}
				</fieldset>
				<fieldset>
					<label htmlFor="year">Year</label>
					<input
						id="year"
						name="year"
						type="text"
						defaultValue={item.year}
						{...register('year')} />
				</fieldset>
				<fieldset>
					<label htmlFor="role">Role</label>
					<input
						id="role"
						name="role"
						type="text"
						defaultValue={item.role}
						{...register('role')} />
				</fieldset>
				<fieldset>
					<label htmlFor="tools">Tools</label>
					<input
						id="tools"
						name="tools"
						type="text"
						defaultValue={item.tools}
						{...register('tools')} />
				</fieldset>
				<fieldset>
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						name="description"
						placeholder="Description"
						defaultValue={item.description}
						{...register('description',)}>
					</textarea>
				</fieldset>
				<button className="btn btn--submit" type="submit">Add Work</button>
				<Link to={`/`}>Cancel</Link>
			</form>
		</div>
	);
}