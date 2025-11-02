const video = document.getElementById('camera');
const canvas = document.getElementById('snapshot');
const resultText = document.getElementById('result-text');

// Start camera
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => { video.srcObject = stream; })
  .catch(err => alert("Camera error: " + err));

// Capture photo
document.getElementById('capture-btn').addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0);

  // (Fake detection) Random sample result
  const diseases = [
    { name: "Healthy Leaf 🍃", desc: "No signs of disease detected." },
    { name: "Leaf Spot Disease 🌿", desc: "Brown or black spots found on the leaf." },
    { name: "Mosaic Virus 🦠", desc: "Uneven green and yellow patterns detected." },
    { name: "White Mold ❄️", desc: "White powdery growth seen on the surface." },
    { name: "Bacterial Wilt 💧", desc: "Leaf appears droopy and discolored." }
  ];

  const result = diseases[Math.floor(Math.random() * diseases.length)];
  resultText.innerHTML = <strong>${result.name}</strong><br>${result.desc};
});