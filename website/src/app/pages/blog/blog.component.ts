import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostInterface } from "../../interfaces/post.interface";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnChanges {

  @Input() totalItems!: number;
  @Input() itemsPerPage: number = 3;
  currentPage = 1;
  totalPages!: number;
  visiblePages: number[] = [];
  totalItemsPerPage: PostInterface[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnChanges() {
    this.totalPages = this.getTotalPages();
    this.updateVisiblePages();
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  firstPage() {
    if (this.currentPage > 1) {
      this.currentPage = 1;
      this.updateVisiblePages();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
    }
  }

  lastPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.totalPages;
      this.updateVisiblePages();
    }
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.updateVisiblePages();
  }
  updateVisiblePages() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPagesToShow = 5;

    this.visiblePages = [];

    if (totalPages <= maxPagesToShow) {
      for (let page = 1; page <= totalPages; page++) {
        this.visiblePages.push(page);
      }
    } else {
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        for (let page = 1; page <= maxPagesToShow; page++) {
          this.visiblePages.push(page);
        }
      } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
        for (let page = totalPages - maxPagesToShow + 1; page <= totalPages; page++) {
          this.visiblePages.push(page);
        }
      } else {
        for (let page = currentPage - 2; page <= currentPage + 2; page++) {
          this.visiblePages.push(page);
        }
      }
    }
  }


  public getPost(): Observable<PostInterface[]> {
    const url = `https://pixeltime.ro/wp/wp-json/wp/v2/posts?per_page=${this.itemsPerPage}&page=${this.currentPage}`;
    return this.http.get<PostInterface[]>(url);
  }

  public getNumberOfPosts(): Observable<any> {
    const url = `https://pixeltime.ro/wp/wp-json/wp/v2/categories`;
    return this.http.get<any>(url);
  }

  ngOnInit() {
    this.getNumberOfPosts().subscribe(response => {
      this.totalItems = response[0].count;
      this.totalPages = this.getTotalPages();
      this.updateVisiblePages();
    });

    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response;
    });
  }
}
