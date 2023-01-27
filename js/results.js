import { results , mbtis } from './data.js'

//http://127.0.0.1:5500/results.html?mbti=isfj

//location.search 쿼리스트링 정보를 urlsearchParams를 통해서 조회할 수 있음
//.get('')을 통해서 값을 가져올 수 있음
const mbti = new URLSearchParams(location.search).get('mbti')
const result = results[mbtis[mbti]]

// 단일요소를 찾기때문에 quertSelector을 사용
const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
// 박스요소 하나를 찾는게 아니라 여러개의 박스요소를 찾기에 querySelectorAll을 사용
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
// lecture의 후손 img를 찾기때문에 띄어쓰기 해서 사용
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEls , index){
  boxEls.innerHTML = result.results[index]
})
jobEls.forEach(function (jobEl , index){
  jobEl.innerHTML = result.jobs [index]
})
// 해당 주소로 링크 연결
lectureEl.href = result.lectureUrl
// 해당 위치의 이미지 연결
lectureImgEl.src = result.lectureImg
