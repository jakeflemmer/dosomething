import React from 'react';
import { mount } from 'enzyme';
import { act } from "react-dom/test-utils";
import { SubMenu } from './SubMenu';

describe('SubMenu', () => {
	let wrapper;
	let mockLabel = "sub menu label";
	let mockChild1 = "lorem ipsum dolor sit amet etc";
	let mockChild2 = "per aspera ad astra amen";
	
	beforeAll(() => wrapper = mount(
		<SubMenu label={mockLabel}>
			<li>{ mockChild1 }</li>
			<li>{ mockChild2 }</li>
		</SubMenu>));

	it('displays its passed label param', () => {
		expect(wrapper.find('li').first().text()).toMatch(/sub menu label/);
	});

	it('should not show its children by default', () => {
		expect(wrapper.find('li').length).toEqual(1);
	});

	it('should show its children after being clicked', () => {
		act(() => {
			wrapper.find('ul').prop('onClick')();
		});
		wrapper.setProps(); // needed since enzyme doesn't rerender on useState hooks yet
		expect(wrapper.containsMatchingElement(<li>{ mockChild1 }</li>)).toBeTruthy();
	});

});
