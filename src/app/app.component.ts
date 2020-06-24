import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet> <ngx-loading-bar color="red" ref="router" height="5px"></ngx-loading-bar> <ngx-loading-bar color="black" ref="http"></ngx-loading-bar> <ngx-spinner></ngx-spinner>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, public loadingService : LoadingBarService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
