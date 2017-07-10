import React from 'react';

import version from '../../version';

import StandardUserInterface from 'leylinesjs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx';
import MenuItem from 'leylinesjs/lib/ReactViews/StandardUserInterface/customizable/MenuItem';
import RelatedMaps from './RelatedMaps';
import { Menu, ExperimentalMenu } from 'leylinesjs/lib/ReactViews/StandardUserInterface/customizable/Groups';
import SplitPoint from 'terriajs/lib/ReactViews/SplitPoint';
import MeasureTool from 'leylinesjs/lib/ReactViews/Map/Navigation/MeasureTool';
import AugmentedVirtualityTool from 'leylinesjs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool';

import './global.scss';

function loadAugmentedVirtuality(callback) {
    require.ensure('terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool', () => {
        const AugmentedVirtualityTool = require('terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool');
        callback(AugmentedVirtualityTool);
    }, 'AugmentedVirtuality');
}

function isBrowserSupportedAV() {
    return /Android|iPhone|iPad/i.test(navigator.userAgent);
}

export default function UserInterface(props) {
    return (
        <StandardUserInterface {... props} version={version}>
            <Menu>
                <RelatedMaps viewState={props.viewState} />
                <MenuItem caption="About" href="http://www.leylines.ch/index.html#about" key="about-link"/>
            </Menu>
<<<<<<< HEAD
            <Nav>
                <MeasureTool terria={props.viewState.terria} key="measure-tool"/>
            </Nav>
=======
            <ExperimentalMenu>
                <If condition={isBrowserSupportedAV()}>
                    <SplitPoint loadComponent={loadAugmentedVirtuality} viewState={props.viewState} terria={props.viewState.terria} experimentalWarning={true}/>
                </If>
            </ExperimentalMenu>
>>>>>>> upstream/master
        </StandardUserInterface>
    );
}
