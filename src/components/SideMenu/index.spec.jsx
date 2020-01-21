import React from 'react';
import { mount } from 'enzyme';
import { SideMenu } from './index';
import { SubMenu } from './SubMenu';

describe('Side menu', () => {

	let wrapper;
	beforeEach(() => wrapper = mount(<SideMenu />));

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

