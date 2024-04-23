import { NivoTooltip } from './NivoTooltip';
import { Subtitle } from '../Subtitle';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

export default {
  component: NivoTooltip,
  parameters: {
    componentSubtitle:
      'Tooltip used only by the component library for Nivo charts.',
  },
  title: 'Components/Other/NivoTooltip',
};

export const NivoTooltipComponent = () => (
  <div
    style={{
      height: 200,
      position: 'relative',
      width: 400,
    }}
  >
    <NivoTooltip>
      <Subtitle color="strong" subtitle="Raw materials: 20%" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa
        cum saepe similique voluptatem nam numquam qui atque aperiam consequatur
        velit officiis ex assumenda sapiente magnam corrupti quas, dolore rerum.
      </p>
    </NivoTooltip>
  </div>
);

NivoTooltipComponent.storyName = 'NivoTooltip';
