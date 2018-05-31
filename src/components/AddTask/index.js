import React from 'react';
import style from './style.css';
import { connect } from 'react-redux';
import {addTask} from '../../actions';

let AddTask = ({dispatch})=>{
    let input;
    return (

        <div className="input-group mb-3 col-5">
            <input  type="text"aria-label="Default" aria-describedby="inputGroup-sizing-default"
                   className={style.input+" form-control"}
                    ref={node => {
                        input = node
                    }}

            />

            <div className="input-group-prepend">
                <div className={style.btn +" btn btn-dark "}
                     onClick={()=>{
                         if (input.value !=='') dispatch(addTask(input.value));
                         input.value ='';
                     }}
                >Добавить задачу</div>
            </div>
        </div>
    )

};
AddTask = connect()(AddTask);
export default AddTask;