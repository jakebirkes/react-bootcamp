import React from 'react';
// import CTA from './children-practice/CTA';
// import CalloutWrapper from './children-practice/CalloutWrapper';
// import CalloutInfo from './children-practice/CalloutInfo';
// import CalloutImg from './children-practice/CalloutImg';
// import CalloutEmail from './children-practice/CalloutEmail';
import { withPointlessHOC } from './hoc-practice/withPointlessHOC';
import { withExtraPropAdded } from './hoc-practice/withExtraPropAdded';

const App = props => (
	<>
		<h1>
			<span aria-label="emoji" role="img">
				👋
			</span>
		</h1>
		<h2>
			<span aria-label="emoji" role="img">
				{props.extraProp || '🤪'}
			</span>
		</h2>
		<div>{props.children || <p>Using a pointless HOC</p>}</div>
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

// const PointlessHOC = withPointlessHOC(App);
const ExtraPropAdded = withExtraPropAdded(App, 12); // adding favorite number here

export default ExtraPropAdded;
