import React, { useEffect } from 'react';
import atomize from "@quarkly/atomize";
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';
import { useUser } from './App';
const overrides = {
	'With auth': {
		kind: 'Box'
	},
	'Without auth': {
		kind: 'Box'
	}
};

const TestComponentA = props => {
	const {
		override,
		ChildPlaceholder,
		rest
	} = useOverrides(props, overrides);
	useUser();
	useEffect(() => {
		console.log('[A] useEffect::mount');
		return () => {
			console.log('[A] useEffect::unmount');
		};
	}, []);
	return <Box {...rest}>
		    Say hello TestComponentA
    
		<Text {...override('Error Text')}></Text>
		    
		{true && <Box {...override("With auth")}>
			        
			<ChildPlaceholder slot="With auth" />
			      
		</Box>}
		    
		{false && <Box {...override("Without auth")}>
			        
			<ChildPlaceholder slot="Without auth" />
			      
		</Box>}
		  
	</Box>;
};

export default atomize(TestComponentA)({
	name: "TestComponentA",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	overrides,
	description: {
		// paste here description for your component
		en: "TestComponentA — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});