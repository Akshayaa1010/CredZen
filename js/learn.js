const lessons = [
  {
    title: "Credit Card Basics",
    content: "A credit card lets you borrow money within a limit.",
    question: "What is a credit limit?",
    options: ["Max loan", "Borrow limit", "Bank balance"],
    answer: 1
  },
  {
    title: "Interest & Due Date",
    content: "Interest applies when you don’t pay in full.",
    question: "When is interest charged?",
    options: ["Always", "Late payment", "Cashback"],
    answer: 1
  },
  {
    title: "Credit Score",
    content: "Timely payments improve your credit score.",
    question: "Best for credit score?",
    options: ["Late pay", "Min due", "Full pay"],
    answer: 2
  },
  {
    title: "Rewards",
    content: "Cards give cashback and reward points.",
    question: "Best for cashback?",
    options: ["Debit", "Credit", "UPI"],
    answer: 1
  },
  {
    title: "Smart Usage",
    content: "Use under 30% of limit.",
    question: "Ideal utilization?",
    options: ["90%", "60%", "30%"],
    answer: 2
  }
];

const lessonList = document.getElementById("lessonList");
const lessonBox = document.getElementById("lessonBox");

function loadLessons() {
  lessonList.innerHTML = "";
  lessons.forEach((l, i) => {
    const btn = document.createElement("div");
    btn.className = "lesson-btn";
    if (localStorage.getItem("lesson" + i)) {
      btn.classList.add("completed");
    }
    btn.innerText = `Lesson ${i + 1}: ${l.title}`;
    btn.onclick = () => openLesson(i);
    lessonList.appendChild(btn);
  });
}

function openLesson(i) {
  const l = lessons[i];
  lessonBox.innerHTML = `
    <h3>${l.title}</h3>
    <p>${l.content}</p>
    <h4>${l.question}</h4>
    ${l.options.map((o, idx) =>
      `<div class="quiz-option" onclick="check(${i},${idx})">${o}</div>`
    ).join("")}
  `;
}

function check(i, ans) {
  if (ans === lessons[i].answer) {
    alert("Correct!");
    localStorage.setItem("lesson" + i, "done");
    loadLessons();
  } else {
    alert("Try again!");
  }
}

loadLessons();



