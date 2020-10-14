import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Leader } from '../sharred/leader';
import { LEADERS } from '../sharred/leaders';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders():Observable< Leader[]>{
    return of(LEADERS).pipe(delay(2000));

  }

  getLeader(id: string): Observable<Leader>{
    return of((LEADERS).filter((leader) => (leader.id=== id))[0]).pipe(delay(2000));

  }

  // getFeaturedDish(): Dish {
  //   return DISHES.filter((dish) => dish.featured)[0];
  // }
  getFeaturedLeader(): Observable< Leader>{
    return of(LEADERS.filter((leader)=> leader.featured)[0]).pipe(delay(2000));

  }

}
