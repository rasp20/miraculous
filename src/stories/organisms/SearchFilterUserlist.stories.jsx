import React from 'react';

import SearchFilterUserlist from '../../components/organisms/searchFilterUserlist';

export default {
  title: 'Organisms/SearchFilterUserlist',
  component: SearchFilterUserlist,
  argTypes: {}
};

const Template = (args) => <SearchFilterUserlist {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
