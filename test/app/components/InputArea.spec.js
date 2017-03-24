import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'

import InputArea from '../../../app/components/InputArea'

describe('<InputArea/>', () => {
  it('should contain an input and a button', function () {
    const wrapper = shallow(<InputArea/>)
    expect(wrapper)
  })

  it('should accept input', function () {
    const wrapper = mount(<InputArea/>)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Duck' } })
    expect(wrapper.state('text')).to.equal('Duck')
    expect(input.prop('value')).to.equal('Duck')
  })

  it('should call onSubmit when Add is clicked', () => {
    const addItemSpy = spy()
    const wrapper = shallow(<InputArea onSubmit={addItemSpy} />)
    wrapper.setState({ text: 'Dog' })
    const addButton = wrapper.find('button')
    addButton.simulate('click')
    expect(addItemSpy.calledOnce).to.equal(true)
    expect(addItemSpy.calledWith('Dog')).to.equal(true)
  })

  it('should clear the input on submission', function () {
    const addItemSpy = spy()
    const wrapper = shallow(<InputArea onSubmit={addItemSpy} />)
    wrapper.setState({ text: 'Dog' })
    const addButton = wrapper.find('button')
    addButton.simulate('click')
    expect(wrapper.state('text')).to.equal('')
  })

})