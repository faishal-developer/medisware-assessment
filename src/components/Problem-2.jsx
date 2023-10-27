import React, { useEffect } from 'react';
import ModalBootstrap from './Modal/Modal.view';
import useProblem2 from './logics/Problem2.logic';

const Problem2 = () => {
    const {handleCheck,contact1Data,getDataByCheck,showContactAllModal,setShowContactAllModal,openModal1,openModal2,getAllContactData,contactUsData,setShowUsContactModal,showUsContactModal}= useProblem2();

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={openModal1} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={openModal2} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>
            <div>
                <ModalBootstrap
                    show={showContactAllModal}
                    handleClose={()=>setShowContactAllModal(false)}
                    size='md'
                    className=''
                    title={<h6>All Contact</h6>}
                    footer={
                        <>
                            <button style={{background:'#46139f'}} className='btn'>All Contact</button>
                            <button onClick={()=>{
                                setShowContactAllModal(false)
                                openModal2()
                                }} className='btn'
                            >Us Contact</button>
                            <button onClick={()=>{setShowContactAllModal(false)}} style={{background:'#46139f'}} className='btn'>Close</button>
                        </>
                    }
                >
                    <table>
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Phone</th>
                        </tr>
                        </thead>
                        {console.log(contact1Data?.results)}
                        <tbody>
                    {
                        contact1Data?.results?.length>0 ?(
                            getDataByCheck().map((item,i)=>(
                                <tr key={i}>
                                   <td scope="col">{item?.country?.name}</td>
                                   <td scope="col">{item?.phone}</td>
                                </tr>
                            ))
                        ):'Loading data...'
                    }
                    <input onChange={handleCheck} id='even' type='checkbox' name='even'/>
                    <label htmlFor='even'>See even</label>
                    </tbody>
                    </table>
                </ModalBootstrap>
                <ModalBootstrap
                    show={showUsContactModal}
                    handleClose={()=>setShowUsContactModal(false)}
                    size='md'
                    className=''
                    title={<h6>US Contact</h6>}
                    footer={
                        <>
                            <button onClick={()=>{
                                setShowUsContactModal(false)
                                openModal1()
                                }}  className='btn'>All Contact</button>
                            <button style={{background:'#ff7f50'}} className='btn'>Us Contact</button>
                            <button onClick={()=>{setShowContactAllModal(false)}} style={{background:'#46139f'}} className='btn'>Close</button>
                        </>
                    }
                >
                    <table>
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Phone</th>
                        </tr>
                        </thead>
                        {console.log(contactUsData?.results)}
                        <tbody>
                    {
                        contactUsData?.results?.length>0 ?(
                            getDataByCheck(contactUsData).map((item,i)=>(
                                <tr key={i}>
                                   <td scope="col">{item?.country?.name}</td>
                                   <td scope="col">{item?.phone}</td>
                                </tr>
                            ))
                        ):'Loading data...'
                    }
                    <input onChange={handleCheck} id='even' type='checkbox' name='even'/>
                    <label htmlFor='even'>See even</label>
                    </tbody>
                    </table>
                </ModalBootstrap>
            </div>
        </div>
    );
};

export default Problem2;