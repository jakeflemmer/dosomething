import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from './index';

describe('Profile', () => {
	it('renders a first name, last name and email', () => {
		const wrapper = shallow(
			<Profile> 
				{'Mickey'}
				{'Mouse'}
				{'hole@wall.com'}
			</Profile>
		);
		expect(wrapper.find('ul').length).toEqual(1);
		expect(wrapper.find('li').length).toEqual(3);
		expect(wrapper.find('li').first().containsMatchingElement(<span>Mickey</span>)).toBeTruthy();
		expect(wrapper.find('li').at(1).containsMatchingElement(<span>Mouse</span>)).toBeTruthy();
		expect(wrapper.find('li').at(2).containsMatchingElement(<span>hole@wall.com</span>)).toBeTruthy();
	});

})


