import React, {useState} from 'react';
import useProblem1 from './logics/Problem1.logic';
import { status } from './logics/Problem1.utils';

const Problem1 = () => {

    const {show,setShow,handleClick,data,onChangeHandler,getData,currentData,handleSubmit,error} = useProblem1();

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" onChange={onChangeHandler} value={currentData.name} name='name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                                <select onChange={onChangeHandler} value={currentData.status} name='status' className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option>Select One</option>
                                {
                                    status.map((item)=>(
                                        <option key={item.value} value={item.value}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <small className='text-danger'>{error??''}</small>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                getData().map((item,i)=>(
                                    <tr key={i}>
                                        <td scope="col">{item.name}</td>
                                        <td scope="col">{item.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;