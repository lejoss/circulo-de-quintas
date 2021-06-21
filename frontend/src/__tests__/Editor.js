// import React from 'react';
// import user from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react';
// import { savePost as mockSavePost } from '../api'
// import Editor from '../components/Editor';

// jest.mock('../api');

// afterEach(() => {
// 	jest.clearAllMocks()
// })

// function renderEditor() {
// 	const fakeUser = { id: 'user-1' };
// 	render(<Editor user={fakeUser} />);
// 	const fakePost = {
// 		title: 'Test Title',
// 		content: 'Test content',
// 		tags: ['tag1', 'tag2'],
// 	}

// 	screen.getByLabelText(/title/i).value = fakePost.title;
// 	screen.getByLabelText(/content/i).value = fakePost.content;
// 	screen.getByLabelText(/tags/i).value = fakePost.tags.join(', ');
// 	const submitButton = screen.getByText(/submit/i);

// 	return {
// 		fakeUser,
// 		fakePost,
// 		submitButton
// 	}
// }

// test('renders a form with title, content, tags and submit button', () => {
// 	// its retuning a promise that is resolved
// 	mockSavePost.mockResolvedValueOnce();

// 	const { submitButton, fakePost, fakeUser } = renderEditor();
// 	user.click(submitButton);

// 	expect(submitButton).toBeDisabled();
// 	expect(mockSavePost).toHaveBeenCalledWith({ ...fakePost, authorId: fakeUser.id })
// 	expect(mockSavePost).toHaveBeenCalledTimes(1);
// });

// test('renders an error message from the server', async () => {
// 	const testError = 'test error';
// 	// its retuning a promise that is rejected
// 	mockSavePost.mockRejectedValueOnce({ data: { error: testError } })

// 	const { submitButton } = renderEditor();
// 	user.click(submitButton);

// 	const postError = await screen.findByRole('alert');

// 	expect(postError).toHaveTextContent(testError);
// 	expect(submitButton).not.toBeDisabled()

// })