import { Component, OnInit } from '@angular/core';
import { ClubService } from '../Service/club-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service: ClubService, private router: Router) { }

  data: any

  
  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    mission: new FormControl('', [Validators.required]),
    resp: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    datecr: new FormControl('', [Validators.required]),
    nbmembres: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

 
  
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addclub(this.data).subscribe(data => {
      console.log(data)
    })

    
    
    this.router.navigate(['/']);
  }

}
