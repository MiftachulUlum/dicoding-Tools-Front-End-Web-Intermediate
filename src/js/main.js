document.addEventListener('DOMContentLoaded', () => {
  fetch('data/DATA.json')
    .then(response => response.json())
    .then(data => {
      if (data.error === false) {
        const stories = data.listStory;
        const recordsTableBody = document.querySelector('#recordsTable tbody');

        stories.forEach((story, index) => {
          const row = document.createElement('tr');

          row.innerHTML = `
            <td class="text-center">${index + 1}</td>
            <td class="text-center">${story.name}</td>
            <td class="text-center">
              <img src="${story.photoUrl}" alt="Story Image" class="img-fluid" style="max-width: 100px;"/>
            </td>
            <td class="text-center">${story.description}</td>
            <td class="text-center">${new Date(story.createdAt).toLocaleDateString()}</td>
          `;

          recordsTableBody.appendChild(row);
        });



        document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
          button.addEventListener('click', (event) => {
            const storyId = event.target.getAttribute('data-id');
            const story = stories.find(story => story.id === storyId);

            document.querySelector('#imgDetailRecord').src = story.photoUrl;
            document.querySelector('#typeDetailRecord').textContent = story.name;
            document.querySelector('#nameDetailRecord').textContent = story.description;
            document.querySelector('#dateDetailRecord').textContent = new Date(story.createdAt).toLocaleDateString();
            document.querySelector('#amountDetailRecord').textContent = 'Rp ' + story.amount;
            document.querySelector('#noteDetailRecord').textContent = story.note;
          });
        });
      }
    })
    .catch(error => console.error('Error fetching data:', error));
});
