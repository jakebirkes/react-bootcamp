import React from 'react';
import NewJSFeatures from './NewJSFeatures';
import Card from './Card';
import CardClass from './CardClass';
import RoundedImg from "./RoundedImg";

function App() {
  return (
    <>
      <NewJSFeatures />
      <div>
        <Card cardColor="red" width={200} />
        <Card cardColor="yellow" height={150} />
        <Card cardColor="green" width={250} height={175} />
        <CardClass />
      </div>
      <div>
        <RoundedImg src="https://picsum.photos/id/237/300/300" />
      </div>
    </>
  );
}

export default App;
