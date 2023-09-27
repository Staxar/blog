import { createClient } from "pexels";

export async function getPhotoById(id) {
  const apiKey = process.env.PEXEL_KEY;
  if (apiKey) {
    try {
      const client = createClient(apiKey);
      const response = await client.photos.show({ id: id });
      console.log(response);
    } catch (error) {
      console.error("Error fetching Pexels photo:");
    }
  }
  return response;
}
