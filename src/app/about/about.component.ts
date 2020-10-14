import { Component, Input, OnInit } from '@angular/core';
import { Leader } from '../sharred/leader';
import {LEADERS} from '../sharred/leaders' ;
import { LeaderService} from '../services/leader.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  leader: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(leader => this.leader = leader);
    //this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

}
