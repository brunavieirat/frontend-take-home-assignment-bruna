import React from 'react';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
it('renders correctly', () => {
  shallow(<App />);
});
