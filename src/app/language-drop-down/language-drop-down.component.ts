import { Component, Inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-drop-down',
  standalone: true,
  imports: [NgbDropdownModule, TranslateModule],
  templateUrl: './language-drop-down.component.html',
  styleUrl: './language-drop-down.component.scss'
})
export class LanguageDropDownComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'it'])
    translate.setDefaultLang('en')
    const browserLang = translate.getBrowserLang()
    translate.use(browserLang?.match(/en|it/) ? browserLang : 'en')
  }

  italyPath = "./assets/italy-flag.svg"
  ukPath = "./assets/uk-flag.svg"

  actualLanguage(){    
    return this.translate.currentLang
  }

  setLanguage(lang: 'it' | 'en'){
    this.translate.use(lang)
  }
}
