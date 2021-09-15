import React, { useState } from "react";
import {Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { database } from '../../../services/firebase';
import { auth } from '../../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Add() {
	const [user] = useAuthState(auth);
	const [workAdded, setWorkAdded] = useState(false);
	const { register, formState: { errors }, handleSubmit } = useForm();

	const onSubmit = (data) => {
		let random = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
		database.ref('work')
			.child(Math.round(random))
			.set({
				id: Math.round(random),
				title: data.title,
				year: data.year,
				role: data.role,
				tools: data.tools,
				description: data.description
			})
			.then(
				setWorkAdded(true),
		)
		.catch()
	}
	
	if (!user){
        return (
            <Link to={`/admin/login`}>Log In</Link>
        );
    }
	
	return (
		<div id="add" className="admin">
			<h2>Add Work</h2>
			<form className="add__form" onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<label htmlFor="title">Title</label>
					<input id="title" name="title" type="text" placeholder="Work title" {...register('title', { required: true })} />
					{errors.title && <p className="error">Please add a title.</p>}
				</fieldset>
				<fieldset>
					<label htmlFor="year">Year</label>
					<input id="year" name="year" type="text" placeholder="Year" {...register('year', { required: true })} />
					{errors.title && <p className="error">Please add a year.</p>}
				</fieldset>
				<fieldset>
					<label htmlFor="role">Role</label>
					<input id="role" name="role" type="text" placeholder="Role" {...register('role', { required: true })} />
					{errors.title && <p className="error">Please add a role.</p>}
				</fieldset>
				<fieldset>
					<label htmlFor="tools">Tools</label>
					<input id="tools" name="tools" type="text" placeholder="Tools" {...register('tools', { required: true })} />
					{errors.title && <p className="error">Please add tools.</p>}
				</fieldset>
				<fieldset>
					<label htmlFor="description">Description</label>
					<textarea id="description" name="description" placeholder="Description" {...register('description', { required: true })}></textarea>
					{errors.title && <p className="error">Please add tools.</p>}
				</fieldset>					
				<button className="btn btn--submit" type="submit">Add Work</button>
			</form>

			{workAdded &&
				<div>
					<p>Work added!</p>
					<Link to={`/`}>Return to portfolio</Link>
				</div>
			}
		</div>
	);
}