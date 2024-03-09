const accesskey = "6Bfu-CpadHxLBVtuCRajTtjaLWBA8l7RdJqk_0E2Of4";

const api_url = "https://api.unsplash.com/photos/random";

async function fetchImage() {
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
fetchImage();
