import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Promotion } from '../sharred/promotion';
import { PROMOTIONS } from '../sharred/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotions(): Observable< Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));

  }

  getPromotion(id: string):Observable< Promotion> {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));

  }

  getFeaturedPromotion(): Observable< Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
    //return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured))[0];

  }

}
