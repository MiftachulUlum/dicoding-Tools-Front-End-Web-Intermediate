document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addStoryForm');
  
    form.addEventListener('submit', event => {
      event.preventDefault();
  
      const description = document.getElementById('description').value;
      const photo = document.getElementById('photo').files[0];
  
      if (photo) {
        const reader = new FileReader();
        reader.onload = () => {
          const newStory = {
            id: `story-${Date.now()}`,
            name: 'New User',
            description: description,
            photoUrl: reader.result,
            createdAt: new Date().toISOString(),
          };
  
          // Simpan story baru ke localStorage atau kirim ke server melalui API
          // Sementara, kita hanya menampilkan alert dan console log
          alert('Story berhasil ditambahkan!');
          console.log('Story baru:', newStory);
        };
        reader.readAsDataURL(photo);
      }
    });
  });
  