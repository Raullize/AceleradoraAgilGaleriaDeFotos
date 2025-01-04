const photos = [
    { title: "Montanhas", url: "https://picsum.photos/id/1015/300/200" },
    { title: "Rio ao Pôr do Sol", url: "https://picsum.photos/id/1016/300/200" },
    { title: "Floresta Densa", url: "https://picsum.photos/id/1018/300/200" },
    { title: "Lago Refletido", url: "https://picsum.photos/id/1024/300/200" },
    { title: "Pôr do Sol", url: "https://picsum.photos/id/1025/300/200" },
    { title: "Deserto Escaldante", url: "https://picsum.photos/id/1035/300/200" },
    { title: "Cachoeira", url: "https://picsum.photos/id/1039/300/200" },
    { title: "Aurora Boreal", url: "https://picsum.photos/id/1041/300/200" },
    { title: "Praia ao Entardecer", url: "https://picsum.photos/id/1043/300/200" },
    { title: "Campos Verdes", url: "https://picsum.photos/id/1045/300/200" },
  ];
  
  const photoGrid = document.getElementById("photo-grid");
  const searchInput = document.getElementById("searchInput");
  const noResults = document.getElementById("noResults");
  
  function displayPhotos(photos) {
    photoGrid.innerHTML = ""; 
  
    if (photos.length === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
  
      photos.forEach((photo) => {
        const photoItem = document.createElement("div");
        photoItem.className = "photo-item";
  
        const img = document.createElement("img");
        img.src = photo.url;
        img.alt = photo.title;
  
        const caption = document.createElement("p");
        caption.textContent = photo.title;
  
        photoItem.appendChild(img);
        photoItem.appendChild(caption);
        photoGrid.appendChild(photoItem);
      });
    }
  }
  
  function filterPhotos() {
    const query = searchInput.value.toLowerCase();
    const filteredPhotos = photos.filter((photo) =>
      photo.title.toLowerCase().includes(query)
    );
    displayPhotos(filteredPhotos);
  }
  
  displayPhotos(photos);
  
  searchInput.addEventListener("input", filterPhotos);