## :: 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제 ::

## ✔️ 과제 목록

### Assignment 1 - Login/SignUp

- /auth 경로에 로그인/ 회원가입 기능을 개발

  - ✅ 로그인(/), 회원가입(/signup)을 별도의 경로로 분리
  - ✅최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성

- 이메일과 비밀번호의 유효성 확인

  - ✅이메일 조건 (최소 @, . 포함)/비밀번호 조건 (8자 이상 입력)
  - ✅이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야만 제출 버튼 활성화

- 로그인 API 를 호출하고, 올바른 응답을 받았을 때 루드 경로로 이동
  - ✅응답으로 받은 토큰은 로컬 스토리지에 저장
  - ❌다음 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
  - ❌토큰이 유효하지 않을 시 사용자에게 알리고 로그인 페이지로 리다이렉트

### Assignment 2 - Todo List

- Todo List API 를 호출하여 Todo List CRUD 기능 구현

  - ✅목록 / 상세 영역으로 나누어 구현
  - ✅Todo 목록 (getTodos-GET)
  - ✅Todo 추가 (createTodo)
  - ✅Todo 수정 (updateTodo)
  - ✅Todo 삭제 (deleteTodo)

- 한 화면 내에서 Todo List 와 개별 Todo 의 상세를 확인

  - ✅새로고침 했을 때 현재 상태 유지
  - ✅개별 Todo 를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
  - ❌수정되는 Todo 의 내용이 목록에도 실시간으로 반영

## ✔️ 개발 결과

### Assignment 1 - Login/SignUp

- login
  ![image](https://user-images.githubusercontent.com/64029753/183293881-51a05edb-e20f-47b8-8e52-3b2e6156f983.png)

- signup
  ![image](https://user-images.githubusercontent.com/64029753/183293900-ff8c4514-d30d-402a-ac53-b4dfabea83f7.png)

### Assignment 2 - Todo List

- Todo 목록 / 상세  
  ![image](https://user-images.githubusercontent.com/64029753/183293921-de681039-803e-4028-b5c3-8e184e4e6504.png)

- Todo 추가
  ![image](https://user-images.githubusercontent.com/64029753/183293980-dab404f5-d146-4e87-ac03-e3fb87e5f10e.png)

- Todo 수정
  ![image](https://user-images.githubusercontent.com/64029753/183294096-1c4c28e7-d5f7-4139-a4c7-88c06d4dd2b7.png)

- Todo 삭제
  ![image](https://user-images.githubusercontent.com/64029753/183294221-ecbd91d5-56f1-4d69-874f-6e71c1ff9cdb.png)

## ✔️ 보충할 부분

- 토큰 관리 및 라우팅

  - 토큰이 있을 때와 없을 때 어떻게 구분하며, 리다이렉트를 어떻게 처리할 것인지
  - 토큰의 유효성 검사는 어떻게 할 것인지
  - 중첩 라우팅 개념 부족
  - useSearchParams 에 대한 이해가 더 필요

- Todo

  - 수정이 되었을 때 어떻게 목록을 최신화 할 것인지

- 프로젝트 전체
  - api 를 연결하면서 컴포넌트들이 복잡하게 얽히게 됨. 이를 해결하기 위해 전역 상태관리 도입이 필요
  - 중복되는 input handling 같은 경우는 하나의 hook 으로 만드는 것이 좋을듯함
