import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../card/card.component';
import { faAngular, faDocker, faEnvira, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  faJava = faJava
  faReact = faReact
  faAngular = faAngular
  faC = faCopyright
  faSpring = faEnvira
  faJs = faJs
  faDocker = faDocker
  faSql = faDatabase

  experiencesList = [
    {title: 'Kotlin', assetPath: '../../assets/Kotlin_Icon.svg'},
    {title: 'java', icon: faJava},
    {title: 'C++', assetPath: '../../assets/cp.svg'},
    {title: 'C', icon: faCopyright},
    {title: 'Typescript', assetPath: '../../assets/Typescript_logo.svg'},  
    {title: 'javascript', icon: faJs},
    {title: 'react', icon: faReact},
    {title: 'angular', icon: faAngular},
    {title: 'spring', icon: faLeaf},
    {title: 'docker', icon: faDocker},
    {title: 'kubernetes', assetPath: '../../assets/kubernetes-logo.svg'},
    {title: 'SingleSpa', assetPath: '../../assets/singlespa.svg'},
    {title: 'MySql', icon: faDatabase},
    {title: 'MongoDB', assetPath: '../../assets/mongodb-icon.svg'},  
  ]

}
