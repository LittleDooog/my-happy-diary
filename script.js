let timerInterval;
let seconds = 0;

document.getElementById("saveEntry").addEventListener("click", () => {
    const entry = document.getElementById("diary").value;
    if (entry) {
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