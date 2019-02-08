import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('calc should have a default display value of 0', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toEqual('0');
  });

  it('should render display component', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('Display');
    expect(elements.length).toBe(1);
  });

  it('should render Panel component', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('Panel');
    expect(elements.length).toBe(1);
  });
});
