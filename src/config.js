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
import '@plone/volto/config';
import {MainSliderEditBlock ,MainSliderViewBlock } from '@package/components'
import sliderSVG from '@plone/volto/icons/slider.svg';

import { defineMessages } from 'react-intl';



defineMessages({
  mainslider: {
    id: 'Main Slider',
    defaultMessage: 'Main Slider',
  },
});


const customBlocks = {
  mainslider: {
    id: 'mainslider', 
    title: 'Main Slider', 
    icon: sliderSVG, 
    group: 'common', 
    view: MainSliderViewBlock, 
    edit: MainSliderEditBlock, 
    restricted: false,
    mostUsed: true, 
    blockHasOwnFocusManagement: false, 
    sidebarTab: 0, 
    security: {
      addPermission: [], 
      view: [], 
    },
   },
};


const applyConfig = (config) => {
  return {
    ...config,
    blocks: {
      ...config.blocks,
      blocksConfig: {
        ...config.blocks.blocksConfig,
        ...customBlocks,
      },
    },
  };
};

export default applyConfig;
