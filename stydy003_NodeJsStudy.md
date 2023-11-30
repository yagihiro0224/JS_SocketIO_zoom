https://youtu.be/Tt_tKhhhJqY

1. LTS(Long Time Support). 안정적인 버전의 node.js를 설치한다.
2. 작업 폴더는 왠만하면 영어로 작성할것.
3. 보통 브라우저에 JS가 있어서 거기 콘솔창에서 JS 코드를 실행하지만
   NodeJS를 설치하면 내 컴퓨터에서 코드 실행이 가능하다.
4. [npm]node package manager의 약자.
   필요한 툴들이 있으면 가져다가 쓰는 개념.
   그 안에 express가 있다.
5. 터미널: npm init
   npm을 사용하겠다는 초기 설정. 설정이 완료되면 package.json이 생성 된다.
6. package.json 현재 npm으로 인스톨된 툴들의 정보가 보인다.
7. npm install XXX 혹은 npm i XXX
   툴을 인스톨 한다. 기본적으로 현재 사용중인 폴더에만 적용된다.
   옵션으로 -g를 쓰면 컴퓨터 모든 경로에서 해당 툴을 사용할수 있게 된다.
   예전에는 --save 라고 옵션을 줘야 package.json이 생겼지만 지금은 그냥 없어도 된다.
   삭제는 npm uninstall XXX(삭제는 ui가 아니였다).
8. package.json, dependencies에는 인스톨 된 툴들의 대략적인 정보가 써있고
   package-lock.json에는 툴들의 상세 정보가 써있다.
9. [node_modules]폴더 안에 우리가 인스톨한 툴들의 상세 코드 파일들이 들어있다.
10. 글자로 그림 그리는 걸 아스키 아트라고 부른다.
11. [Express]모듈. node.js기반의 웹 프레임워크를 만드는것.
    [웹 프레임워크]프론트 엔드와 백엔드의 요청-응답의 기능을 해주게 하는 역할.
12. 윈도우에서 서버를 끄는 명령어 ctrl + c
13. [port]항구에 있는 배를 묶을수 있는 선착장의 개념.
    서버에서 listen을 하고 있는 포트로 들어가야 한다.
    겉으로는 안보이지만 우리는 포트로 접속하고 있다.
    몇번 포트는 뭘로 쓰자는 정해진 규격이 있다.
    예:HTTP - 80(TCP), HTTPS - 443(TCP)
    port마다 다른 프로그램을 사용할 수 있다.
14. [localhost]내 컴퓨터의 IP를 궂이 안쓰고 이걸 쓰면 됨.
15. [listen]port(localhost:3000)에 대해서 듣고 있는중. 이 포트로 들어오면 뭐뭐를 실행해라.
      <pre>
      app.listen(port, (실행하고 나서 할 처리들) => { 실행할 내용 })
      </pre>
16. [get]함수.
      <pre>
      app.get('/', (req, res) => {res.send('Hello World!)})
      // [app.get]HTTP메소드('/'라우팅, (req, res) => {}콜백함수)
      // res.send 응답에다가 Hello World를 send 보내겠다.
      // [res]받은 요청. [res]보내는 응답. 둘다 콜백함수이다.
      </pre>
17. [get방식]주소창에서 데이터를 전달.
    [post방식]주소창이 아니라 내부적으로 body에 데이터 전달.
18. [라우팅]웹페이지의 경로를 의미.
    '/'는 아무것도 입력 안한 초기 경로. root.
19. [콜백함수]함수(끝나고 실행할 함수<-다른 코드의 인수로서 넘겨주는 실행 가능한 코드)
20. setTimeout(()=>{},1000) 1000미리세컨드 뒤에 [()=>{}]콜백함수를 실행해라.
21. JSON(JavaScript Object Notation).

