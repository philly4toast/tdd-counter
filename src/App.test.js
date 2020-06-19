import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//must do for every test file we create
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//

describe('Counter Testing', ()=>{
  test('render the title of counter', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug())
    expect(wrapper.find('h1').text()).toContain('This is counter app')

    // const { getByText } = render(<App />);
    // const linkElement = getByText('This is counter app');
    // expect(linkElement).toBeInTheDocument();
})
});