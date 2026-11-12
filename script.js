
console.log("자기소개 페이지 JS 연결 완료");

const changeBtn=document.querySelector("#changeBtn");
const result=document.querySelector("#result");

changeBtn.addEventListener("click",function () {
	result.textContent="버튼을 눌렀습니다!";
});


changeBtn.addEventListener("mouseover", function () {
    result.textContent = "마우스 올렸네?";
})

const introText=document.querySelector("#introText");
const changeIntroBtn=document.querySelector("#changeIntroBtn");

const introList= [
	"안녕하세요. 저는 웹기초 부트캠프를 듣고 있습니다.",
	"저는 사용자에게 편한 서비스를 만드는 것에 관심이 있습니다.",
	"HTML, CSS, JavaScript를 활용해 자기소개 페이지를 만들고 있습니다.",
	"앞으로 프로젝트 경험을 쌓으며 성장하고 싶습니다.",
	"웹기초 파이팅!"
];

let currentIndex=0;

changeIntroBtn.addEventListener("click",function () {
	currentIndex=currentIndex+1;

	if (currentIndex>=introList.length) {
		currentIndex=0;
	}
	
	introText.textContent=introList[currentIndex];
});

const themeBtn=document.querySelector("#themeBtn");

themeBtn.addEventListener("click",function () {
	document.body.classList.toggle("dark");
});

const goalInput = document.querySelector("#goalInput");
const addGoalBtn = document.querySelector("#addGoalBtn");
const goalList = document.querySelector("#goalList");
const errorMessage = document.querySelector("#errorMessage");
const goalCount = document.querySelector("#goalCount");

let goalTotal=0;

function updateGoalCount() {
	goalCount.textContent=`현재 목표 ${goalTotal}개`;
}



function addGoal() {
	const goalText=goalInput.value.trim();

	if (goalText==="") {
		errorMessage.textContent="목표를 입력해주세요.";
		return;
  }

	errorMessage.textContent="";

	const li=document.createElement("li");
	li.classList.add("goal-item");

	const span=document.createElement("span");
	span.textContent=goalText;
	span.classList.add("goal-text");

	const deleteBtn=document.createElement("button");
	deleteBtn.textContent="삭제";
	deleteBtn.classList.add("delete-btn");

	span.addEventListener("click",function () {
		span.classList.toggle("done");
  });

	deleteBtn.addEventListener("click",function () {
		li.remove();
		goalTotal=goalTotal-1;
		updateGoalCount();
  });

	li.appendChild(span);
	li.appendChild(deleteBtn);
	goalList.appendChild(li);

	goalTotal=goalTotal+1;
	updateGoalCount();

	goalInput.value="";
}

addGoalBtn.addEventListener("click",addGoal);


console.log("1. 첫 번째 명령 실행");

setTimeout(() => {
  console.log("2. 2초 뒤에 실행되는 명령!");
}, 2000);

console.log("3. 두 번째 명령 실행");


const first = function (callback) {
  console.log("콜백 함수 안의 함수");
  callback();
};

const second = function () {
  console.log("콜백 함수");
};

first(second); // first() 다음에 second() 실행

class UserStorage {
  // 사용자 로그인
  loginUser(id, password) {
    // 시간이 걸리는 작업이므로 Promise 객체를 반환
    return new Promise((resolve, reject) => {
      // 1초(1000ms) 동안 서버와 통신한다고 가정(비동기)
      setTimeout(() => {
        // 아이디와 비밀번호가 같으면 성공(resolve) 처리
        if ((id === 'bomin' && password === '1234') ||
            (id === 'web' && password === '1234')) {
          resolve(id); // 성공 시 id 값을 then으로 넘겨줌
        } else {
          // 일치하지 않으면 실패(reject) 처리
          reject(new Error('user not found')); 
        }
      }, 1000);
    });
  }

  // 로그인된 사용자의 권한을 가져옴
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'bomin') {
          // 권한이 확인되면 데이터 전달
          resolve({ name: 'bomin', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('id를 입력하세요');
const password = prompt('password를 입력하세요');

// 콜백 지옥 없이 .then()으로 꼬리를 물어 순차적으로 실행
userStorage
  .loginUser(id, password)      // 1. 로그인 시도
  .then(userStorage.getRoles)   // 2. 로그인이 성공(resolve)하면 권한 요청
  .then(user => alert(`${user.name}님은 ${user.role}입니다.`)) // 3. 권한까지 가져오면 알림창 띄우기
  .catch(console.log);          // 4. 중간에 하나라도 실패(reject)하면 에러 출력

  // ms(밀리초)만큼 대기하는 비동기 함수 (Promise 반환)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 1초 기다렸다가 사과를 반환하는 함수 (async를 붙여 비동기 함수로 만듦)
async function getApple() {
  await delay(1000); // 1초가 지날 때까지 여기서 코드 실행을 멈추고 대기함
  return '🍎';
}

// 1초 기다렸다가 바나나를 반환하는 함수
async function getBanana() {
  await delay(1000); // 여기서 또 1초 대기함
  return '🍌';
}

// 두 과일을 모두 가져오는 최종 함수
async function pickFruits() {
  // getApple()이 끝날 때까지 기다렸다가 결과(사과)를 변수에 담음
  const apple = await getApple(); 
  
  // 사과를 가져온 후, getBanana()가 끝날 때까지 기다렸다 결과를 담음
  const banana = await getBanana(); 
  
  // 총 2초(1초+1초)가 걸린 뒤 합쳐서 반환
  return `${apple} + ${banana}`;
}

// 실행 및 출력
pickFruits().then(console.log);

// 1. 제어할 태그들 전부 가져오기
const serverMsg = document.querySelector('#server-msg');
const myMsg = document.querySelector('#my-msg');
const nameInput = document.querySelector('#guest-name');
const msgInput = document.querySelector('#guest-msg');
const submitBtn = document.querySelector('#submit-btn');

// 2. 1.5초 뒤에 문자열 하나를 주는 함수
function getMessageData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      // 1.5초 뒤에 이 글자를 전달함
      resolve("익명: 웹 기초 파이팅!"); 
    }, 1500);
  });
}

// 3. 기다렸다가 화면 글자 바꾸기
async function initGuestbook() {
  // getMessageData가 끝날 때까지 1.5초 대기! (await)
  const data = await getMessageData();
  
  // 1.5초 뒤 데이터가 도착하면, 저번 시간에 배운 textContent로 글자 바꾸기
  serverMsg.textContent = data; 
}

isFirst = true; // 첫 번째 글인지 확인하는 스위치

// 4. 버튼 눌러서 새 방명록 띄우기
submitBtn.addEventListener('click', function() {
  const name = nameInput.value;
  const msg = msgInput.value;

  // 빈칸이면 멈춤
  if (name === '' || msg === '') {
    alert("이름과 메시지를 모두 입력해주세요.");
    return;
  }

  //const result = name + ": " + msg;

  // 저번 시간에 배운 textContent로 화면의 글자를 내가 쓴 걸로 덮어씌움
  //myMsg.textContent = result;
  const result = name + ": " + msg + "<br><br>";
  //myMsg.innerHTML = myMsg.innerHTML + result;
  if (isFirst === true) {
// 1. 기존 안내 문구를 아예 무시하고, 내 방명록으로 싹 덮어씌워버림
	myMsg.innerHTML = result;
	isFirst = false;
	} else {
// 두 번째 글부터는 스위치가 꺼져있으니까, 여기로 넘어와서 계속 누적됨
		myMsg.innerHTML = myMsg.innerHTML + result;
	}

  // 입력칸 빈칸으로 초기화
  nameInput.value = '';
  msgInput.value = '';
});

// 페이지 열리면 함수 실행
initGuestbook();