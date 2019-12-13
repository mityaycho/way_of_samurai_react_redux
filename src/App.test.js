import React from 'react';
import ReactDOM from 'react-dom';
import AppWithBrowserRouter from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithBrowserRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
