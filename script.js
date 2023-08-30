document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("tbody");

    for (let i = 1; i <= 124; i++) {
        const row = document.createElement("tr");

        // No
        const numberCell = document.createElement("td");
        numberCell.style.padding = "2px";
        numberCell.style.textAlign = "center";
        numberCell.style.minWidth = "50px";
        numberCell.textContent = "No. " + i;

        // 画像
        const imageCell = document.createElement("td");
        const image = document.createElement("img");

        image.src = `resource/${i}.png`;
        image.height = 48;
        image.width = 48;
        image.style.borderRadius = "10px";
        image.style.border = "solid 1px #777777";
        imageCell.appendChild(image);
        


        // アクション名
        const actionName = document.createElement("td");
        actionName.style.padding = "5px";
        actionName.style.width = "180px";
        actionName.style.fontWeight = "bold";
        actionName.style.fontSize = "12px";
        actionName.textContent = "コンヴィクション・マルカート";
        actionName.style.minWidth = "200px";

        const castCell = document.createElement("td");
        castCell.style.fontSize = "12px";
        castCell.style.minWidth = "55px";
        castCell.textContent = "Instant";

        const recastCell = document.createElement("td");
        recastCell.style.width = "20px";
        recastCell.style.fontSize = "12px";
        recastCell.style.minWidth = "70px";
        recastCell.textContent = "2.50s";

        const actionProperty = document.createElement("td");
        actionProperty.style.textAlign = "left";
        actionProperty.style.fontSize = "12px";
        actionProperty.style.width = "250px";
        actionProperty.textContent = "対象に物理攻撃。WWWWWWWWWWWWW\n 威力：200";

        const memoCell = document.createElement("td");
        memoCell.style.fontSize = "12px";
        memoCell.textContent = "WWWWWWWWWWWWW";

        row.appendChild(numberCell);
        row.appendChild(imageCell);
        row.appendChild(actionName);
        row.appendChild(castCell);
        row.appendChild(recastCell);
        row.appendChild(actionProperty);
        row.appendChild(memoCell);

        tableBody.appendChild(row);
    }
});