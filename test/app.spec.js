
import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Application from '../lib/components/app';

describe('Application', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Application />);
  });
  it('renders as a <section>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'section')
  });
  it("should have a city state of ''", () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state('city'), (''))
  });
  it("should have a setState state of ''", () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state('state'), (''));
  });
  it('should have a weatherArray state of null', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.state('weatherArray'), (null))
  });
});
