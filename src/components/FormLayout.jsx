import { Formik, Form } from 'formik';

export const FormLayout = ({ initValues, onSubmit, children }) => {
  return (
    <Formik initialValues={initValues} onSubmit={onSubmit}>
      <Form>{children}</Form>
    </Formik>
  );
};
