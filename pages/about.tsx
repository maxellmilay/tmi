import Layout from '@/components/Layout';
import React from 'react';
import History from '@/components/about/History';
import Mission from '@/components/about/Mission';

export default function about() {
	return (
		<Layout>
			<History />
			<Mission />
		</Layout>
	);
}
