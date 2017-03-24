import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import AnimalListContainer from '../../../app/components/AnimalListContainer';
import InputArea from '../../../app/components/InputArea';
import AnimalList from '../../../app/components/AnimalList';

describe('<AnimalListContainer/>', () => {
  it('should render an InputArea and AnimalList', function () {
    const wrapper = shallow(<AnimalListContainer/>)
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <AnimalList/>,
    ]))
  })

  it('should start with an empty list', () => {
    const wrapper = shallow(<AnimalListContainer/>)
    expect(wrapper.state('animals')).to.eql([]) // eql does a value comparison, equal does a object comparision ===
  })

  it('adds items to the list', () => {
    const wrapper = shallow(<AnimalListContainer/>)
    wrapper.instance().addItem('Cheetah')
    expect(wrapper.state('animals')).to.eql(['Cheetah'])
  })

  it('passed addItem to InputArea', () => {
    const wrapper = shallow(<AnimalListContainer/>)
    const inputArea = wrapper.find(InputArea)
    const addItem = wrapper.instance().addItem
    expect(inputArea.prop('onSubmit')).to.eql(addItem)
  })

  it('passes a bound addItem function to InputArea', () => {
    const wrapper = shallow(<AnimalListContainer/>)
    const inputArea = wrapper.find(InputArea)
    inputArea.prop('onSubmit')('Cheetah')
    expect(wrapper.state('animals')).to.eql(['Cheetah'])    
  })

  it('renders the items', function () {
    const wrapper = mount(<AnimalListContainer/>)
    wrapper.instance().addItem('Cheetah')
    wrapper.instance().addItem('Duck')
    expect(wrapper.find('li').length).to.equal(2)
  })

  it('should return false when the text field is empty', () => {
    const wrapper = mount(<AnimalListContainer/>)
    const addItemResult = wrapper.instance().addItem('')
    expect(wrapper.find('li').length).to.equal(0)
    expect(addItemResult).to.equal(false)
  })

  it('should not add duplicate items', () => {
    const wrapper = mount(<AnimalListContainer/>)
    wrapper.instance().addItem('Dog')
    wrapper.instance().addItem('Dog')
    expect(wrapper.find('li').length).to.equal(1)
  })
})