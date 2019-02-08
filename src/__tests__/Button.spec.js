import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render a button', () => {
    const wrapper = shallow(<Button />);
    const elements = wrapper.find('button');
    expect(elements.length).toBe(1);
  });

  it('should render orange button', () => {
    const wrapper = shallow(<Button orange />);
    const elements = wrapper.find('.orange');
    expect(elements.length).toBe(1);
  });

  it('renders a wide button', () => {
    const wrapper = shallow(<Button wide />);
    const elements = wrapper.find('.wide');
    expect(elements.length).toBe(1);
  });
});
