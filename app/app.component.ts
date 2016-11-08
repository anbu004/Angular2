import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
    <input type="number" [(ngModel)]="myModel1"/>
    <input type="number" [(ngModel)]="myModel2"/>
    {{myModel1+myModel2}}
	<input type="file"/>
  `
})
export class AppComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/