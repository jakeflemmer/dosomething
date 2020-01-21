import React from 'react';
import { mount } from 'enzyme';
import { act } from "react-dom/test-utils";
import { Settings } from './index';

describe('Settings', () => {
	it('has a form with three inputs and three labels and a button', () => {
		const wrapper = mount(<Settings handleSubmit={() => {}}/>);
		expect(wrapper.find('form').length).toEqual(1);
		expect(wrapper.find('label').length).toEqual(3);
		expect(wrapper.find('input').length).toEqual(3);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('passes the users entered data onSubmit', () => {
		const mockSubmit = jest.fn(({ firstName, lastName, email }) => { });
		const wrapper = mount(<Settings handleSubmit={mockSubmit}/>);
		const firstName = wrapper.find('input').first();
		act(() => {
			firstName.prop('onChange')({ target: { value: 'Harry' }});
		});
		const lastName = wrapper.find('input').at(1);
		act(() => {
			lastName.prop('onChange')({ target: { value: 'Potter' }});
		});
		const email = wrapper.find('input').at(2);
		act(() => {
			email.prop('onChange')({ target: { value: 'hp@hogwarts.com' }});
		});
		const form = wrapper.find('form');
		form.simulate('submit');
		const values = mockSubmit.mock.calls[0][0];
		expect(values.firstName).toEqual('Harry');
		expect(values.lastName).toEqual('Potter');
		expect(values.email).toEqual('hp@hogwarts.com');
	});
});
