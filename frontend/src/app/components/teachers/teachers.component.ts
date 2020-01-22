import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';
import { Teacher } from '../../models/teacher';
import { NgForm} from '@angular/forms';
 

declare var M: any;

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers: [TeachersService]
})
export class TeachersComponent implements OnInit {

  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
    this.getTeachers();
  }

  addTeacher(form: NgForm){

    if (form.value._id){
      this.teachersService.editTeacher(form.value)
      .subscribe(res =>{
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Teacher Update Succesful'});
        this.getTeachers();
      });

    }else{
      this.teachersService.createrTeacher(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'Teacher Saved Succesful'});
        this.getTeachers();
      }); 
    }

  }

  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.teachersService.selectedTeacher = new Teacher();
    }
  }

  getTeachers(){
    this.teachersService.getTeachers()
    .subscribe(res =>{
      this.teachersService.teachers = res as Teacher[];
      console.log(res);
    })
  }

  editTeacher(teacher: Teacher){
    this.teachersService.selectedTeacher = teacher;
  }

  deleteTeacher(_id: String){
    if(confirm("Are you sure you want delete it?")){
      this.teachersService.deleteTeacher(_id)
      .subscribe(res =>{
        this.getTeachers();
        M.toast({html: 'Teacher delete Succesful'});
      })
    }
  }
}
