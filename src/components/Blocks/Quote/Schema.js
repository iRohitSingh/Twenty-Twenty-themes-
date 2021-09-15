import { defineMessages } from 'react-intl';

const messages = defineMessages({
  QuoteBlock: {
    id: 'QuoteBlock',
    defaultMessage: 'Quote Block',
  },
  QuoteTitle: {
    id: 'Quote Title',
    defaultMessage: 'Quote Title',
  },QuotePerson: {
    id: 'Quote Person',
    defaultMessage: 'Quote person',
  },

});

export const QuoteSchema = (props) => ({
  title: props.intl.formatMessage(messages.QuoteBlock),
  block: 'QuoteBlock',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'person'],
    },
  ],

  properties: {
    title: {
      title: props.intl.formatMessage(messages.QuoteTitle),
    },
    person: {
      title: props.intl.formatMessage(messages.QuotePerson),
    },
   
  },
  required: [],
});
