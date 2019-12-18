import { Component } from '@angular/core';
import { HttpClient,HttpResponse,HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  serverData: JSON;
  employeeData: JSON;
  employee:JSON;
  percentDone: number;
  uploadSuccess: boolean;
  path:string;
  poketype:string;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.poketype = "";
  }

   focusoutHandler(path: string) {
       this.path = path;
       console.log(event);
       console.log("path:",path)
       this.httpClient.post('http://127.0.0.1:5002/path', path).subscribe(data =>
       {
         console.log(data);
         this.poketype = data.text;
       });

   }

  uploadFile(e) {
    // console.log(e);
    // console.log(document.getElementById("xuanbaobao").files[0]);
    // this.path = e.target.value;
    // this.httpClient.post('http://127.0.0.1:5002/path', this.path).subscribe(data =>
    // {
    //   this.poketype = data.text;
    // });
    // this.httpClient.post('http://127.0.0.1:5002/file', formData, {reportProgress:true}).subscribe(data => {
    //   console.log(data);
    // });
  }
}
