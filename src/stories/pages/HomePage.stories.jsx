import React from 'react';

import HomePage from '../../pages/home';

export default {
  title: 'Page/HomePage',
  component: HomePage,
  argTypes: {}
};

const Template = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
