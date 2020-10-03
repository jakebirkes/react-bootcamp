import React from 'react';
import { useFetch } from './hooks/useFetch';
import { withLoader } from './hoc-practice/HOC';
import ToggleHOC from './hoc-practice/ToggleHOC';
import ListedRepos from './hoc-practice/ListedRepos';
import TestRenderProps from './render-props-practice/TestRenderProps';
const LoadedRepos = withLoader(ListedRepos);
// import CTA from './children-practice/CTA';
// import CalloutWrapper from './children-practice/CalloutWrapper';
// import CalloutInfo from './children-practice/CalloutInfo';
// import CalloutImg from './children-practice/CalloutImg';
// import CalloutEmail from './children-practice/CalloutEmail';

const App = props => {
	const { isLoading, response } = useFetch('https://api.github.com/users/jakebirkes/repos');
	return (
		<>
			<ToggleHOC />
			<LoadedRepos isLoading={isLoading} data={response} />
			<TestRenderProps />
			{/* <CTA>
			<h1>This is an important CTA</h1>
			<button>Click me now or you'll miss out!</button>
		</CTA> */}
			{/* <CalloutWrapper>
			<CalloutInfo
				header="Don't miss out!"
				body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!"
			/>

			<p>
				This is probably the best site you've ever come across. I'm glad you're here to witness the
				magnificence of this website right now.
			</p>

			<CalloutImg
				img={'https://picsum.photos/id/102/4320/3240'}
				caption="Just look at those sparkling raspberries!"
			/>

			<p>Here's some more unforgettable content. Lorem ipsum something or other.</p>

			<CalloutEmail
				header="Give us your email. We definitely won't sell it to anyone."
				btnText="Sign me up!"
			/>
		</CalloutWrapper> */}
		</>
	);
};
// const PointlessHOC = withPointlessHOC(App);
// const ExtraPropAdded = App; // adding favorite number here

export default App;
