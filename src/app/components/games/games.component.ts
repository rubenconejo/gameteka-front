import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  games: any[] = [];

constructor(private apiService: ApiService){}

  ngOnInit():void {
    this.apiService.getGames().subscribe(
      (data) => {
        this.games = data;
        console.log(this.games);
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    )
  };
}
