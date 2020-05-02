/// Simo Partanen 1900414

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './shared/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthenticationService,
    public router: Router
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate = [
      {
        title: 'Landing',
        url: '/landing',
        icon: 'home'
      },
      {
        title: 'Profile',
        url: '/profile',
        icon: 'person'
      },
      {
        title: 'Skills',
        url: '/technical',
        icon: 'construct-outline'
      },
      {
        title: 'Projects',
        url: '/projectpersonal',
        icon: 'color-palette-outline'
      },
      {
        title: 'Extra curriculum',
        url: '/extrac',
        icon: 'add-circle-outline'
      },
      {
        title: 'Contact',
        url: '/contact',
        icon: 'call-outline'
      },
    ];
  }
  SignOut() {
    this.authService.SignOut()
      .then((res) => {
         {
          this.router.navigate(['login']);
        } 
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  
}
