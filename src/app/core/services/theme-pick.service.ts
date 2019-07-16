import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemePick } from '../models/theme-pick';

@Injectable({
  providedIn: 'root'
})
export class ThemePickService {
  private currentThemeSource: BehaviorSubject<ThemePick> = new BehaviorSubject<ThemePick>(ThemePick.LIGHT);
  public currentTheme$: Observable<ThemePick> = this.currentThemeSource.asObservable();
  constructor() { }

  setTheme(val: ThemePick): void {
    this.currentThemeSource.next(val);
  }
}
