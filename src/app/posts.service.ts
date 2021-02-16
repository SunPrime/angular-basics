import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 posts: Post[] = [
   {title: 'Post 1', text: 'Sample text for post 1', id: 11},
   {title: 'Post 2', text: 'Sample text for post 2', id: 22},
   {title: 'Post 3', text: 'Sample text for post 3', id: 33},
   {title: 'Post 4', text: 'Sample text for post 4', id: 44},
   {title: 'Post 5', text: 'Sample text for post 5', id: 55},
   {title: 'Post 6', text: 'Sample text for post 6', id: 66},
   {title: 'Post 7', text: 'Sample text for post 7', id: 77},
   {title: 'Post 8', text: 'Sample text for post 8', id: 88},
 ];

 getById(id: number): any {
   return this.posts.find(p => p.id === id);
 }
}
