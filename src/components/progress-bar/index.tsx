import React from 'react';
import { RnView } from '../view';
import { rnStyles } from 'src/config/rn-styles';
import { RnProgressBarProps } from 'src/types';

export const RnProgressBar = ({ progress }: RnProgressBarProps) => {
    return (
        <RnView style={rnStyles.progressBarContainer}>
            <RnView style={[rnStyles.progressBar, { width: `${(progress || 0) * 100}%` }]} />
        </RnView>
    );
};



