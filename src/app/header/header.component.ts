import { Component } from '@angular/core';
import { LanguageDropDownComponent } from '../language-drop-down/language-drop-down.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageDropDownComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  linkList = [
    {id: "aboutMe", label: "About me"},
    {id: "contacts", label: "Contacts"},
    {id: "experiences", label: "Experiences"},
    {id: "socials", label: "Socials"},
  ]

  

}


