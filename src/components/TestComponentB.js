import React, { useEffect } from 'react';
import atomize from "@quarkly/atomize";
import { useUser } from './App';

const TestComponentB = ({
	children,
	...props
}) => {
	useUser();
	useEffect(() => {
		console.log('[B] useEffect::mount');
		return () => {
			console.log('[B] useEffect::unmount');
		};
	}, []);
	return <div {...props}>
		    Say hello TestComponentB
    
		{children}
		  
	</div>;
};

export default atomize(TestComponentB)({
	name: "TestComponentB",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "TestComponentB — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});