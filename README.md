# Noom

Zoom Clone using NodeJS, WebRTC and Websockets.

1. Nodemon을 설정하기 위해 nodemon.json을 생성했슴.
2. Nodemon은 우리의 프로젝트를 살펴보고 변경 사항이 있을 시 서버를 재시작해주는 프로그램임.
3. 서버를 재 시작하는 대신에 babel-node를 실행하게 되는데
4. Babel은 우리가 작성한 섹시한 코드를 일반 NodeJS로 컴파일 해주는데
5. 그 작업을 src/server.js 파일에 해줌.
6. server.js 파일에서는 express를 import하고, express 어플리케이션을 구성하고
7. 여기에 view engine을 Pug로 설정하고, views 디렉토리가 설정되고
8. 그리고 public 파일들에 대해서도 똑같은 작업을 해주고 있슴.
9. public 파일들은 FrontEnd에서 구동되는 코드고 이건 아주 중요한 부분임.
10. 왜냐하면 여기저기 js코드가 산재해있을 경우 어떤게 FrontEnd고 어떤게 BackEnd인지 헷갈리수 있기 때문임.
11. 그래서 이름은 app.js랑 server.js로 구분한거임.
12. server.js는 BackEnd에서 구동될거고 app.js는 FrontEnd에서 구동될거임.
13. server.js 의 app.use("/public", express.static....) 이 코드가 public 폴더를 유저에게 공개해주는 코드임.
14. 유저는 쉽게 서버 내 모든 폴더들을 들여다 볼 수 없슴. 보게 되면 보안상 안좋겠지.
15. 그래서 유저가 볼 수 있는 폴더를 따로 저장해줘야함. 그게 public 폴더임.
16. server.js 의 app.get("/", (req, res)....) 이 코드는 우리 홈피로 이동시 사용될 템플릿을 render 해주는 거임.
17. 템플릿은 views 폴더에 있는 home.pug가 대상임.
18. link(rel="stylesheet"...) 이 코드는 우리가 CSS작업을 하기 전 페이지가 너무 못생겨서 좀 덜 못생겨 보이게 해주고 있슴.
19. server.js 여기 막줄에 다가 script(src="public/js/app.js")를 import 해주는 거임.
20. server.js 의 app.get...redirect("/").. 코드는 catchall url(?)을 만들고 싶어서 추가. 이걸로 리다이렉트로 홈으로 돌려보내게 됨.
21. experss를 사용한 일반적인 NodeJS 설정이였고 package.json, script 생성, 그리고 babel 역시 다 알고 있어야함.
22. babel-node를 실행시키면 babel-node는 바로 babel.config.json을 찾을테고
23. babel.config.json 파일의 presets를 실행 시킴.
