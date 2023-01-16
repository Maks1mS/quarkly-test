import React from 'react';
import atomize from "@quarkly/atomize";
import useSWR, { useSWRConfig, SWRConfig } from 'swr';

const fetcher = async () => {
	return fetch('http://localhost');
};

export const useUser = () => {
	const {
		data,
		error
	} = useSWR('/users', fetcher);
	return [data, error];
};

const App = props => <div {...props}>
	Say hello App
</div>;

export default atomize(App)({
	name: "App",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "App — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});