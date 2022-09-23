import React from 'react';

import SearchFilterUserlist from '../../components/organisms/searchFilterUserlist';

export default {
  title: 'Organisms/SearchFilterUserlist',
  component: SearchFilterUserlist,
  argTypes: {}
};

function Template(args) {
  return <SearchFilterUserlist {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  props: {
    params: {},
    setParams: () => {}
  }
};
