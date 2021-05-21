import React from 'react';
import sampleData from './sampleData.js'
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import Image from '../client/src/components/Image.jsx';
import {mount, shallow, render} from 'enzyme';


describe('Image tests', function () {
  it('image click should register', () => {
    const clickFn = jest.fn();
    const component = shallow(<Image onClick={clickFn} />);

    component
      .simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });
});
