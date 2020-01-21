import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { SideMenu } from './index';
import { SubMenu } from './SubMenu';

describe('Side menu', () => {

	let wrapper;
	beforeEach(() => wrapper = mount(<Router><SideMenu /></Router>));

	it('renders without crashing', () => {
		expect(wrapper).toBeDefined();
	});

	it('has a list with Activites and Account in it', () => {
		expect(wrapper.find('li').length).toEqual(2);
		const firstItem = wrapper.find('SubMenu').first();
		expect(firstItem.text()).toMatch(/Activities/);
		const secondItem = wrapper.find('SubMenu').at(1);
		expect(secondItem.text()).toMatch(/Account/);
	});
});

