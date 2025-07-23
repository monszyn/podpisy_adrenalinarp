let logos = {
    "sasp": "./images/san_andreas_state_police.png",
    "sasd": "./images/sheriffs_department.png",
    "doj": "./images/department_of_justice.png",
    "sams": "./images/san_andreas_medical_services.png",
    "scm": "./images/scm.png",

}

let departamentsText = {
    "doj": "Los Santos Department Of Justice",
    "sams": "San Andreas Medical Service",
    "scm": "Salazar Car Mechanic",
    "sasd": "San Andreas Sheriff's Department",
    "sasp": "San Andreas State Police"
}

let select = 'lspd'

function generateText() {
    let canvas = document.getElementById("canvas");
    let textInput = document.getElementById("textInput").value;
    let textInput2 = document.getElementById("textInput2").value;

    canvas.width = 750;
    canvas.height = 340;

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    let dotsImage = new Image();
    dotsImage.onload = function () {
        ctx.drawImage(dotsImage, 0, 0, 214, 214);

        ctx.font = "90px HerrVonMuellerhoff";
        let textWidth = ctx.measureText(textInput).width;
        let textX = (canvas.width - textWidth) / 2 + 90;
        let textY = (canvas.height / 2) - 10;

        ctx.save();
        ctx.translate(textX, textY);
        let angleInRadians = 3 * Math.PI / 180;
        ctx.rotate(-angleInRadians);
        ctx.fillText(textInput, 0, 0);
        ctx.restore();

        ctx.font = "30px Montserrat";
        let downText = 'Signature';
        let downTextWidth = ctx.measureText(downText).width;
        let downTextX = (canvas.width - downTextWidth) / 2 + 90;
        let downTextY = (canvas.height / 2) + 30;
        ctx.fillText(downText, downTextX, downTextY);

        ctx.font = "20px Cinzel";
        let departamentText = departamentsText[select];
        let departamentTextWidth = ctx.measureText(departamentText).width;
        let departamentTextX = (canvas.width - departamentTextWidth) / 2 + 90;
        let departamentTextY = (canvas.height / 2) + 60;
        ctx.fillText(departamentText, departamentTextX, departamentTextY);

        ctx.font = "italic 30px LibreBaskerville";
        let rankText = textInput2;
        let rankTextWidth = ctx.measureText(rankText).width;
        let rankTextX = (canvas.width - rankTextWidth) / 2 + 90;
        let rankTextY = (canvas.height / 2) - 120;
        ctx.fillText(rankText, rankTextX, rankTextY);

        ctx.font = "3px Montserrat";
        let dotSize = 5;
        let dotSpacing = 6;
        let dotX = (canvas.width / 2) - 150;
        let dotY = (canvas.height / 2) - 10;
        let dotCount = 45;

        ctx.fillStyle = "black";
        for (let i = 0; i < dotCount; i++) {
            ctx.fillRect(dotX, dotY, dotSize, dotSize);
            dotX += dotSize + dotSpacing;
        }
    };
    dotsImage.src = logos[select];
}

document.getElementById("textInput").addEventListener("keyup", function (event) {
    event.preventDefault();
    generateText();
})

document.getElementById("textInput2").addEventListener("keyup", function (event) {
    event.preventDefault();
    generateText();
})

document.getElementById("selectMenu").addEventListener("change", function (event) {
    select = event.target.value;
    console.log(select)
    generateText();
})

document.getElementById("download").addEventListener("click", function (event) {
    let canvas = document.getElementById("canvas");
    let downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = "podpis.png";
    downloadLink.click();
});
