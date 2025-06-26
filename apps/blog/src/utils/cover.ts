import { GetIndexFromSlugID } from "./hash";
import AsukaConfig from "../../asuka.config";

/**
 * Retrieves the cover URL for an unspecified entry based on the provided ID.
 *
 * @param id - The unique identifier for the entry.
 * @returns The URL of the corresponding cover image.
 */
export function GetCoverURLForUnspecifiedEntry(id: string): string {
  const index = GetIndexFromSlugID(id, AsukaConfig.banners.length);
  return AsukaConfig.banners[index];
}