import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description', 'https://www.seriouseats.com/recipes/images/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
