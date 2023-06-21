import Image from "next/image";
import {
  BoardWrapper,
  InputBox,
  InputWrapper,
  Wrapper,
  Subject,
  Title,
  Writer,
  ContentsBox,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  UploadButton,
  RadioButton,
  RadioLabel,
  RadioButtonWrapper,
  SubmitBtn,
  Error,
} from "../../../styles/boards/emotion";
import UploadBtn from "../../../public/upload-btn.png";
import { useState } from "react";

export default function NewBoardUI() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const handleWriter = (newValue) => {
    setWriter(newValue);
  };

  const handlePassword = (newValue) => {
    setPassword(newValue);
  };

  const handleTitle = (newValue) => {
    setTitle(newValue);
  };

  const handleContents = (newValue) => {
    setContents(newValue);
  };

  const onClickSubmit = () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }

    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }

    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      alert("등록이 완료되었습니다.");
    }
  };

  return (
    <BoardWrapper>
      <Title>게시물 등록</Title>
      <InputWrapper>
        <Wrapper>
          <Writer>작성자</Writer>
          <InputBox
            type="text"
            placeholder="이름을 적어주세요."
            value={writer}
            onChange={(e) => handleWriter(e.target.value)}
          />
          <Error>{writerError}</Error>
        </Wrapper>
        <Wrapper>
          <Subject>비밀번호</Subject>
          <InputBox
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
          />
          <Error>{passwordError}</Error>
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <Wrapper>
          <Subject>제목</Subject>
          <InputBox
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => handleTitle(e.target.value)}
          />
          <Error>{titleError}</Error>
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <Wrapper>
          <Subject>내용</Subject>
          <ContentsBox
            type="text"
            placeholder="내용을 작성해주세요."
            value={contents}
            onChange={(e) => handleContents(e.target.value)}
          />
          <Error>{contentsError}</Error>
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <Wrapper>
          <Subject>주소</Subject>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <InputBox type="text" />
          <InputBox type="text" />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <Wrapper>
          <Subject>유튜브</Subject>
          <InputBox type="text" placeholder="링크를 복사해주세요." />
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <Wrapper>
          <Subject>사진 첨부</Subject>
          <UploadButton>
            <Image src={UploadBtn} width={78} height={78} />
            <Image src={UploadBtn} width={78} height={78} />
            <Image src={UploadBtn} width={78} height={78} />
          </UploadButton>
        </Wrapper>
      </InputWrapper>
      <InputWrapper>
        <Wrapper>
          <Subject>메인 설정</Subject>
          <RadioButtonWrapper>
            <RadioButton type="radio" id="youtube" name="radio-button" />
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <RadioButton type="radio" id="image" name="radio-button" />
            <RadioLabel htmlFor="image">사진</RadioLabel>
          </RadioButtonWrapper>
        </Wrapper>
      </InputWrapper>

      <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
    </BoardWrapper>
  );
}
