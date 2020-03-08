import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    // tslint:disable-next-line:max-line-length
    {
     title: 'Snowy landscape',
     url: 'https://images.unsplash.com/photo-1583483425010-c566431a7710?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
    },
    {
      title: 'Nice Sky',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1516426617986-06a0fa870623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Waves',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1583364486579-52ecae54876e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
      title: 'Stars',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1560472962-4388d184d933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
     },
     {
      title: 'Desert',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1563573507108-39c8b923fa2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1563&q=80'
     }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
