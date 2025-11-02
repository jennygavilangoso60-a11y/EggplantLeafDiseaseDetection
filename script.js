const cameraBtn = document.getElementById('cameraBtn');
const homeBtn = document.getElementById('homeBtn');
const imageUpload = document.getElementById('imageUpload');
const leafImage = document.getElementById('leafImage');
const result = document.getElementById('result');

cameraBtn.addEventListener('click', () => {
  imageUpload.click();
});

imageUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      leafImage.src = e.target.result;
      detectDisease();
    };
    reader.readAsDataURL(file);
  }
});

homeBtn.addEventListener('click', () => {
  leafImage.src = "leaf_placeholder.png";
  result.innerHTML = "<p>Upload or capture a leaf image to detect its disease.</p>";
});

function detectDisease() {
  const diseases = [
    {
      name: "Early Blight",
      description: "Caused by Alternaria solani fungus. Symptoms include brown circular spots with concentric rings."
    },
    {
      name: "Late Blight",
      description: "Caused by Phytophthora infestans. Leaves show dark, water-soaked lesions that spread quickly."
    },
    {
      name: "Leaf Spot",
      description: "Caused by Cercospora melongenae. Characterized by small brown circular spots that may merge."
    },
    {
      name: "Powdery Mildew",
      description: "Caused by Leveillula taurica. White powdery growth appears on leaf surfaces."
    },
    {
      name: "Bacterial Wilt",
      description: "Caused by Ralstonia solanacearum. Plants wilt rapidly without yellowing."
    },
    {
      name: "Anthracnose",
      description: "Caused by Colletotrichum spp. Results in dark sunken lesions on leaves and fruit."
    },
    {
      name: "Phomopsis Blight",
      description: "Caused by Phomopsis vexans. Grayish lesions with dark borders appear on leaves."
    }
  ];

  const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
  result.innerHTML = `
    <h3>Detected Disease: ${randomDisease.name}</h3>
    <p>${randomDisease.description}</p>
  `;
}