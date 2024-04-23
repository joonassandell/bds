import { AuthLayout, AuthLayoutBar, AuthLayoutMain } from './';
import { Button } from '../Button';
import { Formik } from 'formik';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { MarkBiocodeIcon } from '../Mark';
import { Menu, MenuContent, MenuItem, MenuText, MenuTrigger } from '../Menu';
import { type Meta, type StoryObj } from '@storybook/react';
import { Select } from '../Select';
import { Text } from '../Text';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  parameters: {
    componentSubtitle:
      'Layout for logging in or signing up to the consuming application.',
    docs: {
      description: {
        component:
          'Children for the `<AuthLayoutBar />` and `<AuthLayoutMain />` needs to be applied in the consuming application.',
      },
    },
    layout: 'fullscreen',
  },
  subcomponents: {
    AuthLayoutBar,
    AuthLayoutMain,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Layout/AuthLayout',
};

export default meta;

type Story = StoryObj<typeof AuthLayout>;

export const AuthLayoutComponent: Story = {
  name: 'AuthLayout',
  render: function Component() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <AuthLayout>
        <AuthLayoutBar>
          <Menu onOpenChange={setMenuOpen} open={menuOpen}>
            <MenuTrigger asChild>
              <Button icon="globe">Language</Button>
            </MenuTrigger>
            <MenuContent align="end">
              <MenuItem>
                <MenuText>
                  <MenuText>Finnish</MenuText>
                </MenuText>
              </MenuItem>
              <MenuItem>
                <MenuText>
                  <MenuText>English</MenuText>
                </MenuText>
              </MenuItem>
            </MenuContent>
          </Menu>
        </AuthLayoutBar>
        <AuthLayoutMain>
          <MarkBiocodeIcon
            marginBottom={{ base: 'medium', xl: 'medium' }}
            size="medium"
          />
          <Heading size="h1">Create an account for free</Heading>
          <Formik
            initialValues={{
              email: '',
              'farm-main-production-type': '',
              'farm-name': '',
              'farm-production-location': '',
              language: {
                label: 'In English',
                value: 1,
              },
              name: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            validate={values => {
              const errors: any = {};
              // Simple validation examples, check if used in production
              if (!values.email) errors.email = 'Email is required.';
              if (!values.name) errors.name = 'Name is required.';
              if (!values['farm-name'])
                errors['farm-name'] = 'Farm name is required.';
              if (!values['farm-id'])
                errors['farm-id'] = 'Farm id is required.';
              if (!values['farm-main-production-type'])
                errors['farm-main-production-type'] =
                  'Main production type is required.';
              if (!values['farm-production-location'])
                errors['farm-production-location'] =
                  'Main farm production location is required.';
              if (!values['language'])
                errors['language'] =
                  'Main farm production location is required.';
              return errors;
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Input
                  autoComplete="on"
                  error={errors.email && touched.email && errors.email}
                  id="email"
                  label="Email address"
                  marginBottom="base"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  type="email"
                  value={values.email}
                />
                <Input
                  autoComplete="on"
                  error={errors.name && touched.name && errors.name}
                  id="name"
                  label="Name"
                  marginBottom="base"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                />
                <Input
                  error={
                    errors['farm-name'] &&
                    touched['farm-name'] &&
                    errors['farm-name']
                  }
                  id="farm-name"
                  label="Farm name"
                  marginBottom="base"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter your farm name"
                  type="text"
                  value={values['farm-name']}
                />
                <Input
                  error={
                    errors['farm-id'] && touched['farm-id'] && errors['farm-id']
                  }
                  id="farm-id"
                  label="Farm id"
                  marginBottom="medium"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter your farm id"
                  value={values['farm-id']}
                />
                <Select
                  error={
                    errors['farm-main-production-type'] &&
                    touched['farm-main-production-type'] &&
                    (errors['farm-main-production-type'] as string)
                  }
                  id="farm-main-production-type"
                  marginBottom="medium"
                  onBlur={handleBlur}
                  onChange={option =>
                    setFieldValue('farm-main-production-type', option)
                  }
                  options={[
                    { label: 'Production type 1', value: 1 },
                    { label: 'Production type 2', value: 2 },
                  ]}
                  placeholder="Select main farm production type"
                />
                <Select
                  error={
                    errors['farm-production-location'] &&
                    touched['farm-production-location'] &&
                    (errors['farm-production-location'] as string)
                  }
                  id="farm-production-location"
                  marginBottom="medium"
                  onBlur={handleBlur}
                  onChange={option =>
                    setFieldValue('farm-production-location', option)
                  }
                  options={[
                    { label: 'Location 1', value: 1 },
                    { label: 'Location 2', value: 2 },
                  ]}
                  placeholder="Select farm production location"
                />
                <Select
                  error={
                    errors['language'] &&
                    touched['language'] &&
                    (errors['language'] as string)
                  }
                  id="language"
                  marginBottom="medium"
                  onBlur={handleBlur}
                  onChange={option => setFieldValue('language', option)}
                  options={[
                    { label: 'In English', value: 1 },
                    { label: 'In Finnish', value: 2 },
                  ]}
                  placeholder="Select language"
                  value={values['language']}
                />
                <Button
                  justify="stretch"
                  loading={isSubmitting}
                  marginBottom="medium"
                  size="medium"
                  type="submit"
                >
                  Sign up
                </Button>
                <Text color="light" size="small">
                  <p>
                    Already have an account? <a href="#">Sign in</a> instead.
                  </p>
                </Text>
              </form>
            )}
          </Formik>
        </AuthLayoutMain>
      </AuthLayout>
    );
  },
};
