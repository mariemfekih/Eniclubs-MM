import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Club } from './Club';
import { ClubService } from './Service/club-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'essai1';


 clubs: any[] | undefined
 url: string = "http://localhost:8081/";
 idd: number =0;

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

/* public getClubs(): void {
  this.clubService.getClubs().subscribe({
    next: (response: Club[]) => {
      this.clubs = response;
      console.log(this.clubs);
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  });
 }*/

 /*public onAddEmloyee(addForm: NgForm): void {
   document.getElementById('add-employee-form').click();
   this.employeeService.addClub(addForm.value).subscribe(
     (response: Club) => {
       console.log(response);
       this.getClubs();
       addForm.reset();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
       addForm.reset();
     }
   );
 }*/
 
}






/* public getClubs(): void {
    this.clubService.getClubs().subscribe((response: Club[]) => {
       // this.clubs = response;
        console.log(this.clubs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/