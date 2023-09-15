import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(
      "https://pixeltime.ro/wp/wp-json/wp/v2/posts"
    );
  }

  // Get single blog post id function
  getSingle(): Observable<any[]> {
    return this.http.get<any[]>(
      "https://pixeltime.ro/wp/wp-json/wp/v2/posts"
    );
  }
}
