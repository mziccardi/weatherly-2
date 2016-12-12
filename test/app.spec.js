
import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Application from '../lib/components/app';

describe('Application', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Application />);
  });
});
