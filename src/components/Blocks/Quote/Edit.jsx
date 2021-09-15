import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import QuoteSidebar from './QuoteSidebar';
import View from './View';

const Edit = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  return (
    <>
      <View {...props} />
      <SidebarPortal selected={selected}>
        <QuoteSidebar
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
