import React from 'react';

import Button from '../components/atoms/button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

