const ctx = document.getElementById("drawing").getContext("2d");

const main = (polygonDataSets) => {
  ctx.imageSmoothingEnabled = true;

  ctx.strokeStyle = polygonDataSets[0]?.bgColor ?? "red";
  ctx.fillStyle = polygonDataSets[0]?.bgColor ?? "red";
  ctx.lineWidth = 1;

  drawPolygon(ctx, polygonDataSets);

  const text = polygonDataSets[0].text < 1 ? "" : polygonDataSets[0].text;
  const textX = polygonDataSets[0].x + polygonDataSets[0].XtextShift; // Adjust the position as needed
  const textY = polygonDataSets[0].y + polygonDataSets[0].YTextShift; // Adjust the position as needed

  const angle = polygonDataSets[0].angle ?? 0; // Angle in degrees
  ctx.save(); // Save the current context state
  ctx.translate(textX, textY); // Move the context to the desired position
  ctx.rotate((angle * Math.PI) / 180); // Rotate the context

  ctx.fillStyle = polygonDataSets[0]?.fontColor ?? "white";
  ctx.font = polygonDataSets[0].font;
  ctx.fillText(text, 0, 0); // Write the text at (0, 0) relative to the rotated context

  ctx.restore(); // Restore the context to its original state
};

const drawPolygon = (ctx, points) => {
  const [{ x: startX, y: startY }] = points;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  points.forEach(({ x, y }) => {
    ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};

polygon.forEach((polygonData) => {
  main(polygonData);
});
