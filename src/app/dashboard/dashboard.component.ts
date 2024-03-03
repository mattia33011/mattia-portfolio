import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../card/card.component';
import { faAngular, faDocker, faGithub, faInstagram, faJava, faJs, faLinkedin, faLinkedinIn, faReact, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, CardComponent, TranslateModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
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

  linkedIn = faLinkedin

  socialsList = [
    {title: 'Mattia Iaria', icon: faLinkedinIn, href: 'https://it.linkedin.com/in/mattia-iaria-ba7432275?trk=people-guest_people_search-card'},
    {title: '@mattiaiaria', icon: faInstagram, href: 'https://www.instagram.com/mattiaiaria/'},
    {title: '@mattiaiaria', icon: faThreads, href: 'https://www.threads.net/@mattiaiaria'},
    {title: 'mattia33011', icon: faGithub, href: 'https://github.com/mattia33011'},
  ]

}
