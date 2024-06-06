const ffmpeg = require('fluent-ffmpeg');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const INPUT_PATH = path.join(__dirname, 'input_video.mp4'); // 원본 영상 파일 경로
const OUTPUT_PATH = path.join(__dirname, 'public', 'output_video.mp4'); // 변환된 영상 파일 경로

// FFmpeg를 사용하여 영상 변환 함수
function convertVideo(callback) {
    console.log("INPUT_PATH->",INPUT_PATH)
    console.log("OUTPUT_PATH->",OUTPUT_PATH)
  ffmpeg(INPUT_PATH)
    .output(OUTPUT_PATH)
    .on('end', () => {
      console.log(`변환 완료: ${OUTPUT_PATH}`);
      callback(null);
    })
    .on('error', (err) => {
      console.error(`변환 오류: ${err.message}`);
      callback(err);
    })
    .run();
}

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));

// 영상 변환 요청 처리
app.get('/convert', (req, res) => {
  convertVideo((err) => {
    if (err) {
      res.status(500).send('영상 변환 중 오류가 발생했습니다.');
      return;
    }
    res.send('영상 변환이 완료되었습니다. <a href="/video">영상 보기</a>');
  });
});

// 변환된 영상 페이지
app.get('/video', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'video.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});