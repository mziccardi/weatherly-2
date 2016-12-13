
import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import CurrentWeather from '../lib/components/CurrentWeather';

describe('CurrentWeather', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<CurrentWeather />);
  });
  it('should render as a div', ()=>{
    const wrapper = shallow(<CurrentWeather />)
    assert.equal(wrapper.type(), 'div')
  })
  // it('should have a current temp', ()=>{
  //   const wrapper = shallow(<CurrentWeather />);
  //   expect(current).to.exist;
  // })
});
