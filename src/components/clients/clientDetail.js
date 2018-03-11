import React from 'react';
import { ItemList } from '../items';
import { SectionBar } from '../common';

export default function(props) {
  return (
    <div>
      <SectionBar text={'Projects'} />
      <ItemList items={props.client.projects} />
    </div>
  );
};
