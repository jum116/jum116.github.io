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

    const labels = profile.radarLabels;
    const values = profile.radarValues;

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

document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.dataset.key;

    if (profile[key] !== undefined) {
        element.innerHTML = profile[key];
    }
});

createProjects(projects, "project-list", false);
createProjects(teamProjects, "team-project-list", true);

function createProjects(list, elementId, isTeam) {

    const container = document.getElementById(elementId);

    list.forEach(project => {

        container.innerHTML += `

        <div class="project-card">

            <h3>${project.title}</h3>

            <video controls muted playsinline preload="metadata" poster="${project.poster}">
                <source src="${project.video}" type="video/mp4">
            </video>

            <ul class="project-tech">

                <li>制作目的：${project.purpose}</li>
                <li>制作期間：${project.period}</li>
                <li>エンジン：${project.engine}</li>
                <li>使用言語：${project.language}</li>
                <li>ジャンル：${project.genre}</li>

                ${isTeam ? `
                <li>チーム人数：${project.teamSize}</li>

                <li>自分の役割
                    <ul>
                        ${project.role.map(role => `<li>${role}</li>`).join("")}
                    </ul>
                </li>
                ` : ""}

            </ul>

            <div class="project-links">

                <a href="${project.github}" target="_blank">
                    GitHubを開く
                </a>

                <a href="${project.download}" target="_blank">
                    Windows版をダウンロード
                </a>

            </div>

            <button
                class="open-modal-btn"
                onclick="openModal('modal-${project.id}')">

                詳細を表示

            </button>

        </div>

        <div id="modal-${project.id}" class="modal">

            <div class="modal-content">

                <span
                    class="close-btn"
                    onclick="closeModal('modal-${project.id}')">

                    &times;

                </span>

                <h2>${project.title}</h2>

                <h3 class="section-title">
                    制作時の課題と工夫
                </h3>

                ${project.issues.map(issue => `

                <div class="issue-block">

                    <h4 class="issue">
                        課題：${issue.issue}
                    </h4>

                    <p>${issue.detail}</p>

                    <h4 class="solution">
                        解決方法：${issue.solution}
                    </h4>

                    <p>${issue.solutionDetail}</p>

                </div>

                `).join("")}

                <h3 class="section-title">
                    本制作を通して得た学び
                </h3>

                <p>${project.learning}</p>

            </div>

        </div>

        `;
    });

}

document.querySelector('[data-key="github"]').href = links.github;

const mail = document.querySelector('[data-key="mail"]');
mail.href = `mailto:${links.mail}`;
