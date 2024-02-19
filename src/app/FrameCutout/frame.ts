import { Rectangle } from "./rectangle";

/* ng g class frame */
export class Frame extends Rectangle {
    id!: number;
    path!: string;
    fullname!: string;
    override upX: number = 0;
    override upY: number = 0;
    override width: number = 10;
    override height: number = 10;
}
