import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* align-items: center; */
  width: 100%;
  border: 1px solid #cce2ce4d;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 3px 3px 5px 0px #d7d3d3;
  text-shadow: 0px 0px 3px #16430c8f;
  background: #dcf1e759;

  & label {
    font-size: 16px;
    text-align: end;
    width: 100%;
    max-width: 325px;
  }

  & input {
    font-size: 14px;
    margin-left: 15px;
    padding: 4px;
    border-radius: 5px;
    border: 1px solid #878987;
    border-left: none;
    border-top: none;
    box-shadow: 1px 1px 4px 0px #d7d3d3;
    background: #f9faf9fc;
    width: 100%;
    max-width: 180px;
  }

  & input:focus {
    border-color: red;
  }

  & button {
    font-size: 16px;
    color: #22301e;
    padding: 8px;
    border: 1px solid #8aee8a7d;
    border-radius: 8px;
    background: #93e86973;
    cursor: pointer;
    text-shadow: 0px 0px 5px #16430cc9;
    align-self: center;
  }

  & button:hover {
    box-shadow: 3px 3px 5px 0px #b7b1b1;
    background: #6ea46efc;
    color: #ffffff;
    border: 1px solid #5da45d7d;
    text-shadow: none;
  }
`;

export default StyledContactForm;
