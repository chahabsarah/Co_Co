
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8085/spring2024/api/comments/getAll').subscribe(
      {
        next: (data: any) => {
          this.comments = data;
        },
        error: (error: any) => {
          console.error('Error fetching posts:', error);
        }
      }
    );
  }
}
