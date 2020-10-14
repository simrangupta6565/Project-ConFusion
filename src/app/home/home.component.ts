import { Component, OnInit } from '@angular/core';
import { Dish } from '../sharred/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../sharred/promotion';
import { PromotionService } from '../service/promotion.service';
import { Leader } from '../sharred/leader';
import { LeaderService } from '../services/leader.service';
import { PROMOTIONS } from '../sharred/promotions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit(): void {
   // this.dishService.getDishes().subscribe(dishes => this.dish = dishes);
    this.dishservice.getFeaturedDish().subscribe(dishes => this.dish = dishes);
    this.promotionservice.getFeaturedPromotion().subscribe(Promotion => this.promotion= Promotion );
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}
