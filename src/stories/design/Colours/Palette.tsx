import { Box, type BoxProps, type BoxTextColor } from '../../../components/Box';
import { Flex, type FlexProps } from '../../../components/Flex';
import { Grid, GridCol } from '../../../components/Grid';
import { Heading } from '../../../components/Heading';
import { Separator } from '../../../components/Separator';
import { Text } from '../../../components/Text';
import React, { type ReactNode } from 'react';

const ColorBox = ({
  backgroundColor,
  borderColor,
  children,
  textColor = 'var(--b-text-200)',
  text,
  ...props
}: BoxProps & FlexProps & { text?: ReactNode; textColor?: BoxTextColor }) => {
  const content = text
    ? text
    : backgroundColor
      ? backgroundColor
      : borderColor
        ? borderColor
        : textColor;

  return (
    <Box
      asChild
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={textColor}
      padding="small"
      {...props}
      style={{
        overflow: 'hidden',
        ...props.style,
      }}
    >
      <Flex flexDirection="column">
        {!children && (
          <Text>
            <p>{content}</p>
          </Text>
        )}
        {children}
      </Flex>
    </Box>
  );
};

export const Palette = () => (
  <Flex flexDirection="column">
    <Box>
      <Heading marginBottom="base">Backgrounds</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox backgroundColor="var(--b-bg-900)" />
          <ColorBox backgroundColor="var(--b-bg-800)" />
          <ColorBox backgroundColor="var(--b-bg-700)" />
          <ColorBox backgroundColor="var(--b-bg-600)" />
          <ColorBox backgroundColor="var(--b-bg-500)" />
          <ColorBox backgroundColor="var(--b-bg-400)" />
          <ColorBox backgroundColor="var(--b-bg-300)" />
          <ColorBox backgroundColor="var(--b-bg-200)" />
          <ColorBox backgroundColor="var(--b-bg-100)" />
          <ColorBox backgroundColor="var(--b-bg-50)" />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-bg-mute-900)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-mute-800)"
            textColor="var(--b-static-white)"
          />
          <ColorBox backgroundColor="var(--b-bg-mute-700)" />
          <ColorBox backgroundColor="var(--b-bg-mute-600)" />
          <ColorBox backgroundColor="var(--b-bg-mute-500)" />
          <ColorBox backgroundColor="var(--b-bg-mute-400)" />
          <ColorBox backgroundColor="var(--b-bg-mute-300)" />
          <ColorBox backgroundColor="var(--b-bg-mute-200)" />
          <ColorBox backgroundColor="var(--b-bg-mute-100)" />
          <ColorBox backgroundColor="var(--b-bg-mute-50)" />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Borders</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <Flex flexDirection="column" gap="xSmall">
            <ColorBox
              backgroundColor="var(--b-bg-900)"
              borderColor="var(--b-border-900)"
              text="var(--b-border-900)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-800)"
              borderColor="var(--b-border-800)"
              text="var(--b-border-800)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-700)"
              borderColor="var(--b-border-700)"
              text="var(--b-border-700)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-600)"
              borderColor="var(--b-border-600)"
              text="var(--b-border-600)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-500)"
              borderColor="var(--b-border-500)"
              text="var(--b-border-500)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-400)"
              borderColor="var(--b-border-400)"
              text="var(--b-border-400)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-300)"
              borderColor="var(--b-border-300)"
              text="var(--b-border-300)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-200)"
              borderColor="var(--b-border-200)"
              text="var(--b-border-200)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-100)"
              borderColor="var(--b-border-100)"
              text="var(--b-border-100)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-50)"
              borderColor="var(--b-border-50)"
              text="var(--b-border-50)"
            />
            <Separator border="small" marginBottom="small" marginTop="small" />
            <ColorBox
              backgroundColor="var(--b-bg-200)"
              borderColor="var(--b-border-200-translucent)"
              text="var(--b-border-200-translucent)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-100)"
              borderColor="var(--b-border-100-translucent)"
              text="var(--b-border-100-translucent)"
            />
          </Flex>
        </GridCol>
        <GridCol>
          <Flex flexDirection="column" gap="xSmall">
            <ColorBox
              backgroundColor="var(--b-bg-mute-900)"
              borderColor="var(--b-border-mute-900)"
              text="var(--b-border-mute-900)"
              textColor="var(--b-static-white)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-800)"
              borderColor="var(--b-border-mute-800)"
              text="var(--b-border-mute-800)"
              textColor="var(--b-static-white)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-700)"
              borderColor="var(--b-border-mute-700)"
              text="var(--b-border-mute-700)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-600)"
              borderColor="var(--b-border-mute-600)"
              text="var(--b-border-mute-600)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-500)"
              borderColor="var(--b-border-mute-500)"
              text="var(--b-border-mute-500)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-400)"
              borderColor="var(--b-border-mute-400)"
              text="var(--b-border-mute-400)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-300)"
              borderColor="var(--b-border-mute-300)"
              text="var(--b-border-mute-300)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-200)"
              borderColor="var(--b-border-mute-200)"
              text="var(--b-border-mute-200)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-100)"
              borderColor="var(--b-border-mute-100)"
              text="var(--b-border-mute-100)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-50)"
              borderColor="var(--b-border-mute-50)"
              text="var(--b-border-mute-50)"
            />
            <Separator border="small" marginBottom="small" marginTop="small" />
            <ColorBox
              backgroundColor="var(--b-bg-mute-200)"
              borderColor="var(--b-border-mute-200-translucent)"
              text="var(--b-border-mute-200-translucent)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-100)"
              borderColor="var(--b-border-mute-100-translucent)"
              text="var(--b-border-mute-100-translucent)"
            />
            <ColorBox
              backgroundColor="var(--b-bg-mute-100)"
              borderColor="var(--b-border-mute-strong)"
              text="var(--b-border-mute-strong)"
            />
          </Flex>
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Text</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox textColor="var(--b-text-200)" />
          <ColorBox
            text={
              <>
                var(--b-text-100) <strong>(default)</strong>
              </>
            }
            textColor="var(--b-text-100)"
          />
          <ColorBox textColor="var(--b-text-50)" />
        </GridCol>
        <GridCol>
          <ColorBox textColor="var(--b-text)" />
          <ColorBox textColor="var(--b-text-heading)" />
          <ColorBox textColor="var(--b-primary-highlight)" />
          <ColorBox textColor="var(--b-text-link)" />
          <ColorBox textColor="var(--b-text-link-hover)" />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Surface</Heading>
      <ColorBox
        backgroundColor="var(--b-surface-0)"
        borderColor="var(--b-surface-0-border)"
        borderRadius
        padding={0}
        textColor="var(--b-text)"
      >
        <Box padding="medium" paddingBottom="small">
          <Text marginBottom="base">
            <strong>Surface 0</strong> · var(--b-surface-0-border) ·
            var(--b-surface-0)
          </Text>
          <ColorBox
            backgroundColor="var(--b-surface-1)"
            borderColor="var(--b-surface-1-border)"
            borderRadius
            padding={0}
            textColor="var(--b-text)"
          >
            <Box padding="medium" paddingBottom="small">
              <Text marginBottom="base">
                <strong>Surface 1</strong> · var(--b-surface-1-border) ·
                var(--b-surface-1)
              </Text>
              <ColorBox
                backgroundColor="var(--b-surface-2)"
                borderColor="var(--b-surface-2-border)"
                borderRadius
                padding={0}
                textColor="var(--b-text)"
              >
                <Box padding="medium" paddingBottom="small">
                  <Text marginBottom="base">
                    <strong>Surface 2</strong> · var(--b-surface-2-border) ·
                    var(--b-surface-2)
                  </Text>
                  <Flex>
                    <ColorBox
                      backgroundColor="var(--b-surface-3)"
                      borderColor="var(--b-surface-3-border)"
                      borderRadius
                      flexBasis="100%"
                      padding={0}
                      textColor="var(--b-text)"
                    >
                      <Box padding="medium" paddingBottom="small">
                        <Text>
                          <p>
                            <strong>Surface 3</strong>
                          </p>
                          <p>
                            var(--b-surface-3-border) <br />
                            var(--b-surface-3)
                          </p>
                        </Text>
                      </Box>
                      <ColorBox
                        backgroundColor="var(--b-surface-3-pop)"
                        style={{
                          borderTop:
                            'var(--b-border-width) solid var(--b-surface-3-border)',
                        }}
                      />
                    </ColorBox>
                    <ColorBox
                      backgroundColor="var(--b-surface-3)"
                      borderRadius
                      flexBasis="100%"
                      padding="medium"
                      shadow="default"
                      textColor="var(--b-text)"
                    >
                      <Text>
                        <p>
                          <strong>Surface 3 with shadow</strong>
                        </p>
                        <p>
                          var(--b-shadow) <br />
                          var(--b-surface-3)
                        </p>
                      </Text>
                    </ColorBox>
                  </Flex>
                </Box>
                <ColorBox
                  backgroundColor="var(--b-surface-2-pop)"
                  style={{
                    borderTop:
                      'var(--b-border-width) solid var(--b-surface-2-border)',
                  }}
                />
              </ColorBox>
            </Box>
            <ColorBox
              backgroundColor="var(--b-surface-1-pop)"
              style={{
                borderTop:
                  'var(--b-border-width) solid var(--b-surface-1-border)',
              }}
            />
          </ColorBox>
        </Box>
        <ColorBox
          backgroundColor="var(--b-surface-0-pop)"
          style={{
            borderTop: 'var(--b-border-width) solid var(--b-surface-0-border)',
          }}
        />
      </ColorBox>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Primary</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-primary-900)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-800)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-700)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-600)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-500)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-400)"
            text={
              <>
                var(--b-primary-400) <strong>(default)</strong>
              </>
            }
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-300)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox backgroundColor="var(--b-primary-200)" />
          <ColorBox backgroundColor="var(--b-primary-100)" />
          <ColorBox backgroundColor="var(--b-primary-50)" />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-primary)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-light)"
            text={
              <>
                Background: var(--b-primary-light) <br />
                Foreground: var(--b-primary-fg-light)
              </>
            }
            textColor="var(--b-primary-fg-light)"
          />
          <Separator border="small" marginBottom="small" marginTop="small" />
          <ColorBox
            backgroundColor="var(--b-primary-static-300)"
            textColor="var(--b-primary-fg)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-static-200)"
            textColor="var(--b-text-static-500)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-static-100)"
            textColor="var(--b-text-static-500)"
          />
          <ColorBox
            backgroundColor="var(--b-primary-static-50)"
            textColor="var(--b-text-static-500)"
          />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Accent 1 (Red, Static)</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-1-900)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-800)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-700)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-600)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-500)"
            text={
              <>
                var(--b-accent-1-500) <strong>(default)</strong>
              </>
            }
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-400)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-300)"
            textColor="var(--b-accent-1-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-200)"
            textColor="var(--b-accent-1-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-100)"
            textColor="var(--b-accent-1-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-1-50)"
            textColor="var(--b-accent-1-900)"
          />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-1)"
            textColor="var(--b-static-white)"
          />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Accent 2 (Blue, Static)</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-2-900)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-800)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-700)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-600)"
            textColor="var(--b-accent-2-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-500)"
            text={
              <>
                var(--b-accent-2-500) <strong>(default)</strong>
              </>
            }
            textColor="var(--b-accent-2-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-400)"
            textColor="var(--b-accent-2-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-300)"
            textColor="var(--b-accent-2-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-200)"
            textColor="var(--b-accent-2-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-100)"
            textColor="var(--b-accent-2-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-2-50)"
            textColor="var(--b-accent-2-900)"
          />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-2)"
            textColor="var(--b-accent-2-900)"
          />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Accent 3 (Green, Static)</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-3-900)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-800)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-700)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-600)"
            textColor="var(--b-accent-3-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-500)"
            text={
              <>
                var(--b-accent-3-500) <strong>(default)</strong>
              </>
            }
            textColor="var(--b-accent-3-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-400)"
            textColor="var(--b-accent-3-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-300)"
            textColor="var(--b-accent-3-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-200)"
            textColor="var(--b-accent-3-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-100)"
            textColor="var(--b-accent-3-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-3-50)"
            textColor="var(--b-accent-3-900)"
          />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-3)"
            textColor="var(--b-accent-3-900)"
          />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Accent 4 (Yellow, Static)</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-4-900)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-800)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-700)"
            textColor="var(--b-accent-4-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-600)"
            textColor="var(--b-accent-4-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-500)"
            text={
              <>
                var(--b-accent-4-500) <strong>(default)</strong>
              </>
            }
            textColor="var(--b-accent-4-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-400)"
            textColor="var(--b-accent-4-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-300)"
            textColor="var(--b-accent-4-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-200)"
            textColor="var(--b-accent-4-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-100)"
            textColor="var(--b-accent-4-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-4-50)"
            textColor="var(--b-accent-4-900)"
          />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-4)"
            textColor="var(--b-accent-4-900)"
          />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Accent 5 (Purple, Static)</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-5-900)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-800)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-700)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-600)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-500)"
            text={
              <>
                var(--b-accent-5-500) <strong>(default)</strong>
              </>
            }
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-400)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-300)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-200)"
            textColor="var(--b-accent-5-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-100)"
            textColor="var(--b-accent-5-900)"
          />
          <ColorBox
            backgroundColor="var(--b-accent-5-50)"
            textColor="var(--b-accent-5-900)"
          />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-accent-5)"
            textColor="var(--b-static-white)"
          />
        </GridCol>
      </Grid>
    </Box>
    <Separator border="small" marginBottom="small" marginTop="small" />
    <Box>
      <Heading marginBottom="base">Static colors</Heading>
      <Grid minColWidth={200}>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-static-white)"
            border="small"
            borderColor="var(--b-static-black)"
            textColor="var(--b-static-black)"
          />
          <ColorBox
            backgroundColor="var(--b-static-black)"
            marginBottom="small"
            textColor="var(--b-static-white)"
          />
          <ColorBox textColor="var(--b-text-static-500)" />
          <ColorBox textColor="var(--b-text-static-400)" />
          <ColorBox textColor="var(--b-text-static-300)" />
          <ColorBox textColor="var(--b-text-static-200)" />
          <ColorBox textColor="var(--b-text-static-100)" />
          <ColorBox textColor="var(--b-text-static-50)" />
        </GridCol>
        <GridCol>
          <ColorBox
            backgroundColor="var(--b-bg-static-900)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-800)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-700)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-600)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-500)"
            textColor="var(--b-static-white)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-400)"
            textColor="var(--b-text-static-500)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-300)"
            textColor="var(--b-text-static-500)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-200)"
            textColor="var(--b-text-static-500)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-100)"
            textColor="var(--b-text-static-500)"
          />
          <ColorBox
            backgroundColor="var(--b-bg-static-50)"
            textColor="var(--b-text-static-500)"
          />
        </GridCol>
      </Grid>
    </Box>
  </Flex>
);
