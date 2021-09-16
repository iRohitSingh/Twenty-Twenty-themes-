/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

// All your imports required for the config here BEFORE this line
import {
  ButtonViewBlock,
  ButtonEditBlock,
  seperatorViewBlock,
  seperatorEditBlock,
  QupteViewBlock,
  QupteEditBlock,
} from '@package/components';
import sliderSVG from '@plone/volto/icons/slider.svg';

import { defineMessages } from 'react-intl';
import '@plone/volto/config';

defineMessages({
  button: {
    id: 'button',
    defaultMessage: 'button',
  },
});
defineMessages({
  seperatorBlock: {
    id: 'seperatorBlock',
    defaultMessage: 'seperatorBlock',
  },
});
defineMessages({
  QuoteBlock: {
    id: 'QuoteBlock',
    defaultMessage: 'QuoteBlock',
  },
});

export default function applyConfig(config) {
  const customBlocks = {
    buttonBlock: {
      id: 'buttonBlock',
      title: 'ButtonBlock',
      icon: sliderSVG,
      group: 'common',
      view: ButtonViewBlock,
      edit: ButtonEditBlock,
      restricted: false,
      mostUsed: true,
      blockHasOwnFocusManagement: false,
      sidebarTab: 1,
      security: {
        addPermission: [],
        view: [],
      },
    },
    seperatorBlock: {
      id: 'seperatorBlock',
      title: 'seperatorBlock',
      icon: sliderSVG,
      group: 'common',
      view: seperatorViewBlock,
      edit: seperatorEditBlock,
      restricted: false,
      mostUsed: true,
      blockHasOwnFocusManagement: false,
      sidebarTab: 0,
      security: {
        addPermission: [],
        view: [],
      },
    },
    QuoteBlock: {
      id: 'QuoteBlock',
      title: 'QuoteBlock',
      icon: sliderSVG,
      group: 'common',
      view: QupteViewBlock,
      edit: QupteEditBlock,
      restricted: false,
      mostUsed: true,
      blockHasOwnFocusManagement: false,
      sidebarTab: 1,
      security: {
        addPermission: [],
        view: [],
      },
    },
  };

  config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks,
    },
  };

  return config;
}
