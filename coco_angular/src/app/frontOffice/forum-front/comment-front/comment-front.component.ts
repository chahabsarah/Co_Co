import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment-front',
  templateUrl: './comment-front.component.html',
  styleUrls: ['./comment-front.component.css']
})
export class CommentFrontComponent implements OnInit {
  postId!: number;
  post: any;
  comments: any[] = [];
  newComment: any = {};
  editingComment: any = null;
  editedComment: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.getPostAndComments();
    });
  }

  getPostAndComments(): void {
    const postEndpoint = `http://localhost:8085/spring2024/api/posts/${this.postId}`;
    const commentsEndpoint = `http://localhost:8085/spring2024/api/posts/${this.postId}/comments`;

    this.http.get(postEndpoint).subscribe(
      (postData: any) => {
        this.post = postData;
      },
      (error) => {
        console.error('Error fetching post:', error);
      }
    );

    this.http.get<any[]>(commentsEndpoint).subscribe(
      (commentsData: any[]) => {
        this.comments = commentsData;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  submitComment(): void {
    const addCommentEndpoint = `http://localhost:8085/spring2024/api/posts/${this.postId}/comments/addComment`;

    this.http.post(addCommentEndpoint, this.newComment).subscribe(
      (addedComment: any) => {
        this.comments.push(addedComment);
        this.newComment = {};
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }

  deleteComment(commentId: number): void {
    const deleteCommentEndpoint = `http://localhost:8085/spring2024/api/posts/${this.postId}/comments/delete/${commentId}`;

    this.http.delete(deleteCommentEndpoint).subscribe(
      () => {
        this.comments = this.comments.filter(comment => comment.id !== commentId);
      },
      (error) => {
        console.error('Error deleting comment:', error);
      }
    );
  }

  editComment(comment: any): void {
    this.editingComment = comment;
    this.editedComment = { ...comment };
  }

  updateComment(): void {
    const updateCommentEndpoint = `http://localhost:8085/spring2024/api/posts/${this.postId}/comments/modify/${this.editedComment.id}`;

    this.http.put(updateCommentEndpoint, this.editedComment).subscribe(
      (modifiedComment: any) => {
        const index = this.comments.findIndex(comment => comment.id === modifiedComment.id);
        if (index !== -1) {
          this.comments[index] = modifiedComment;
          this.cancelEdit();
        }
      },
      (error) => {
        console.error('Error updating comment:', error);
      }
    );
  }

  cancelEdit(): void {
    this.editingComment = null;
    this.editedComment = {};
  }
}
