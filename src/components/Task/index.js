import React from 'react';
import style from './style.css';

const Index = ({ task, onNext, onPrev, onClassName, onMainClick})=>{
    return (
        <div  className={" row align-items-center justify-content-center"} >

            <div className="col-md-7"
                 onClick={()=>onMainClick(task.id)}
            >
                <div key={task.id}
                     className={onClassName}
                >
                    {task.text}
                </div>
            </div>

            <div className="col-md-5 ">
                <button
                    onClick={()=>onPrev(task.id)}
                    style={{ display: task.canPrev ? 'initial' : 'none'}}
                    className={style.btn+" btn btn-secondary"}>
                    НАЗАД
                </button>

                <button onClick={()=>onNext(task.id)}
                        style={{ display: task.canNext ? 'initial' : 'none'}}
                        className={style.btn+" btn btn-dark"}>
                    ВПЕРЕД
                </button>
            </div>
            <div
                className={style.btnWrapper+" col-md-11 "}
                style={{ height: task.clicked ? "50px" : "0px"}}
                onClick={()=>{onMainClick(task.id)}}
            >

                <div className={style.btn+" btn btn-danger"}
                     onClick={(event)=>{
                         event.stopPropagation();
                     }}
                >
                    УДАЛИТь
                </div>
                <div className={style.btnLong+" btn btn-warning"}
                     onClick={(event)=>{
                         event.stopPropagation();
                     }}
                >
                    РЕДАКТИРОВАТЬ
                </div>
            </div>

            <hr className={style.hr}/>


        </div>

    )
};

export default Index