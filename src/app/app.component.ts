import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  [field: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Javascript', text: 'The best language in the world'}
  ];

  addPost(): void {
    this.posts.unshift({
      title: 'Angular 11',
      text: 'course'
    });
  }
}
