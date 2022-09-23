import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import HomePage from '../../pages/home';

export default {
  title: 'Page/HomePage',
  component: HomePage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ],
  argTypes: {}
};

function Template(args) {
  return <HomePage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {};
