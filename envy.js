const characters = [
  {
    name: '박혜수 (까칠이)',
    color: 'green',
    image: 'img/green.png',
    envyPoints: ['화장 잘함', '노력 천재', '쪼꼬미(귀여움)', '까칠 예민보스'],
  },
  {
    name: '윤주원 (버럭이)',
    color: 'red',
    image: 'img/red.png',
    envyPoints: ['유머스러움', '바둑 천재', '탐나는 마인드', '휘파람 잘 부름'],
  },
  {
    name: '윤주혁 (따분이)',
    color: 'purple',
    image: 'img/purple.png',
    envyPoints: ['키(조금만 주라)', '운동 잘함', '힘', '친화력'],
  },
]

const template = document.getElementById('character-template')
const resetBtn = document.getElementById('resetBtn')
const grid = document.querySelector('.grid-box')
const scoreDisplay = document.getElementById('envy-score')

let envyScore = 0

// 초기화 버튼
resetBtn.onclick = () => {
  document.querySelectorAll('.box').forEach((box) => {
    box.classList.remove('envied')
    const reactionBox = box.querySelector('.jealous-reaction')
    if (reactionBox) {
      reactionBox.textContent = ''
      reactionBox.classList.remove('shake')
    }
  })
  envyScore = 0
  scoreDisplay.textContent = envyScore
}

// 캐릭터 박스 생성
characters.forEach((char) => {
  const clone = template.content.cloneNode(true)
  const box = clone.querySelector('.box')

  box.dataset.envyColor = char.color
  box.querySelector('.char-name').textContent = char.name
  box.querySelector('.char-img').src = char.image
  box.querySelector('.char-img').alt = char.name

  const ul = box.querySelector('.envy-points')
  ul.innerHTML = ''
  char.envyPoints.forEach((point) => {
    const li = document.createElement('li')
    li.textContent = point
    ul.appendChild(li)
  })

  const button = box.querySelector('.envy-btn')
  button.onclick = () => {
    if (!box.classList.contains('envied')) {
      box.classList.add('envied')
      box.style.setProperty('--envy-color', char.color)
      envyScore += 30
      scoreDisplay.textContent = envyScore

      const reactionBox = box.querySelector('.jealous-reaction')
      if (reactionBox) {
        reactionBox.textContent = '질투 폭발! 😤'
        reactionBox.classList.add('shake')
      }
    }
  }

  grid.appendChild(clone)
})
