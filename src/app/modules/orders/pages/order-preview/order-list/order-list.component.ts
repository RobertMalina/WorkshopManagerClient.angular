import { map, filter, debounceTime, distinct } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, fromEvent } from 'rxjs';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  faFilterIcon = faFilter;

  private listItemHeight = 150;
  private itemsOnPage = 5;
  private fetchNextDelayMs = 300;

  private scrollHandler$ = fromEvent(window, 'scroll')
    .pipe(
      map(() => window.scrollY),
      filter(height => height >= document.body.clientHeight - window.innerHeight),
      debounceTime(this.fetchNextDelayMs),
      distinct(),
      map(y => Math.ceil(
        (y + window.innerHeight) / (this.listItemHeight * this.itemsOnPage))
      )
    );

  private resizeHandler$ = fromEvent(window, 'resize')
    .pipe(
      debounceTime(this.fetchNextDelayMs),
      map(_ => Math.ceil(
        (window.innerHeight + document.body.scrollTop) / (this.listItemHeight * this.itemsOnPage)
      ))
    );

  private manualHandler$ = new BehaviorSubject(1);

  constructor() { }

  ngOnInit() {
  }

  applyFilters() {

  }


}
