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
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

   focusoutHandler(path: string) {
       this.path = path;
       console.log(event);
       console.log("path:",path)
       this.httpClient.post('http://127.0.0.1:5002/path', path).subscribe(data =>
       {
         console.log(data);
       });
   }

  uploadFile(files: File[]) {
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))

    this.httpClient.post('http://127.0.0.1:5002/file', formData).subscribe(data => {
      console.log(data);
    });
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
      this.employeeData = data as JSON;
      console.log(this.employeeData);
    })
  }
  getEmployee() {
    this.httpClient.get('http://127.0.0.1:5002/employees/1').subscribe(data => {
      this.employee = data as JSON;
      console.log(this.employee);
    })
  }
}
