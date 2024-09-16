import { createAction, props } from "@ngrx/store";

export const addStudent=createAction('[Student Component] add',props<{id:number,name:string,age:number}>());

export const getStudent=createAction('[Student Component] get');

export const editStudent=createAction('[Student Componet] edit',props<{id:number,name:string,age:number}>());

export const deleteStudent=createAction('[Student Component] delete',props<{id:number}>());
