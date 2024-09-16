import { createReducer , on } from "@ngrx/store";
import { addStudent,getStudent,editStudent,deleteStudent } from "./student.actions";

export const initialState:Array<any>=[];

export const studentReducer=createReducer(
    initialState,

    on(addStudent,(state,{id,name,age})=>{
        const newStudent={id,name,age}
        newStudent.id=state.length+1;
        return [...state,newStudent]
    }),

    on(getStudent,(state)=>{
        return state
    }),

    on(deleteStudent,(state,{id})=>{
        console.log('id',{id})
        return state.filter((element)=>element.id!==id)       
    }) ,
    
    on(editStudent,(state,{id,name,age})=>{
        const editObj={id,name,age}
        const arr= state.map((elem,index)=>{
            if(elem.id===editObj.id){
                return {id:index+1,name:name,age:age}                
            }
            else{
                return elem
            }
        })
        return arr
    })

    
)