import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  linkList: LinkListComponent[] = [
    {href: "", label: "About me"},
    {href: "/contacts", label: "Contacts"},
    {href: "/links", label: "Links"},
  ]
}

class LinkListComponent{
  constructor(href: string, label: string) {
    this.href = href
    this.label = label
  }
  href: string
  label: string
}
