import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  showDetails = true;
  log = [];

  onToggleDisplay() {
    this.showDetails = !this.showDetails;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
