import { Formik, Form } from 'formik';
import styled from 'styled-components';
const CivilForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FormLayout = ({
  initValues,
  onSubmit,
  buttonLabel = 'Create',
  children,
}) => {
  return (
    <Formik initialValues={initValues} onSubmit={onSubmit}>
      <CivilForm>
        {children}
        <button type="submit">{buttonLabel}</button>
      </CivilForm>
    </Formik>
  );
};
