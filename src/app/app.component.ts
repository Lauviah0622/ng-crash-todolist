import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  //就跟平常的Class一樣
  name:string = 'angular-crash-todolist';  //typescript是強型別，要標註var的資料類型

  constructor() {
    this.name = '4444'  
    this.printName(this.name);
  }

  printName(name:string):void {
    console.log(name)
  }
}
