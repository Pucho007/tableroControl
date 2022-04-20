import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TokenService } from '../../../@core/services/auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any={
    name:'Juan Carlos',
    picture:'https://img.freepik.com/vector-gratis/diseno-avatar-persona_24877-38135.jpg'
  };

  // themes = [
  //   {
  //     value: 'default',
  //     name: 'Light',
  //   },
  //   {
  //     value: 'dark',
  //     name: 'Dark',
  //   },
  //   {
  //     value: 'cosmic',
  //     name: 'Cosmic',
  //   },
  //   {
  //     value: 'corporate',
  //     name: 'Corporate',
  //   },
  // ];

  // currentTheme = 'default';

  userMenu = [{ title: 'Cerrar Sesión' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              // private userService: UserData,
              //private layoutService: LayoutService,
              private _tokenService : TokenService, 
              private _router: Router,
              private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit() {

    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        this.logout();
      });

    // this.currentTheme = this.themeService.currentTheme;

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    // const { xl } = this.breakpointService.getBreakpointsMap();
    // this.themeService.onMediaQueryChange()
    //   .pipe(
    //     map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
    //     takeUntil(this.destroy$),
    //   )
    //   .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    // this.themeService.onThemeChange()
    //   .pipe(
    //     map(({ name }) => name),
    //     takeUntil(this.destroy$),
    //   )
    //   .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    //this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout(): void {
    this._tokenService.logOut();
    this._router.navigateByUrl('/auth');
  }


}
