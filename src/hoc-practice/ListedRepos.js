import React from 'react';
import { withLoader } from './HOC';

const ListedRepos = props => {
	const { data, children: loadingMsg } = props;
	if (!data) return null;
	if (!data.length) return <p>No data</p>;
	return (
		<>
			<ul>
				{data.map(repo => {
					return <li key={repo.id}>{repo.full_name}</li>;
				})}
			</ul>
			{loadingMsg}
		</>
	);
};

const LoadedRepos = withLoader(ListedRepos);

export default LoadedRepos;
