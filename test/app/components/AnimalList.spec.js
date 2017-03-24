import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

import AnimalList from '../../../app/components/AnimalList'

describe('<AnimalList/>', () => {

  it('should render zero items', () => {
    const wrapper = shallow(<AnimalList items={[]}/>)
    expect(wrapper.find('li')).to.have.length(0)
  })

  it('should render undefined items', () => {
    const wrapper = shallow(<AnimalList items={undefined}/>)
    expect(wrapper.find('li')).to.have.length(0)    
  })

  it('should render some items', function () {
    const items = ['Cheetah', 'Duck', 'Dog']
    const wrapper = shallow(<AnimalList items={items}/>)
    expect(wrapper.find('li')).to.have.length(3)
  })

})