import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-see-on-github-button',
  templateUrl: './see-on-github-button.component.html',
  styleUrl: './see-on-github-button.component.scss'
})
export class SeeOnGithubButtonComponent {
  @Input() link: string = '';
}
