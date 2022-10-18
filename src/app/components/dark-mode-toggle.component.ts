@Component({
    selector: 'app-dark-mode-toggle',
    template: `<input
      type="checkbox"
      [checked]="darkMode$ | async"
      (change)="onToggle()"
    />`,
  })
  export class DarkModeToggle {
    darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
    constructor(private darkModeService: DarkModeService) {}
    onToggle(): void {
      this.darkModeService.toggle();
    }
  }