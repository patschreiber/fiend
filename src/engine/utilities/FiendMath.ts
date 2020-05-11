
/**
 * The FiendMath utility class.
 */
export abstract class FiendMath {

  /**
   * Returns a number whose value is limited to the given range.
   *
   * @example
   * ```ts
   * // limit the output of this computation to between 0 and 255
   * let myNum = 10;
   * FiendMath.clamp(myNum, 0, 255);
   * ```
   *
   * @param number The number to clamp.
   * @param min The lower boundary.
   * @param max The upper boundary.
   *
   * @returns A number in the range `[min, max]`.
   */
  public static clamp(number: number, min: number, max: number): number {
    return Math.max(min, Math.min(number, max));
  }
}
