import React from 'react';
import { shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import SearchPanel from '../SearchPanel.jsx';

describe('Search Panel Component', () => {
  it('snapshot for search panel component', () => {
    const component = shallow(<SearchPanel data={ {} } />);
    const tree = shallowToJSON(component);
    expect(tree).toMatchSnapshot();
  })
})