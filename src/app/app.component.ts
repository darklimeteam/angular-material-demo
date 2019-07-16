import { Component } from '@angular/core';
import { ThemePickService } from './core/services/theme-pick.service';
import { Observable } from 'rxjs';
import { ThemePick } from './core/models/theme-pick';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-demo';

  theme$: Observable<ThemePick>;

  constructor(
    private themePickService: ThemePickService,
  ) {
    this.theme$ = themePickService.currentTheme$;
  }

}
