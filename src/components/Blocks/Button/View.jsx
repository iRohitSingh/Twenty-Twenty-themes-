import React from 'react';
import { Button } from 'semantic-ui-react';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';

const View = ({ data, isEditMode }) => {
  const [hasLink, setHasLink] = React.useState(false);

  React.useEffect(() => {
    if (data.href) {
      if (data.href && data.href.length > 0) {
        setHasLink(true);
      }
      if (data.href.length === 0) {
        setHasLink(false);
      }
    }
  }, [data.href]);

  let link = hasLink ? (
    data.href.length > 0 && isInternalURL(data.href[0]['@id']) ? (
      <ConditionalLink
        to={data.href.length > 0 ? flattenToAppURL(data.href[0]['@id']) : ''}
        condition={!isEditMode}
      >
        <Button className="button-container">{data.title}</Button>
      </ConditionalLink>
    ) : (
      data.href.length > 0 && (
        <a href={flattenToAppURL(data.href[0]['@id'])}>
          <Button className="button-container">{data.title}</Button>
        </a>
      )
    )
  ) : (
    <Button className="noLink">{data.title}</Button>
  );

  return <div className={`block-button align ${data?.align}`}>{link}</div>;
};

export default View;
