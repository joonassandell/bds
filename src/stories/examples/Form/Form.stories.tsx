import {
  Alert,
  AlertContent,
  AlertIcon,
  AlertText,
} from '../../../components/Alert';
import { Button } from '../../../components/Button';
import { Formik } from 'formik';
import { Grid, GridCol } from '../../../components/Grid';
import { HeadingInput } from '../../../components/HeadingInput';
import { Input } from '../../../components/Input';
import { isNumeric } from '../../../lib/utils';
import isEmpty from 'ramda/es/isEmpty';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

export default {
  parameters: {
    componentSubtitle:
      'Example of how we should validate inputs and other form elements.',
  },
  title: 'Examples/Form',
};

export const FormRecipe = () => {
  const [globalErrors, setGlobalErrors] = useState(false);

  return (
    <Formik
      initialValues={{ draft: '', input: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      validate={values => {
        const errors: any = {};
        if (!values.draft) errors.draft = 'Required';
        if (!values.input || !isNumeric(values.input))
          errors.input = 'Required and number';
        if (globalErrors) setGlobalErrors(false);
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
      }) => (
        <form
          noValidate
          onSubmit={e => {
            setGlobalErrors(true);
            handleSubmit(e);
          }}
        >
          <Grid>
            <GridCol>
              <Input
                id="input"
                name="input"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Add value…"
                required
                value={values.input}
                warning={errors.input && touched.input && 'Required and number'}
                // type="text" // Uncomment to test and allow adding values other than numbers
              />
            </GridCol>
            <GridCol>
              <HeadingInput
                id="draft"
                name="draft"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Add draft title…"
                value={values.draft}
              />
              {errors.draft && touched.draft && (
                <Alert marginTop="base" variant="error">
                  <AlertIcon />
                  <AlertContent>
                    <AlertText>{errors.draft}</AlertText>
                  </AlertContent>
                </Alert>
              )}
            </GridCol>
            <GridCol>
              {!isEmpty(errors) && globalErrors && (
                <Alert marginBottom="base" marginTop="base" variant="error">
                  <AlertIcon />
                  <AlertContent>
                    <AlertText>
                      There are many errors. <br />
                      {JSON.stringify(errors, null, 2)}
                    </AlertText>
                  </AlertContent>
                </Alert>
              )}
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </GridCol>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

FormRecipe.storyName = 'Form';
