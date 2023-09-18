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
  public itemsPerPage = 4;
  public totalItemsPerPage!: Array<PostInterface>
  public totalPages:Array<number> = [];
  public totalItems!: number
  public activePage!:number

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
    if(this.currentPage===this.getTotalPages())
      return;
    this.currentPage = this.currentPage + 1;
    this.getSelectedPage(this.currentPage);
    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response
    })
  }

  public prevPage() {
    if(this.currentPage===1){
      return;
    }
    this.currentPage = this.currentPage - 1;
    this.getSelectedPage(this.currentPage);
    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response
    })
  }

  public getSelectedPage(numberOfPage:number){
    this.activePage = numberOfPage;
  }
  public selectPage(numberOfPage:number){
    this.currentPage = numberOfPage;
    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response
    })
    this.getSelectedPage(numberOfPage);
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  ngOnInit() {
    this.currentPage=1;
    this.activePage=1;

    this.getPost().subscribe(response => {
      this.totalItemsPerPage = response

    })
    this.getNumberOfPosts().subscribe(response => {
      this.totalItems = response[0].count

      for (let page = 1; page <= this.getTotalPages(); page++) {
        this.totalPages.push(page);
      }
    })
  }
}
