
import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import UserInput from '../lib/components/UserInput';
const sinon = require('sinon')

describe('UserInput', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<UserInput />);
  });
  it('should render as a div', ()=>{
    const wrapper = shallow(<UserInput />)
    assert.equal(wrapper.type(), 'div')
  });
})
