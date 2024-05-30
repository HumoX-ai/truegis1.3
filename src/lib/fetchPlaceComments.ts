import axios from "axios";
import type { PlaceComments } from "@/types/place";

export async function fetchPlaceComments(
  id: string
): Promise<PlaceComments[] | null> {
  try {
    const response = await axios.get(
      `https://admin13.uz/api/comments/${id}/list`
    );
    if (response.status !== 200) {
      return null;
    }
    return response.data.results;
  } catch (error) {
    console.error("Error fetching place data:", error);
    return null;
  }
}
