import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';
import {addPost, state, updatePostText} from "./Redux/store";

test('renders learn react link', () => {
  render(<App updatePostText={updatePostText} state={state} addPost={addPost}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
