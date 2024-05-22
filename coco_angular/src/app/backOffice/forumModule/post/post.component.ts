import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8085/spring2024/api/posts/getAll').subscribe(
      {
        next: (data: any) => {
          this.posts = data;
        },
        error: (error: any) => {
          console.error('Error fetching posts:', error);
        }
      }
    );
  }
}
