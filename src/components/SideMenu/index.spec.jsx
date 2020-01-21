import React from 'react';
import { mount } from 'enzyme';
import { SideMenu } from './index';

describe('Side menu', () => {

	let wrapper;
	beforeEach(() => wrapper = mount(<SideMenu />));

	it('renders without crashing', () => {
		expect(wrapper).toBeDefined();
	});

	it('has a list with Activites and Account in it', () => {
		expect(wrapper.find('li').length).toEqual(2);
		const firstItem = wrapper.find('li').first();
		expect(firstItem.containsMatchingElement(<li>Activities</li>)).toBeTruthy();
		const secondItem = wrapper.find('li').at(1);
		expect(secondItem.containsMatchingElement(<li>Account</li>)).toBeTruthy();
	});
});
