'use strict';

import { MapSidebar } from './backend/editor-sidebar';

MapSidebar.register( window.stepmanMapboxAccessToken );

import { registerBlockType } from '@wordpress/blocks';

import * as map from './blocks/map';

jQuery( document ).ready( function( $ ) {
	const blocks = [ map ];

	function registerBlock( block ) {
		const { name, settings } = block;
		registerBlockType( name, settings );
	}

	blocks.forEach( registerBlock );
} );
