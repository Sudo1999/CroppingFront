import { Component, OnInit, Input, VERSION } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { Frame } from '../../frame';
import { FrameService } from '../../../Service/frame.service';

@Component({
  selector: 'app-frame-get',
  templateUrl: './frame-get.component.html',
  styleUrl: './frame-get.component.css'
})
export class FrameGetComponent implements OnInit {
  
  public frame!: Frame;
  public fileUrl!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
    private frameService: FrameService ) { }
  
  ngOnInit(): void {
    // On doit s'adresser au end-point du FrameController du back => @GetMapping("/file/{filename:.+}")
    // Routing => path: 'api/file/:fullname', component: FrameGetComponent

    this.route.params.subscribe((routeParams: Params) => {
      console.log('Route params =>', JSON.stringify(routeParams));  // => {"fullname":"Photo-test.jpg"}
      let fullname = routeParams['fullname'];
      this.fileUrl = "http://localhost:8080/api/file/" + fullname;
    });
  }
}
