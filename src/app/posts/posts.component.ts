import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<any> | undefined;
  message: string | undefined;

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.fetch().subscribe(p => {
      this.posts = p;
    });
  }

  add(title: string): void {
    const post = { title };
    this.service.create(post).subscribe(() => {
      this.posts?.push(post);
    }, err => this.message = err);
  }

  delete(id: number): void {
    if (window.confirm('Are you sure&')){
      this.service.remove(id).subscribe();
    }
  }
}
