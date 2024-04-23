import {
  Alert,
  AlertContent,
  AlertIcon,
  AlertText,
  Box,
  Grid,
  GridCol,
  Subtitle,
  Text,
} from '@biocode/ds';
import { ColorBox } from '@/components/ColorBox';
import { type FC } from 'react';

export const PrimaryColors: FC = () => (
  <>
    <Box asChild marginBottom="medium">
      <Grid gap="small">
        <GridCol
          colSpan={{
            xl: 6,
          }}
        >
          <ColorBox
            color="var(--b-primary-fg)"
            heading="Primary Blue"
            token="var(--b-primary)"
          />
          <Box
            asChild
            paddingBottom="small"
            paddingLeft="medium"
            paddingRight="medium"
            paddingTop="base"
          >
            <Text size="small">
              <p>
                Primary colour for Biocode that is used together with primary
                foreground colour. Used mainly as primary button background
                colour and as highlight text colour.
              </p>
            </Text>
          </Box>
        </GridCol>
        <GridCol
          colSpan={{
            xl: 6,
          }}
        >
          <ColorBox
            borderColor="var(--b-surface-0-border)"
            color="var(--b-text-static-50)"
            heading="Secondary Blue"
            token="var(--b-bg-static-900)"
          />
          <Box
            asChild
            paddingBottom="small"
            paddingLeft="medium"
            paddingRight="medium"
            paddingTop="base"
          >
            <Text size="small">
              <p>
                Secondary colour that is the negative of the secondary white.
                Used as the root background colour in dark theme. Base for
                background and text colour shades.
              </p>
            </Text>
          </Box>
        </GridCol>
        <GridCol
          colSpan={{
            xl: 6,
          }}
        >
          <ColorBox
            borderColor="var(--b-surface-0-border)"
            color="var(--b-text-static-500)"
            heading="Secondary White"
            token="var(--b-bg-static-50)"
          />
          <Box
            asChild
            paddingBottom="small"
            paddingLeft="medium"
            paddingRight="medium"
            paddingTop="base"
          >
            <Text size="small">
              <p>
                Secondary colour that is the negative of the secondary blue.
                Used as the root background colour and bottom layer colour in
                light theme.
              </p>
            </Text>
          </Box>
        </GridCol>
      </Grid>
    </Box>
    <Subtitle color="strong" size="large">
      Main primary colour shades
    </Subtitle>
    <Alert marginBottom="base" variant="warning">
      <AlertIcon />
      <AlertContent>
        <AlertText>
          Note that in this section the tokens (e.g. var(--b-bg-static-900)) for
          the secondary blue use the static primitive values to demonstrate the
          differences of the background colors no matter which theme is active.
          In real use case{' '}
          <strong>
            you shouldn’t use the light background colors in dark theme and vice
            versa
          </strong>
          . Instead, refer to the background tokens below which automatically
          change based on the active theme.
        </AlertText>
      </AlertContent>
    </Alert>
    <Alert marginBottom="base" variant="neutral">
      <AlertIcon />
      <AlertContent>
        <AlertText>
          Good to know: There isn’t a specific token for the secondary blue
          color. Secondary color acts mainly as a background and text color
          which is why there are tokens for these uses cases only.
        </AlertText>
      </AlertContent>
    </Alert>
  </>
);
