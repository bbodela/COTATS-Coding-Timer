![Group 3](https://user-images.githubusercontent.com/59829298/90852730-41c06380-e3b3-11ea-953e-e9e6543fba10.png)

# COTATS

공부 집중을 도와주는 웹페이지, COTATS입니다.

COTATS는 Time과 Codestates 두 단어를 조합하여 만들었습니다.

코드스테이츠 과정을 진행하면서, 내가 어느 정도 공부했고
또 다른 수강생들은 얼마나 공부하는 지 대략적으로 알 수 있게 도와줍니다.

1. 집중해서 공부를 시작할 때 start를 누르고, 잠시 쉴 때는 pause 버튼을 누름으로써
   실제 자신이 집중한 시간을 알 수 있습니다.

2. 우측에 햄버거 메뉴를 통해 나타나는 사용자들의 공부시간과 랭킹을 통해, 다른 사람의 공부량을 알 수 있습니다.

# Getting Started

**Using npm**

1. 이 repository를 **다운로드** or **Git Clone** 받으십시오.
2. 상위디렉토리/server/client 폴더에서 각각 npm install을 하십시오.

```js
$ npm install
```

3. client를 실행하십시오.

```js
$ npm run start
```

url: http://cotats-client-mine.s3-website.ap-northeast-2.amazonaws.com/timer

# Functional List

1. SignIn/ SignOut/ SignUp

- 로그인
- 로그아웃
- 회원가입

2. Timer

- start 버튼: 메인 페이지의 스톱워치 작동 시작
- stop 버튼: 메인 페이지의 스톱워치 종료 및 저장
- pause 버튼: 메인 페이지의 스톱워치 일시정지

3. Modal (Menu)

- 본인과 모든 사용자의 실시간 랭킹을 확인
- 주간 누적 공부시간과 랭킹 확인
- 월간 누적 공부시간과 랭킹 확인

# Wireframe

<details>
<summary>Wireframe</summary>
<div markdown="1">
   
![스크린샷, 2020-10-14 17-32-18](https://user-images.githubusercontent.com/59829298/95964183-7dbbf600-0e43-11eb-816e-47e436f57cb7.png)
</div>
</details>

# Flow chart

<details>
<summary>Wireframe</summary>
<div markdown="1">
   
- 시작
![My First Board (1)](https://user-images.githubusercontent.com/59818904/89965989-1a69e800-dc89-11ea-92ee-d5b907afdab0.jpg)
   
- 최종
![My First Board (4)](https://user-images.githubusercontent.com/59829298/90850703-66194180-e3ad-11ea-9262-a00e7933824d.jpg)
</div>
</details>

# Features

- 로그인
- 로그아웃
- 회원가입
- 타이머 기능
- 타이머 일시정지
- 타이머 중지(시간기록, 저장)
- 오늘의 랭킹
- 주간 랭킹조회
- 월간 랭킹조회

# API docs

- https://adelabbok.gitbook.io/cotats-timer/

# Schema

![스키마](https://user-images.githubusercontent.com/59818904/89965880-cd861180-dc88-11ea-9e68-5e7adf04cf83.png)

# Dependencies

- React
- React-Router
- React-Hooks
- styled-components
- material-ui

# Made by

## Donghun, Kim / frontend / leader

- GMail: kisses217@gmail.com
- GitHub Id: @rlaehdgns217

## Bokyung, Kwon / frontend / member

- GMail: adelabbok@gmail.com
- GitHub Id: @bbodela

## Doyeon, Kim / backend / member

- GMail: gothone7092@gmail.com
- GitHub Id: @doyeonkim7092

## Jongwan, Kim / backend / member

- GMail: kjw900901@gmail.com
- GitHub Id: @kimjongwan2
