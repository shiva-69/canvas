const polygon = [
  //Stage  : DO NOT DELETE
  // [
  //   {
  //     x: 100,
  //     y: 400,
  //     bgColor: "#0E0E0E",
  //     fontColor: "#FFFFFF",
  //     font: "16px Arial",
  //     XtextShift: 15,
  //     YTextShift: 80,
  //     text: "STAGE",
  //     angle: -80,
  //   },
  //   { x: 150, y: 420 },
  //   { x: 130, y: 520 },
  //   { x: 80, y: 500 },
  // ],
];

let x = 240,
  y = 220;
for (i = 0; i < 14; i++) {
  //TODO: change to 16
  const arr = [];
  for (j = 0; j < 4; j++) {
    if (j === 2) {
      x = x - 5;
      y = y + 8;
    } else if (j === 3) {
      x = x - 25;
      y = y - 8;
    } else {
      x += 25;
      y += 8;
    }
    arr.push({
      x,
      y,
      bgColor: "#0A37D4",
      fontColor: "#FFFFFF",
      font: "8px Arial",
      XtextShift: 0,
      YTextShift: 8,
      angle: 20,
      text: `B${60 - i}`,
    });
  }
  polygon.push(arr);
  if (i % 2 === 0) {
    x = x - 28;
    y = y - 5;
  } else {
    x = x - 28;
    y = y - 5;
  }
}

x = 260;
y = 570;
for (i = 0; i < 16; i++) {
  let arr = [];
  for (j = 0; j < 4; j++) {
    if (j === 1) {
      x = x + 8;
      y = y + 0;
    } else if (j === 2) {
      x = x - 0;
      y = y + 20;
    } else if (j === 3) {
      x = x - 8;
      y = y - 0;
    }
    if (i < 2) {
      bgColor = "#E201F7";
    } else {
      bgColor = "#0A37D4";
    }
    arr.push({
      x,
      y,
      bgColor: bgColor,
      fontColor: "#FFFFFF",
      font: "8px Arial",
      XtextShift: 7,
      YTextShift: 16,
      angle: -90,
      text: bgColor === "#E201F7" ? i + 5 > 0 ?  `B${i + 5}` : "" : 12 - i + 2 > 0 ? `B${12 - i + 2}` : "",
    });
  }
  polygon.push(arr);
  x = x + 12;
  y = y - 15;
}

x = 275;
y = 515;
for (i = 0; i < 16; i++) {
  let arr = [];
  for (j = 0; j < 4; j++) {
    if (j === 1) {
      x = x + 8;
      y = y + 0;
    } else if (j === 2) {
      x = x - 0;
      y = y + 20;
    } else if (j === 3) {
      x = x - 8;
      y = y - 0;
    }
    if (i < 4) {
      bgColor = "#E201F7";
    } else {
      bgColor = "#0A37D4";
    }
    arr.push({
      x,
      y,
      bgColor: bgColor,
      fontColor: "#FFFFFF",
      font: "8px Arial",
      XtextShift: 7,
      YTextShift: 16,
      angle: -90,
      // text: bgColor === "#E201F7" ? 2 * i + 7 : 32 - i + 4,
      text: bgColor === "#E201F7" ? (i < 2 ? `B${2 * i + 7}` : "") : 32 - i + 4 > 22 ? `B${36 - i}` : "",
    });
  }
  polygon.push(arr);
  x = x + 12;
  y = y - 17;
}

x = 260;
y = 540;
for (i = 0; i < 16; i++) {
  let arr = [];
  for (j = 0; j < 4; j++) {
    if (j === 1) {
      x = x + 8;
      y = y + 0;
    } else if (j === 2) {
      x = x - 0;
      y = y + 20;
    } else if (j === 3) {
      x = x - 8;
      y = y - 0;
    }
    let bgColor;
    if (i < 4) {
      bgColor = "#E201F7";
    } else {
      bgColor = "#0A37D4";
    }
    arr.push({
      x,
      y,
      bgColor: bgColor,
      fontColor: "#FFFFFF",
      font: "8px Arial",
      XtextShift: 7,
      YTextShift: 16,
      angle: -90,
      text: bgColor === "#E201F7" ? (i < 2 ? `B${2 * i + 8}` : "") : 13 + i - 4 < 23 ? `B${13 + i - 4}` : "",
    });
  }
  polygon.push(arr);
  x = x + 12;
  y = y - 17;
}

x = 390;
y = 470;
for (i = 0; i < 10; i++) {
  let arr = [];
  for (j = 0; j < 4; j++) {
    if (j === 1) {
      x = x + 8;
      y = y + 0;
    } else if (j === 2) {
      x = x - 0;
      y = y + 20;
    } else if (j === 3) {
      x = x - 8;
      y = y - 0;
    }
    arr.push({
      x,
      y,
      bgColor: "#0A37D4",
      fontColor: "#FFFFFF",
      font: "8px Arial",
      XtextShift: 7,
      YTextShift: 17,
      angle: -90,
      text: `B${42 - i}`,
    });
  }
  polygon.push(arr);
  x = x + 12;
  y = y - 15;
}

x = 450;
y = 250;
let offset = 15;
for (i = 0; i < 4; i++) {
  let arr = [];
  for (j = 0; j < 5; j++) {
    let xcor, ycor;
    if (j === 1 || j === 2) {
      xcor = 390;
    } else xcor = 365;
    if (j === 2 || j === 3) {
      ycor = 355;
    } else ycor = 343;
    arr.push({
      x: xcor,
      y: ycor + i * offset,
      bgColor: "#0A37D4",
      fontColor: "#FFFFFF",
      font: "8px Arial",
      XtextShift: 4,
      YTextShift: 9,
      text: `B${47 - i}`,
    });
  }
  polygon.push(arr);
}

x = 300;
y = 320;
for (i = 0; i < 4; i++) {
  let arr = [];
  for (j = 0; j < 4; j++) {
    if (j === 1) {
      x = x + 18;
      y = y + 8;
    } else if (j === 2) {
      x = x - 8;
      y = y + 8;
    } else if (j === 3) {
      x = x - 18;
      y = y - 8;
    }
    arr.push({
      x,
      y,
      bgColor: "#E201F7",
      fontColor: "#FFFFFF",
      font: "8px Arial",
      XtextShift: 0,
      YTextShift: 8,
      angle: 30,
      text: `B${i + 1}`,
    });
  }
  polygon.push(arr);
  x = x - 2;
  y = y + 10;
}
