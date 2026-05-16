// モーダルを開く
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
    }
}

// モーダルを閉じる
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}

// モーダル外クリックで閉じる
window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

const canvas = document.getElementById("radarChart");

if (canvas) {
    const ctx = canvas.getContext("2d");

    const labels = [
        "1",
        "2",
        "3",
        "4",
        "5"
    ];

    const values = [90, 100, 20, 80, 50];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    const count = labels.length;

    function drawPolygon(scale) {
        ctx.beginPath();

        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius * scale;
            const y = centerY + Math.sin(angle) * radius * scale;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.strokeStyle = "#ccc";
        ctx.stroke();
    }

    // 背景グリッド
    for (let i = 0.2; i <= 1; i += 0.2) {
        drawPolygon(i);
    }

    // 軸とラベル
    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "#ddd";
        ctx.stroke();

        ctx.fillStyle = "#333";
ctx.font = "16px sans-serif";

const textWidth = ctx.measureText(labels[i]).width;

let textX = x - textWidth / 2;
let textY = y;

// 上下位置を少し補正
if (y < centerY) textY -= 10;
if (y > centerY) textY += 20;

ctx.fillText(labels[i], textX, textY);
    }

    // データ描画
    ctx.beginPath();

    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
        const valueRadius = radius * (values[i] / 100);

        const x = centerX + Math.cos(angle) * valueRadius;
        const y = centerY + Math.sin(angle) * valueRadius;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fillStyle = "rgba(44,95,168,0.4)";
    ctx.fill();
    ctx.strokeStyle = "#2c5fa8";
    ctx.lineWidth = 2;
    ctx.stroke();
}