import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubService } from '../Service/club-service.service';
import { Club } from '../Club';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
model: Club =new Club();
getData:boolean | undefined;
errorMessage = 'Invalid Credentials';
  constructor(private clubService: ClubService,private router:Router) {}

  ngOnInit(): void { }

/*loginClub(){
  var emailc= this.model.emailc;
  var password= this.model.password;
  console.log(this.model)
this.clubService.getClubData(emailc,password).subscribe((res:any) =>{
  this.getData= res ;
  console.log(res);
if(this.getData== true) {this.router.navigate(["/home"]);}
else{ this.getData==false;
  console.log("Invalid club");
}
})
}*/
}
  

  

