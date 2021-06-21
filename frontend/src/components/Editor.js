// import React from 'react';
// import { savePost } from '../api';
// type EditorProps = {
// 	user: {}
// }

// export default function Editor({ user }: EditorProps) {
// 	const [isSaving, setIsSaving] = React.useState(false);
// 	const [error, setError] = React.useState(null);

// 	function handleSubmit(e) {
// 		e.preventDefault()
// 		const { title, content, tags } = e.target.elements;
// 		const newPost = {
// 			title: title.value,
// 			content: content.value,
// 			tags: tags.value.split(',').map(t => t.trim()),
// 			authorId: user.id
// 		};
// 		setIsSaving(true);
// 		savePost(newPost).then(() => true, response => {
// 			setIsSaving(false);
// 			setError(response.data.error)
// 		});

// 	}
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<label htmlFor="input-title">Title</label>
// 			<input id="input-title" type="text" name="title" />

// 			<label htmlFor="content-input">Content</label>
// 			<textarea id="content-input" type="text" name="content" />

// 			<label htmlFor="tags-input">Tags</label>
// 			<textarea id="tags-input" type="text" name="tags" />

// 			<button type="submit" disabled={isSaving}>Submit</button>
// 			{error ? <div role="alert">{error}</div> : null}
// 		</form>
// 	);
// }