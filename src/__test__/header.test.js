import React from 'react';
import renderer from 'react-test-renderer';
import Store from '../Store';
import {render, screen, cleanup} from '@testing-library/react';
import Header from '../Header';
import Data from '../Data';
import App from '../App'

const store = new Store();

afterEach(() => {
    cleanup();
})

test('should render header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument();
})

test("matches header snapshot", () => {
    const tree  = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
})

test("matches data snapshot", () => {
    const tree  = renderer.create(<Data store={store}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("matches app snapshot", () => {
    const tree  = renderer.create(<App store={store}/>).toJSON();
    expect(tree).toMatchSnapshot();
})