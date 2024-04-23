import { AlertVariantsStory } from '../../../components/Alert/Alert.stories';
import { BadgeVariantsStory } from '../../../components/Badge/Badge.stories';
import { BeaconVariantsStory } from '../../../components/Beacon/Beacon.stories';
import { Button, Buttons } from '../../../components/Button';
import { FieldsetStory } from '../../../components/Fieldset/Fieldset.stories';
import { Flex } from '../../../components/Flex';
import { Grid, GridCol } from '../../../components/Grid';
import { HeadingStory } from '../../../components/Heading/Heading.stories';
import { InputStory } from '../../../components/Input/Input.stories';
import { SelectStory } from '../../../components/Select/Select.stories';
import { SeparatorComponent } from '../../../components/Separator/Separator.stories';
import { SwitchStory } from '../../../components/Switch/Switch.stories';
import { Text } from '../../../components/Text';
import { TextareaStory } from '../../../components/Textarea/Textarea.stories';
import React from 'react';

export const Examples = () => (
  <Flex flexDirection="column" gap="large" marginTop="small">
    <BadgeVariantsStory />
    <SeparatorComponent />
    <AlertVariantsStory />
    <SeparatorComponent />
    <BeaconVariantsStory />
    <SeparatorComponent />
    <Buttons>
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="primary">Button</Button>
      <Button variant="success">Button</Button>
      <Button variant="warning">Button</Button>
      <Button variant="error">Button</Button>
    </Buttons>
    <SeparatorComponent />
    <HeadingStory marginBottom={0} />
    <Flex flexWrap="wrap" gap="small">
      <Text>
        Neutral text with <a href="#">link</a>
      </Text>
      <Text color="light">
        Light text with <a href="#">link</a>
      </Text>
      <Text color="light" colorAccent="highlight">
        Light text with <a href="#">link accent</a>
      </Text>
      <Text color="info">
        Info text with <a href="#">link</a>
      </Text>
      <Text color="error">
        Error text with <a href="#">link</a>
      </Text>
      <Text color="success">
        Success text with <a href="#">link</a>
      </Text>
      <Text color="warning">
        Warning text with <a href="#">link</a>
      </Text>
      <Text color="highlight">
        Highlight text with <a href="#">link</a>
      </Text>
    </Flex>
    <SeparatorComponent />
    <Grid>
      <GridCol colSpan={{ m: 6 }}>
        <InputStory beacon={undefined} hint={undefined} />
      </GridCol>
      <GridCol colSpan={{ m: 6 }}>
        <InputStory disabled hint={undefined} />
      </GridCol>
      <GridCol colSpan={{ m: 6 }}>
        <Grid>
          <GridCol>
            <TextareaStory beacon={undefined} />
          </GridCol>
          <GridCol>
            <TextareaStory disabled />
          </GridCol>
        </Grid>
      </GridCol>
      <GridCol colSpan={{ m: 6 }}>
        <Grid>
          <GridCol>
            <SelectStory />
          </GridCol>
          <GridCol>
            <SwitchStory id="switch-id-2" />
          </GridCol>
        </Grid>
      </GridCol>
    </Grid>
    <FieldsetStory />
  </Flex>
);
