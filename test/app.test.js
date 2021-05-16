import React from 'react';
//import fake data
import renderer from 'react-test-renderer';
import App from '../client/src/index.jsx';
import {mount, shallow, render} from 'enzyme';


// test('App renders', () => {
//   const component = renderer.create(
//     <Display/>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // tree.props.onMouseEnter();
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // tree.props.onMouseLeave();
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
// });

describe('App component', () => {
  const wrapper = mount(<App/>);

  it ('calls setState in componentDidMount', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'setState');
    instance.componentDidMount();
    expect(instance.setState).toHaveBeenCalledTimes(1);
  });
})
