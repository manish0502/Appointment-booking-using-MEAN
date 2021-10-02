import { Component, NgZone, OnInit } from '@angular/core';
const MAX_WIDTH_BREAKPOINT =720;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  
  private mediaMatcher: MediaQueryList=
  matchMedia(`(max-width : ${MAX_WIDTH_BREAKPOINT}px)`)

 links = [
       {
       name: 'Appointments',
       url: 'appointment'
       },
    
       {
         name: 'Registration',
         url:'register'
       },
       {
        name: 'LogIn',
        url:'login'
      },
      {
        name: 'List Users',
        url:'newuser'
      }
]

  constructor() {
    // this.mediaMatcher.addListener((mql) => {
    //   zone.run(() => this.mediaMatcher = mql);
    // })
   }

  ngOnInit() {
  }
  isScreenSmall(){
    return this.mediaMatcher.matches;
  }

}
