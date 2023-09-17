import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../../interfaces/post.interface";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public currentPage = 1;
  public itemsPerPage = 6;

  public totalItemsPerPage!: Array<PostInterface>
  public totalItems!: number

  constructor(private http: HttpClient) {
  }

  public getPost(): Observable<Array<PostInterface>> {
    const url = `https://pixeltime.ro/wp/wp-json/wp/v2/posts?per_page=${this.itemsPerPage}&page=${this.currentPage}`;
    return this.http.get<Array<PostInterface>>(url);
  }

  public getNumberOfPosts(): Observable<any> {
    const url = `https://pixeltime.ro/wp/wp-json/wp/v2/categories`;
    return this.http.get<any>(url);
  }

  public nextPage() {
    this.currentPage = this.currentPage + 1;
    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response
    })
  }

  public prevPage() {
    this.currentPage = this.currentPage - 1;
    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response
    })
  }

  getTotalPages(): number {
    if(!this.totalItemsPerPage)
      return 0;
    return Math.ceil(this.totalItemsPerPage.length / this.itemsPerPage);
  }

  ngOnInit() {
    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response
    })
    this.getNumberOfPosts().subscribe(response => {
      this.totalItems = response[0].count
    })
  }
}
