import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FrameService } from '../../services/frame.service';
import { Frame } from '../frame';

@Component({
  selector: 'app-frame-get',
  templateUrl: './frame-get.component.html',
  styleUrl: './frame-get.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: []
})
export class FrameGetComponent implements OnInit {

  public frame!: Frame;
  public fullname!: string;
  public fileUrl!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private frameService: FrameService) { }

  ngOnInit(): void {
    // On doit s'adresser au end-point du FrameController du back => @GetMapping("/file/{filename:.+}")
    // Routing => path: 'api/file/:fullname', component: FrameGetComponent

    this.route.params.subscribe((routeParams: Params) => {
      console.log('Route params =>', JSON.stringify(routeParams));  // => {"fullname":"Photo-test.jpg"}
      this.fullname = routeParams['fullname'];
      this.fileUrl = "http://localhost:8080/api/file/" + this.fullname;
    });
  }
}
