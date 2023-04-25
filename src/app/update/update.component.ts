import { Component, OnInit } from '@angular/core';
import { ClubService } from '../Service/club-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Club } from '../Club';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  club?: Club
  data: any


  constructor(private service: ClubService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getClubById(id).subscribe(data => {
      this.club = data
      console.log(this.club)
      this.form.controls['nom'].setValue(this.club.nom);
      this.form.controls['password'].setValue(this.club.password);
      this.form.controls['mission'].setValue(this.club.mission);
      this.form.controls['resp'].setValue(this.club.resp);
      this.form.controls['image'].setValue(this.club.image);
      this.form.controls['datecr'].setValue(this.club.datecr.toString());
      this.form.controls['nbmembres'].setValue(this.club.nbmembres.toString());
    })
  }

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    mission: new FormControl('', [Validators.required]),
    resp: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    datecr: new FormControl('', [Validators.required]),
    nbmembres: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateClub(this.club?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
