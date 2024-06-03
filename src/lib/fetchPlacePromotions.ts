import axios from "axios";
import type { PlacePromotions } from "@/types/place";

export async function fetchPlacePromotions(
  id: string
): Promise<PlacePromotions[] | null> {
  try {
    const response = await axios.get(
      `https://admin13.uz/api/product/list/${id}/`
    );
    if (response.status !== 200) {
      return null;
    }
    return response.data.results;
  } catch (error) {
    console.error("Error fetching promotion data:", error);
    return null;
  }
}
