import { Component } from '@angular/core';
import { LanguageDropDownComponent } from '../language-drop-down/language-drop-down.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageDropDownComponent, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  linkList = [
    {id: "aboutMe", label: "AboutMe"},
    {id: "contacts", label: "Contacts"},
    {id: "experiences", label: "Experiences"},
    {id: "socials", label: "Socials"},
  ]

  

}


