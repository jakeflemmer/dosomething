import React from 'react';
import { mount } from 'enzyme';
import { Activity } from './index';

const mockJson = {
	activity: 'rest and relaxation',
	type: 'recreational',
	participants: 2,
}

describe('Activity', () => {
	it('renders the activity, type and participants', () => {
		const wrapper = mount(<Activity match={{ params : { type: 'recreational' }}} />)
		expect(wrapper.find('p').first().text()).toMatch(/Activity :/);
		expect(wrapper.find('p').at(1).text()).toMatch(/Type : /);
		expect(wrapper.find('p').at(2).text()).toMatch(/Participants : /);
	});
});



