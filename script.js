//  Random Image on click
document.addEventListener("DOMContentLoaded", function () {
  const accesskey = "6Bfu-CpadHxLBVtuCRajTtjaLWBA8l7RdJqk_0E2Of4";

  const api_url = "https://api.unsplash.com/photos/random";

  async function fetchRandomImage() {
    try {
      const response = await fetch(api_url, {
        headers: {
          Authorization: `Client-ID ${accesskey}`,
        },
      });
      // console.log(response);

      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
      const data = await response.json();

      const get_image = data.urls.regular;
      const imgElement = document.getElementById("random_image");
      imgElement.src = get_image;
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchRandomImage();
  //  Get a single page of collection results for a query

  const api_url2 = "https://api.unsplash.com/search/collections";
  // /?page=1&query=${}

  // Event Listener for search button click
  const get = (e) => document.querySelector(`${e}`);

  const searchInput = get("#searchInput");
  const searchButton = get(".search");

  searchButton.addEventListener("click", () => {
    if (searchInput.value !== "") {
      getRender(searchInput.value);
    }
  });

  // Function to render the fetched images on the page

  async function getRender(query) {
    const urlWithQuery = `${api_url2}?page=1&query=${query}}`;
    const response1 = await fetch(urlWithQuery, {
      headers: {
        Authorization: `Client-ID ${accesskey}`,
      },
    });
    const data1 = await response1.json();
    console.log(data1);

    const container = document.querySelector(".main-content");
    // clear existing content
    container.innerHTML = "";

    data1.results.forEach((collection) => {
      collection.preview_photos.forEach((photo) => {
        const imgElement1 = document.createElement("img");
        imgElement1.src = photo.urls.small;
        imgElement1.alt = photo.title || "Collection Photo";
        container.appendChild(imgElement1);
      });
    });
  }
  getRender();
});
