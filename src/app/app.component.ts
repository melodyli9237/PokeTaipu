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

   // Send request after local is entered
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

  // Explored upload file but did not work
  uploadFile(e) {
  }
}
