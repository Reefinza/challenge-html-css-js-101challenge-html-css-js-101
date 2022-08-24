function loadImage() {
    fetch('image.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('data-trainee').innerHTML = "";

        const json = JSON.stringify(data.trainee);
        const result = JSON.parse(json);

        for (let i = 0; i < result.length; i++) {
          document.getElementById('data-trainee').innerHTML += `
            <div class="card">
            <img src="${result[i].img}" alt="Trainee">
            <div class="card-body">
                <h4>${result[i].name}</h4>
                <p>${result[i].skill}</p>
            </div>
        </div>
        `;
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }