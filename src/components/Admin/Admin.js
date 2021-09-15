import React, { useCallback, useState } from 'react';

import { Login } from "./Login/Login";
import { Add } from "./Add/Add";
import { Edit } from "./Edit/Edit";

export function Admin() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [editing, setEditing] = useState(false);
	const [adding, setAdding] = useState(false);

	const callback = useCallback((loggedIn) => {
		setLoggedIn(loggedIn);
	}, []);

	const editWork = () => {
		setEditing(true);
		setAdding(false);
	}

	const addWork = () => {
		setEditing(false);
		setAdding(true);		
	}

	return (
		<section id="admin" className="admin">
			{!loggedIn &&
				<Login parentCallback={callback} />
			}
			{loggedIn &&
				<div>
					<button onClick={addWork}>Add Work</button>
					<button onClick={editWork}>Edit Work</button>
				</div>
			}
			{editing &&
				<Edit />
			}
			{adding &&
				<Add />
			}
		</section>
	);
}