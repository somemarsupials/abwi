import React from 'react';
import { ItemList } from '../items';
import { SectionBar } from '../common';

export default function(props) {
  return (
    <div>
      <SectionBar text={'Client'} />
      <span>{props.project.client.name}</span>
      <SectionBar text={'Items'} />
      <ItemList items={props.project.items}/>
    </div>
  );
};
