[HTTP protocol]

1. http는 stateless임. backEnd는 유저를 기억하지 못함.
   요청받으면 데이터를 던져주고 다음 요청을 대기하고 있을뿐임. 이렇게 잊는것을 stateless라고 함.
2. 그래서 서버로 메세지를 보내고 싶은데 미리 로그인이 돼있다면 cookie만 보내면 됨.
3. 서버는 갑자기 너한테 정보를 주지 않음.

[WebSocket protocol]

1. 보통은 주소에 http를 적지만 webSocket을 사용해서 연결하고 싶고,
   서버가 지원한다면 wss를 적으면 됨. Secure Web Socket(WSS)라고 함.
2. webSocket 연결(connection)이 일어날 땐 마치 악수처럼 행동함.
   브라우저가 서버로 webSocket request를 보내면 서버가 받거나 거절하거나를 함.
3. 악수가 한번 성립되면 연결은 성립(establish)되는 거임.
4. 브라우저와 서버가 손을 맞잡고 있는 것처럼 연결되어 있기 때문에 서버는 니가 누군인지 기억할 수 있슴.
5. 연결되어있기 때문에 원한다면 서버가 유저에게 메세지를 보낼 수 있슴.
6. 서버는 리퀘스트를 기다리지 않고 답장을 줄 수도 있슴.
7. 리퀘스트, 리스폰스 과정이 필요하지 않고 그냥 발생하는거임. bi-directional(양방향의) 연결이기 때문임.
8. 와이파이를 상상해 보면 됨. 연결되어 있으면 항상 유저에게 정보를 줄 수 있슴.
9. 이건 자바 스트립트 전용은 아니지만 구현된 것이 있어서 자바 스크립트에서도 사용할 수 있슴.
10. 그리고 당연히, 브라우저에는 내장된 webSocket API가 있슴.
11. webSocket은 어떤 프로그래밍 언어에 국한돼 있지 않음. 그저 protocol임.
12. webSocket은 브라우저와 backEnd사이에서만 발생하지 않음. backEnd랑 backEnd사이에서도 발생함.
13. http도 브라우저-backEnd, backEnd-backEnd 다 가능함.
    ※브라우저 = 클라이언트

[ws:a Node.js WebSocket library,https://www.npmjs.com/package/ws]

1. node.js(코딩 언어)로 webSocket서버를 만든다. ws라는 멋진 package의 도움을 받는다.
2. ws는 사용하기 편하고 아주 빠르면 클라이언트와 서버 사이의 webSocket실행에서 검증된 놈임.
3. [protocol]은 어떤 사람들이 어딘가에 있는 방에서 만나고 그리고 어떻게 일들이 진행됳지를 결정한다.
   어떻게 모든 것이 돌아가야 할지에 대한 규칙을 만든다.
   그런 다음 프로그래머는 이 규칙을 가지고 이 규칙을 따르는 코드를 만들어서 실행함.
   규칙이 가장 먼저 정해져야 됨. 그래서 Node.js를 위한 webSocket implementation(실장) 이라고 하는거다.
   C#,JAVA등등 다른언어 용으로도 webSocket implementation을 찾을수 있다.
   이 말은 이건 그냥 어떤 규칙을 따르는 코드라는 뜻이다.
   그리고 ws는 webSocket protocol을 실행하는 package 인거다.
   ws만 가지고 채팅방을 만들수는 있으나 전부 구현해야하는 어려움이 있다.
   하지만 이미 채팅방 기능이 있는 framework가 존재한다.
   그러나 우린 ws의 최소한의 기초(핵심) 공부를 위해 아직은 framework를 사용하지 않을것이다.
   ws는 webSocket의 core이다. 가장 기초적인 것이며 부가적인 유틸리티가 없다.
   ws는 webSocket의 foundation(완전 기초라는 의미)이다.
   ws를 모르고 framework를 쓴다는건 바닐라 JS를 모르고 React하는거랑 같다.
4. 터미널 [$ npm i ws]로 설치.
5. express는 http를 다루고 있지만 ws를 다루도록 할꺼다.
6.
