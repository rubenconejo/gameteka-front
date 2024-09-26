import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users : any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit():void {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    )
  };
}
