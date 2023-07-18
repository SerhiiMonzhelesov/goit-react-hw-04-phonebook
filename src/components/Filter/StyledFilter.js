import styled from 'styled-components';

const StyledFilter = styled.label`
  font-size: 16px;
  text-align: center;
  width: 100%;
  max-width: 450px;
  text-shadow: 0px 0px 3px #16430c8f;
  margin-bottom: 15px;

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
    max-width: 225px;
  }
`;

export default StyledFilter;
