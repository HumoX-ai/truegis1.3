// lib/fetchPlaceData.ts
import axios from "axios";
import type { Place } from "@/types/place";

export async function fetchPlaceData(id: string): Promise<Place | null> {
  try {
    const response = await axios.get(`https://admin13.uz/api/place/${id}/`);
    if (response.status !== 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching place data:", error);
    return null;
  }
}
