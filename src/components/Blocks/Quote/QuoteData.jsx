import React from 'react';
import { QuoteSchema } from './Schema';
import { BlockDataForm } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  QuoteBlock: {
    id: 'QuoteBlock',
    defaultMessage: 'Quote Block',
  },
});

const QuoteData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(QuoteSchema({ ...props, intl }), props)
    : QuoteSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title={intl.formatMessage(messages.QuoteBlock)}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      fieldIndex={data.index}
      block={block}
    />
  );
};

export default QuoteData;
