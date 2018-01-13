import React from 'react';
import WelcomeScreen from '../../screens/welcome-screen';
import renderer from 'react-test-renderer';


it('Welcome screen renders without crashing', () => {
    const rendered = renderer.create(<WelcomeScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
});