/**
 * Removed duplicates from an array
 *
 * @param array The input array
 * @param property The property to check
 * @private
 */
export const arrayRemoveDuplicates = (array: any[], property: string) => {
  const index: any[] = [];

  return array.filter((item) => {
    const key = property ? item[property] : item;

    return index.includes(key) ? false : index.push(key);
  });
};

/** Class representing an error in the nintendo-switch-eshop library */
export class EshopError extends Error {
  /**
   * Create an EshopError
   * @param message The message the error should show
   */
  public constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'EshopError';
  }
}
