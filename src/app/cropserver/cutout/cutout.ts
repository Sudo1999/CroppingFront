import { Frame } from "../../getimage/frame/frame";
import { Rectangle } from "../rectangle/rectangle";

/*  ng g class cutout */
export class Cutout extends Rectangle {

  origin!: Frame;
  override upX: number = 0;
  override upY: number = 0;
  override width: number = 10;
  override height: number = 10;
}
