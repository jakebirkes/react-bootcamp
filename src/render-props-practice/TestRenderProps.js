import React from 'react';
import Toggler from './Toggler';

const TestRenderProps = props => (
	<>
		<Toggler
			render={(bool, num) => (
				<>
					<h1>
						<span aria-label="emoji" role="img">
							{bool ? '🙃' : '😵'}
						</span>
					</h1>
					<h2>
						<span aria-label="emoji" role="img">
							{bool ? `Your favorite number is ${num}` : '🥴'}
						</span>
					</h2>
					<div>
						<p>
							<code>this.state.show: {bool ? 'true' : 'false'}</code>
						</p>
					</div>
				</>
			)}
		/>
	</>
);

export default TestRenderProps;
