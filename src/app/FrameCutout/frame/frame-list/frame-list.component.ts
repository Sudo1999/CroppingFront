import { Component, OnInit } from '@angular/core';
import { FrameService } from '../../../services/frame.service';
import { Frame } from '../../frame';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrl: './frame-list.component.css'
})
export class FrameListComponent implements OnInit {

  public frames: Frame[];
  public framepaths: String[];
  public fileUrl!: string;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private frameService: FrameService ) {
      this.frames = new Array<Frame>;
      this.framepaths = new Array<String>;
  }

  ngOnInit(): void {
    // Si on n'initie pas framepaths ici, il faut attendre le premier callback pour afficher la liste
    this.frameService.findAll().subscribe(data => {
      this.framepaths = data;
      this.framepaths.forEach(path => {
        let frame = this.frameService.createFrameWithPath(path.toString());
        this.frames.push(frame);
      })
    });
  }

  // public onFrameClick(frame: Frame): void {
  //   // End-point du FrameController du back => @GetMapping("/file/{filename:.+}")
  //   //this.router.navigateByUrl('api/file/' + frame.fullname);
  //   //this.router.navigate(['/', 'api', 'file', frame.fullname]);
  // }
}
