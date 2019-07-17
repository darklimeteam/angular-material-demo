import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThemePick } from 'src/app/core/models/theme-pick';
import { ThemePickService } from 'src/app/core/services/theme-pick.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  readonly THEME_PICK = ThemePick;

  // https://material.angular.io/cdk/layout/overview

  isHandsetPortrait$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
  .pipe(
    map(result => result.matches)
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themePickService: ThemePickService,
  ) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        console.log(result);
      }
    });
  }


  public setTheme(val: ThemePick): void {
    this.themePickService.setTheme(val);
  }
}
