const polygon = [
  [
    { x: 90, y: 80 },
    { x: 90, y: 100 },
    { x: 130, y: 100 },
    { x: 130, y: 80 },
    { x: 110, y: 60 },
  ],
  [
    { x: 150, y: 120 },
    { x: 180, y: 150 },
    { x: 220, y: 150 },
    { x: 220, y: 120 },
  ],
  [
    { x: 250, y: 50 },
    { x: 280, y: 80 },
    { x: 320, y: 80 },
    { x: 320, y: 50 },
  ],
];

const ctx = document.getElementById("drawing").getContext("2d");

const main = (polygonDataSets) => {
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;

  ctx.strokeStyle = "#070";
  ctx.fillStyle = "#ff0";
  ctx.lineWidth = 1;

  drawPolygon(ctx, polygonDataSets);
};

const drawPolygon = (ctx, points) => {
  const [{ x: startX, y: startY }] = points;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  points.forEach(({ x, y }) => {
    ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.stroke();
};

polygon.forEach((polygonData) => {
  main(polygonData);
});
