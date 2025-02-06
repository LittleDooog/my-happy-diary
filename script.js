let timerInterval;
let seconds = 0;

document.getElementById("saveEntry").addEventListener("click", () => {
    const entry = document.getElementById("diary").value;
    if (entry) {
        localStorage.setItem("happinessEntry", entry);
        alert("小狗的幸福日记保存成功！");
        document.getElementById("diary").value = '';
    } else {
        alert("请输入内容再保存！");
    }
});

document.getElementById("generateTask").addEventListener("click", () => {
    const tasks = [
        "今天对主人撒个娇",
        "读一本新书的第一章",
        "整理你的小物品",
        "散步15分钟",
        "试着画一幅简单的小插画"
    ];
    const randomIndex = Math.floor(Math.random() * tasks.length);
    document.getElementById("randomTask").innerText = tasks[randomIndex];
});

document.getElementById("startTimer").addEventListener("click", () => {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById("timeDisplay").innerText = new Date(seconds * 1000).toISOString().substr(11, 8);
    }, 1000);
});

document.getElementById("stopTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    document.getElementById("timeDisplay").innerText = "00:00";
});
function toggleLesson(id) {
    const content = document.getElementById(id);
    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
document.getElementById("saveLesson1Note").addEventListener("click", () => {
    const noteContent = document.getElementById("lesson1Note").value;
    if (noteContent) {
        // 显示在网页中
        const displayedNotes = document.getElementById("displayedNotes1");
        const noteItem = document.createElement("p");
        noteItem.textContent = noteContent;
        displayedNotes.appendChild(noteItem);

        // 同时保存到Local Storage
        localStorage.setItem("lesson1Note", noteContent);
        alert("心得已保存并显示！");
    } else {
        alert("请输入心得内容！");
    }
});
// 在页面加载时，恢复第一课的心得
window.addEventListener("load", () => {
    const savedNote = localStorage.getItem("lesson1Note");
    if (savedNote) {
        const displayedNotes = document.getElementById("displayedNotes1");
        const noteItem = document.createElement("p");
        noteItem.textContent = savedNote;
        displayedNotes.appendChild(noteItem);
    }
});
document.getElementById("saveLesson2Note").addEventListener("click", () => {
    const noteContent = document.getElementById("lesson2Note").value;
    if (noteContent) {
        const displayedNotes = document.getElementById("displayedNotes2");
        const noteItem = document.createElement("p");
        noteItem.textContent = noteContent;
        displayedNotes.appendChild(noteItem);

        localStorage.setItem("lesson2Note", noteContent);
        alert("第二课的心得已保存并显示！");
    } else {
        alert("请输入心得内容！");
    }
});
// 在页面加载时，恢复第二课的心得
window.addEventListener("load", () => {
    const savedNote = localStorage.getItem("lesson2Note");
    if (savedNote) {
        const displayedNotes = document.getElementById("displayedNotes2");
        const noteItem = document.createElement("p");
        noteItem.textContent = savedNote;
        displayedNotes.appendChild(noteItem);
    }
});
document.getElementById("saveLesson3Note").addEventListener("click", () => {
    const noteContent = document.getElementById("lesson3Note").value;
    if (noteContent) {
        const displayedNotes = document.getElementById("displayedNotes3");
        const noteItem = document.createElement("p");
        noteItem.textContent = noteContent;
        displayedNotes.appendChild(noteItem);

        localStorage.setItem("lesson3Note", noteContent);
        alert("第三课的心得已保存并显示！");
    } else {
        alert("请输入心得内容！");
    }
});
// 在页面加载时，恢复第三课的心得
window.addEventListener("load", () => {
    const savedNote = localStorage.getItem("lesson3Note");
    if (savedNote) {
        const displayedNotes = document.getElementById("displayedNotes3");
        const noteItem = document.createElement("p");
        noteItem.textContent = savedNote;
        displayedNotes.appendChild(noteItem);
    }
});