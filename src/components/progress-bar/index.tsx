import React from 'react';
import { RnView } from '../view';
import { rnStyles } from 'src/config/rn-styles';

export const RnProgressBar = ({ progress }) => {
    return (
        <RnView style={rnStyles.progressBarContainer}>
            <RnView style={[rnStyles.progressBar, { width: `${progress * 100}%` }]} />
        </RnView>
    );
};



