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
import{ButtonViewBlock,ButtonEditBlock} from '@package/components';
import sliderSVG from '@plone/volto/icons/slider.svg';

import { defineMessages } from 'react-intl';
import '@plone/volto/config';




defineMessages({
  button: {
    id: 'button',
    defaultMessage: 'button',
  },
});





export default function applyConfig(config){const customBlocks = {
  buttonBlock: {
    id: 'buttonBlock', 
    title: 'ButtonRohit', 
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
};

  config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks
    }
  }

  return config

}
