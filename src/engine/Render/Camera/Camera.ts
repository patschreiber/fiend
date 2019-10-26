import { Coordinate } from "../../types/globals";

interface ICamera {

  /**
   * The current position of the camera.
   */
  position: Coordinate;

  /**
   * The width of the Camera's viewport.
   */
  width: number;

  /**
   * The height of the Camera's viewport.
   */
  height: number;

  /**
   * The limit for the camera's position — The lower limit will nearly always be
   * (0,0). The upper limit is equal to the size of the world minus the size of
   * the camera's viewport.
   */
  maxX: number;

  /**
   * The limit for the camera's position — The lower limit will nearly always be
   * (0,0). The upper limit is equal to the size of the world minus the size of
   * the camera's viewport.
   */
  maxY: number;

}

export class Camera implements ICamera {

  position: Coordinate;
  width: number;
  height: number;
  maxX: number;
  maxY: number;

  constructor() {}

}
