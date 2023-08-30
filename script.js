document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("tbody");

    for (let i = 1; i <= 124; i++) {
        const row = document.createElement("tr");

        const numberCell = document.createElement("td");
        numberCell.style.padding = "2px";
        numberCell.textContent = "No. " + i;
        numberCell.style.textAlign = "center";

        const imageCell = document.createElement("td");
        const image = document.createElement("img");

        image.src = `resource/${i}.png`;
        image.height = 48;
        image.width = 48;
        image.style.borderRadius = "10px";
        image.style.border = "solid 1px #777777";
        imageCell.appendChild(image);
        imageCell.style.maxWidth = 50;
        



        const actionName = document.createElement("td");
        actionName.style.padding = "5px";
        actionName.style.fontWeight = "bold";
        actionName.style.fontSize = "12px";
        actionName.textContent = "コンヴィクション・マルカート";

        const actionProperty = document.createElement("td");
        actionProperty.style.textAlign = "left";
        actionProperty.style.fontSize = "12px";
        actionProperty.textContent = "対象に物理攻撃。WWWWWWWWWWWWW\n 威力：200";

        const memoCell = document.createElement("td");
        memoCell.style.fontSize = "12px";
        memoCell.textContent = "WWWWWWWWWWWWW";

        row.appendChild(numberCell);
        row.appendChild(imageCell);
        row.appendChild(actionName);
        row.appendChild(actionProperty);
        row.appendChild(memoCell);

        tableBody.appendChild(row);
    }
});