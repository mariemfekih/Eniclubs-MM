import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { ClubService } from '../Service/club-service.service';
import { Club } from '../Club';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clubs: any[] | undefined
  url: string = "http://localhost:8081/";

  constructor(private service: ClubService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getClubs().subscribe(data => {
      this.clubs = data;
    })
   
  }

  deleteClub(id: number){
    this.service.deleteClub(id).subscribe(data => {
      this.clubs = this.clubs?.filter(club => club.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateClub(id: number){
    this.router.navigate(['update', id]);
  }

 


    

}
