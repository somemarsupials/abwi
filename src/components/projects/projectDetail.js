import React from 'react';
import { SectionBar } from '../common';
import { ItemList } from '../items';
import { Link } from 'react-router-dom';

export default function(props) {
  let { id, name } = props.project.client;

  return (
    <div>
      <SectionBar text={'Client'} />
      <Link to={`/clients/${id}`}>{name}</Link>
      <SectionBar text={'Items'} />
      <ItemList items={props.project.items}/>
    </div>
  );
};
