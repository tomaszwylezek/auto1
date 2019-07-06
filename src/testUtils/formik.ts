import { FormikActions, FormikHandlers, FormikProps } from 'formik';
import { FormikField } from 'model';

export function getMockedFormikConfig<T>(options: Partial<FormikProps<T>> = {}): FormikProps<T> {
  return {
    ...getMockedFormikActions(),
    ...getMockedFormikHandles(),
    enableReinitialize: false,
    isValidating: false,
    isSubmitting: false,
    dirty: false,
    isValid: false,
    submitCount: 0,
    registerField: jest.fn(),
    unregisterField: jest.fn(),
    values: {} as T,
    errors: {} as T,
    initialValues: {} as T,
    touched: {} as T,
    ...options
  };
}

export function getMockedFormikActions<V>(options: Partial<FormikActions<V>> = {}): FormikActions<V> {
  return {
    setStatus: jest.fn(),
    setError: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn(),
    setTouched: jest.fn(),
    setValues: jest.fn(),
    setFieldValue: jest.fn(),
    setFieldError: jest.fn(),
    setFieldTouched: jest.fn(),
    validateForm: jest.fn(),
    validateField: jest.fn(),
    resetForm: jest.fn(),
    submitForm: jest.fn(),
    setFormikState: jest.fn(),
    ...options
  };
}

export function getMockedFormikHandles(options: Partial<FormikHandlers> = {}): FormikHandlers {
  return {
    handleSubmit: jest.fn(),
    handleReset: jest.fn(),
    handleBlur: jest.fn(),
    handleChange: jest.fn(),
    ...options
  };
}

export function getMockedField(options: Partial<FormikField> = {}): FormikField {
  return {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    value: '',
    name: '',
    ...options
  };
}
