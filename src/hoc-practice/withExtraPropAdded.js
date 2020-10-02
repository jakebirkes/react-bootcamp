import React from 'react';

export const withExtraPropAdded = Component => props => <Component extraProp="👌" {...props} />;
