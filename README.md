# 씨드로닉스 사전 과제 2

## 사전 문제 2 - 다음의 기능을 수행하는 최소 지연 시간을 갖는 페이지를 설계해 보시오.
1. 영상 스트리밍 기능: 임의의 파일 또는 주소로부터 스트리밍 되는 영상을 디코딩 하여 화면에
출력
2. 스트리밍 데이터 수신 또는 프레임 데이터 로드 시간과 화면 출력 시간에 대한 차이 값을 영상
출력 화면에 표기 (지연시간)
3. FFmpeg 을 제외한 외부 라이브러리 사용 불가


## resolve
 - 개발 환경
 - vscode 
 - javascript
 - node.js(Express)
 - HTML5
  
### 1. node.js 프로젝트에서 패키지를 설치합니다.
     npm install express fluent-ffmpeg @ffmpeg-installer/ffmpeg 

### 2. 서버의 스크립트를 실행합니다.
    node app.js

### 3.input_video.mp4 영상 파일을 output_video.mp4 영상 파일로 변환
  - 브라우저에서 **localhost:3000/covert**에 접속하면 영상 변환을 시작합니다.

### 4.변환 된 영상을 출력합니다.
- 변환이 완료된 후 제공된 링크를 클릭하면, **localhost:3000/video**로 접속해 영상을 출력합니다.


### 5. 출력 된 영상의 프레임 데이터 로드 시간과 화면 출력 시간에 차이값을 출력
   