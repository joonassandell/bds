import { type AuthLayoutMainProps } from './';
import { Grid, GridCol } from '../Grid';
import { Illustration } from '../Illustration';
import React, { type FC } from 'react';

export const AuthLayoutMain: FC<AuthLayoutMainProps> = ({ children }) => (
  <Grid className="b-AuthLayout-main">
    <GridCol
      aria-hidden
      className="b-AuthLayout-illustrations"
      colSpan={{ l: 6 }}
    >
      <Illustration name="rawMaterials" />
      <Illustration name="packaging" />
      <Illustration name="retail" />
    </GridCol>
    <GridCol className="b-AuthLayout-content" colSpan={{ l: 6 }}>
      <div className="b-AuthLayout-content-inner">{children}</div>
    </GridCol>
  </Grid>
);
