# COTATS

![cotats_b](https://user-images.githubusercontent.com/59829298/90852410-5ea86700-e3b2-11ea-8999-f37f52f4dfe0.png)

공부 집중을 도와주는 웹페이지, COTATS입니다.

COTATS는 Time과 Codestates에서 글자를 조합해 만들어졌습니다.

코드스테이츠 과정을 진행하면서, 내가 어느 정도 공부해야되는지 대략적으로라도 알 수 있게 도와줍니다.

1. 집중해서 공부를 시작할 때 start를 누르고, 잠시 쉴 때는 pause 버튼을 누름으로써 
   실제 자신이 집중한 시간을 알 수 있습니다.

2. 우측에 햄버거 메뉴를 통해 나타나는 공부시간랭킹을 통해, 다른 사람이
   어느정도로 공부하는지 알 수 있습니다.

# Getting Started
Using npm
1. 이 repository를 **다운로드** or **Git Clone** 받으십시오.
2. 상위디렉토리/server/client 폴더에서 각각 npm install을 하십시오.
```js
$ npm install
```
3. client를 실행하십시오.
```js
$ npm run start
```
url: http://cotats-client.s3-website.ap-northeast-2.amazonaws.com

# Wireframe
<details>
<summary>Wireframe</summary>
<div markdown="1">
<img width="988" alt="KakaoTalk_Photo_2020-08-12-11-24-07" src="https://user-images.githubusercontent.com/59818904/89968296-75520e00-dc8e-11ea-8b90-59a5632c9f2f.png">
</div>
</details>



# Functional List
- login 버튼을 통해 접속할 수 있습니다
- signup 버튼을 통해 서비스를 이용할 수 있습니다
- 우측 상단 햄버거 메뉴를 통해 본인의 실시간 랭킹을 확인할 수 있습니다
- 우측 상단 햄버거 메뉴를 통해 다른 유저들의 누적 공부시간 랭킹을 확인할 수 있습니다
- start 버튼을 통해 메인 페이지의 스톱워치를 사용할 수 있습니다
- stop 버튼을 통해 메인 페이지의 스톱워치를 종료할 수 있습니다
- pause 버튼을 통해 메인 페이지의 스톱워치를 일시정지 할 수 있습니다


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
- https://app.gitbook.com/@cotats/s/cotats/user/signin.js

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
 
