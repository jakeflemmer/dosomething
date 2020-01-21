import React from 'react';
import { shallow } from 'enzyme';
import { Landing } from './index';

describe('Landing', () => {
	it('has a link and a login button', () => {
		const wrapper = shallow(<Landing handleLogin={()=> {}} />);
		expect(wrapper.find('button').length).toEqual(2);
		expect(wrapper.find('Link').length).toEqual(1);
	});
});

	
