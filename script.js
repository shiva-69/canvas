const canvas = document.getElementById("circleCanvas");
const ctx = canvas.getContext("2d");
const arr = [];

// Function to draw a circle
function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color; // Circle fill color (blue in this case)
  ctx.fill();
  ctx.strokeStyle = "#444"; // Circle stroke color (gray in this case)
  ctx.lineWidth = 0.5; // Set the circle stroke width
  ctx.stroke();
}

// Function to handle hover effect
function handleHover(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  arr.forEach((element) => {
    const distance = Math.sqrt((mouseX - element.x) ** 2 + (mouseY - element.y) ** 2);
    if (distance <= circleRadius) {
      canvas.style.cursor = "pointer";
      // Apply hover effect when mouse is over the element
      element.hover = true;
    } else {
      element.hover = false;
    }
  });

  drawCanvas(); // Redraw the canvas with hover effect
}

// Add event listeners for mouseover and mouseout
canvas.addEventListener("mousemove",
 (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Check if the mouse is hovering over any circle
  const hoveredCircle = arr.find((circle) => {
    const dx = x - circle.x;
    const dy = y - circle.y;
    return dx * dx + dy * dy <= circleRadius * circleRadius;
  });

  // Display the index information in the div
  const circleIndexDiv = document.getElementById("circleIndex");
  if (hoveredCircle) {
    circleIndexDiv.style.display = "block";
    circleIndexDiv.textContent = `Index: ${arr.indexOf(hoveredCircle)}`;
    circleIndexDiv.style.top = `${e.clientY}px`;
    circleIndexDiv.style.left = `${e.clientX}px`;
    circleIndexDiv.style.backgroundColor = `#000`;
    circleIndexDiv.style.color = `#fff`;
    circleIndexDiv.style.borderRadius = `12px`;
    circleIndexDiv.style.padding = `10px`;
    circleIndexDiv.style.cursor = `pointer`;
    let button = document.createElement("button");
    button.innerText = "Select"
    button.style.display = "block";
    button.addEventListener("click", () => {
        console.log(`Index: ${arr.indexOf(hoveredCircle)}`)
    })
    circleIndexDiv.appendChild(button)
  } else {
    circleIndexDiv.style.display = "none";
  }
});

canvas.addEventListener("mouseout", () => {
  arr.forEach((element) => {
    element.hover = false; // Reset hover state when mouse moves out of the canvas
  });
  canvas.style.cursor = "default";
  drawCanvas(); // Redraw the canvas without hover effect
});

// Function to draw all circles in the array
function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arr.forEach((element) => {
    const color = element.hover ? "white" : element.color; // Apply hover color if element is hovered
    drawCircle(element.x, element.y, circleRadius, color);
  });
}

// Call the drawCircle function with the desired position (x, y) and radius
const centerX = canvas.width / 2;
const centerY = canvas.height;
const circleRadius = 5;

for (i = 1; i <= 4; i++) {
  if (i >= 3) {
    arr.push({ x: centerX - 200 + i * 20 + 500, y: 50 });
  } else {
    arr.push({ x: centerX - 400 + i * 20, y: 50 });
  }
}
for (i = 1; i <= 6; i++) {
  if (i >= 4) {
    arr.push({ x: centerX - 220 + i * 20 + 500, y: 50 + 20 });
  } else {
    arr.push({ x: centerX - 420 + i * 20, y: 50 + 20 });
  }
}

//for 4 horizontal
let k = 20;
for (j = 1; j <= 9; j++) {
  for (i = 1; i <= 6; i++) {
    if (i >= 4) {
      arr.push({ x: centerX - 220 + i * 20 + 500, y: 50 + 20 + k });
    } else {
      arr.push({ x: centerX - 420 + i * 20, y: 50 + 20 + k });
    }
  }
  k = k + 20;
}

//for 8 horizontal
let p = 20;
for (j = 1; j <= 10; j++) {
  for (i = 1; i <= 8; i++) {
    if (i >= 5) {
      arr.push({ x: centerX - 240 + i * 20 + 500, y: 50 + 20 * 6 + p });
    } else {
      arr.push({ x: centerX - 440 + i * 20, y: 50 + 20 * 6 + p });
    }
  }
  p = p + 20;
}

for (let i = 1; i <= 8; i++) {
  arr.push({ x: centerX - 370 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 20 + i * 15 });
}
for (let i = 1; i <= 9; i++) {
  arr.push({ x: centerX - 400 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 24 + i * 15 });
}
for (let i = 1; i <= 10; i++) {
  arr.push({ x: centerX - 430 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 28 + i * 15 });
}

for (let i = 1; i <= 3; i++) {
  arr.push({ x: centerX - 440 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 46 + i * 15 });
}
for (let i = 1; i <= 3; i++) {
  arr.push({ x: centerX - 450 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 62 + i * 15 });
}

// Bottom-left quadrant
for (let i = 1; i <= 8; i++) {
  arr.push({ x: centerX - 370 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 20 + i * 15 });
}

// Bottom-center quadrant
for (let i = 1; i <= 9; i++) {
  arr.push({ x: centerX - 400 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 24 + i * 15 });
}

// Bottom-right quadrant
for (let i = 1; i <= 10; i++) {
  arr.push({ x: centerX - 430 + i * 20, y: 50 + (20 * 6 + 20 * 10) + 28 + i * 15 });
}

// Top-right quadrant (mirror image of the bottom-right quadrant)
for (let i = 1; i <= 10; i++) {
  arr.push({ x: centerX + 430 - i * 20, y: 50 + (20 * 6 + 20 * 10) + 28 + i * 15 });
}

// Top-center quadrant (mirror image of the bottom-center quadrant)
for (let i = 1; i <= 9; i++) {
  arr.push({ x: centerX + 400 - i * 20, y: 50 + (20 * 6 + 20 * 10) + 24 + i * 15 });
}

// Top-left quadrant (mirror image of the bottom-left quadrant)
for (let i = 1; i <= 8; i++) {
  arr.push({ x: centerX + 370 - i * 20, y: 50 + (20 * 6 + 20 * 10) + 20 + i * 15 });
}

// Mirror the left side of the shape
for (let i = 1; i <= 3; i++) {
  arr.push({ x: centerX + 440 - i * 20, y: 50 + (20 * 6 + 20 * 10) + 46 + i * 15 });
}

// Mirror the right side of the shape
for (let i = 1; i <= 3; i++) {
  arr.push({ x: centerX + 450 - i * 20, y: 50 + (20 * 6 + 20 * 10) + 62 + i * 15 });
}

for (let i = 1; i <= 16; i++) {
  arr.push({ x: centerX - 370 + i * 20 + 200, y: 50 + (20 * 6 + 20 * 10) + 20 + 120 });
}
for (let i = 1; i <= 18; i++) {
  arr.push({ x: centerX - 370 + i * 20 + 180, y: 50 + (20 * 6 + 20 * 10) + 20 + 145 });
}
for (let i = 1; i <= 20; i++) {
  arr.push({ x: centerX - 370 + i * 20 + 160, y: 50 + (20 * 6 + 20 * 10) + 20 + 170 });
}

//FIX: Repetition Bug
let m = 20;
for (let j = 1; j <= 10; j++) {
  if (j > 6 && j < 10) {
    for (let i = 1; i <= 10; i++) {
      arr.push({ x: centerX - 320 + i * 20, y: 50 + 20 * 3 + (i - 1) * 8 + m });
    }
  } else {
    for (let i = 1; i <= 9; i++) {
      arr.push({ x: centerX - 300 + i * 20, y: 50 + 20 * 3 + i * 8 + m });
    }
  }
  m += 20;
}

m = 20;
for (let j = 1; j <= 10; j++) {
  if (j > 6 && j < 10) {
    for (let i = 1; i <= 10; i++) {
      arr.push({ x: centerX + 320 - i * 20, y: 50 + 20 * 3 + (i - 1) * 8 + m });
    }
  } else {
    for (let i = 1; i <= 9; i++) {
      arr.push({ x: centerX + 300 - i * 20, y: 50 + 20 * 3 + i * 8 + m });
    }
  }
  m += 20;
}

m = 20;
for (j = 1; j <= 10; j++) {
  for (i = 1; i <= 8; i++) {
    arr.push({ x: centerX - 90 + i * 20, y: 50 + 20 * 3 + 8 * 10 + m });
  }
  m += 20;
}

m = 20;
let len = 6;
for (j = 1; j <= 4; j++) {
  for (i = 1; i <= len; i++) {
    if (j === 1) continue;
    arr.push({ x: centerX - 50 - m + i * 20, y: 50 + 20 * 3 + 8 * 10 + 20 * 10 + m });
  }
  len += 2;
  m += 20;
}

const colors = ["#EA2A36", "#799C1F", "#D9D8DA"];

for (let i = 0; i < arr.length; i++) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  arr[i] = { ...arr[i], color: randomColor };
}

for (i = 0; i < arr.length; i++) {
  drawCircle(arr[i].x, arr[i].y, circleRadius, arr[i].color);
}

console.log(arr);
