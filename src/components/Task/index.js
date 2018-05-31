import React from 'react';
import style from './style.css';

const Index = ({ task, onNext, onPrev, onClassName, onMainClick,onRemove,onEdit,onNeedEdit})=>{


    return (
        <div  className={" row align-items-center justify-content-center"} >

            <div className="col-md-7"
                 onClick={()=>onMainClick(task.id)}
            >
                <div key={task.id}
                     className={onClassName}
                >
                    {task.needEdit ? <textarea
                        type="text"
                        defaultValue={task.text}
                        onClick={(event)=>{
                            event.stopPropagation();
                        }}
                        ref={node=>{this.area = node}}
                    /> :task.text  }

                </div>
            </div>

            <div className="col-md-5 ">
                <button
                    onClick={()=>onPrev(task.id)}
                    style={{ display: task.canPrev ? 'initial' : 'none'}}
                    className={style.btn+" btn btn-secondary"}
                >
                    НАЗАД
                </button>

                <button onClick={()=>onNext(task.id)}
                        style={{ display: task.canNext ? 'initial' : 'none'}}
                        className={style.btn+" btn btn-dark"}
                >
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
                         onRemove(task.id);
                         event.stopPropagation();
                     }}
                >
                    УДАЛИТь
                </div>
                {
                    task.needEdit ?
                        <div className={style.btnLong+" btn btn-warning"}
                             onClick={(event)=>{
                                 console.log(this.area.value);
                                 onEdit(task.id,this.area.value);
                                 event.stopPropagation();
                             }}
                        >
                            OK
                        </div> :
                        <div className={style.btnLong+" btn btn-warning"}
                             onClick={(event)=>{
                                 onNeedEdit(task.id);
                                 event.stopPropagation();
                             }}
                        >
                            РЕДАКТИРОВАТЬ
                        </div>
                }
            </div>

            <hr className={style.hr}/>


        </div>

    )
};

export default Index