import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addStudent, deleteStudent, editStudent } from '../state/student.actions';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  student$:Observable<any>;
  arr:any;

  constructor(private store:Store<{student:any}>){
    this.student$=store.select('student');
    this.student$.subscribe((res)=>this.arr=res)
  }

  add(val:any){
    this.store.dispatch(addStudent(val))
  }

  delete(id:any){
    console.log(id)
    this.store.dispatch(deleteStudent({id}))
  }

  edit(id:any){
    this.store.dispatch(editStudent({id:id,name:'test',age:100}))
  }
}
