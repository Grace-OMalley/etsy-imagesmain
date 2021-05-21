import React from 'react';
import sampleData from './sampleData.js'
import sinon from 'sinon';
import Display from '../client/src/components/Display.jsx';
import {mount, shallow, render} from 'enzyme';

describe('Display tests', function () {

  it('renders two .arrow components', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('.arrow')).toHaveLength(2);
  });

  it('renders a main-display components', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('.mainDisplay')).toHaveLength(1);
  });
});
