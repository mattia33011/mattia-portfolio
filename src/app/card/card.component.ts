import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string
  @Input() icon?: IconProp
  @Input() assetPath?: string

  capitalize(s: string){
    return s[0].toUpperCase() + s.substring(1)
  }
}
