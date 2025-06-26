import AsukaConfig from "~/asuka.config";
import CryptoJS from "crypto-js";

/**
 * Converts a given slug to a hashed slug or returns the raw slug based on the configuration.
 *
 * @param slug - The input slug to be converted.
 * @returns The hashed slug if the configuration mode is "HASH", otherwise the raw slug.
 */
export function IdToSlug(slug: string): string {
  switch (AsukaConfig.slugMode) {
    case "HASH": {
      const hash = CryptoJS.SHA256(slug);
      const hasedSlug = hash.toString(CryptoJS.enc.Hex).slice(0, 8);
      return hasedSlug;
    }
    case "RAW":
      return slug;
    default:
      return slug;
  }
}

/**
 * Computes an index from a given slug ID string using a custom hash algorithm.
 *
 * Each character's ASCII code is multiplied by 31 raised to a decreasing power, and the sum is then reduced
 * by the length of the list. The returned index is guaranteed to be in the range [0, listLength - 1].
 *
 * @param id - The slug ID string to hash.
 * @param listLength - The length of the list for which the index is computed.
 * @returns A zero-based index within the list.
 */
export function GetIndexFromSlugID(id: string, listLength: number): number {
  // Convert the string to a number
  let hashValue = 0;
  for (let i = 0; i < id.length; i++) {
    hashValue += id.charCodeAt(i) * 31 ** (id.length - 1 - i);
  }

  // Modulo the list length to get the index
  const index = hashValue % listLength;
  return index;
}