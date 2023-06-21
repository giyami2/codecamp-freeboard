import styled from "@emotion/styled";

export const BoardWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 101px;
  padding-right: 101px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  gap: 40px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  color: #000000;
  padding-bottom: 40px;
`;

export const InputWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Writer = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputBox = styled.input`
  box-sizing: border-box;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 16px;
`;

export const Subject = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const ContentsBox = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
  padding: 16px;
  box-sizing: border-box;
  height: 480px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
`;
export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  text-align: center;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const UploadButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  img {
    cursor: pointer;
  }
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  background-color: #ffd600;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 60px;
`;

export const Error = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: red;
`;
