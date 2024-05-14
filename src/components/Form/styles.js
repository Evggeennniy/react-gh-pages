import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  label {
    font-weight: 600;
  }

  input {
    padding: 7px;
    border-radius: 10px;
   }

  .form__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px
  }

  .form__btn-submit {
    height: 30px;
    width: 100px;
    border-radius: 30px;
    padding
  }

  .error {
    color: red;
    font-weight: 600;
  }
`;
