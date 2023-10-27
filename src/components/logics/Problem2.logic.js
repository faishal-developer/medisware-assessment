import React, { useState } from 'react';
import { getService } from '../../ApiService/ApiService';
import { Endpoints } from '../../ApiService/apiEndPoints';
import { useNavigate } from 'react-router-dom';

const useProblem2 = () => {
    const [showContactAllModal,setShowContactAllModal]= useState(false);
    const [showUsContactModal,setShowUsContactModal]= useState(false);
    const [contact1Data,setContact1Data]= useState({results:[]});
    const [contactUsData,setContactUsData]= useState({results:[]});
    const [check,setCheck]= useState(false);
    const [check2,setCheck2]= useState(false);
    const history=useNavigate();
    
    const openModal1=()=>{
        history('/problem-2?contact=contactall');
        setShowContactAllModal(true);
        getAllContactData();
    }

    const openModal2=()=>{
        history('/problem-2?contact=contactUS');
        setShowUsContactModal(true);
        getAllContactDataUS();
    }

    const handleCheck=()=>{
        setCheck(!check);
    }
    const handleCheck2=()=>{
        setCheck(!check2);
    }

    const getDataByCheck=(data)=>{
        let newData=data?? contact1Data
        if(check){
            return newData?.results.filter(item=>item.id%2===0);
        }else{
            return newData?.results
        }
    }


    const getAllContactData=()=>{
        getService(Endpoints.contacts+'?format=json&page=1',{
            thenCB:((res)=>{
                setContact1Data(res.data);
            }),
            catchCB:((error)=>console.log(error)),
            finallyCB:(()=>console.log('finally')),
        })
    }
    const getAllContactDataUS=()=>{
        getService(Endpoints.country_contacts('United States')+'?format=json&page=1',{
            thenCB:((res)=>{
                setContactUsData(res.data);
                console.log(res.data)
            }),
            catchCB:((error)=>console.log(error)),
            finallyCB:(()=>console.log('finally')),
        })
    }
    return {contactUsData,setContactUsData,showUsContactModal,setShowContactAllModal,getAllContactDataUS,handleCheck,getDataByCheck,showContactAllModal,contact1Data,setShowContactAllModal,openModal1,openModal2,showUsContactModal,setShowUsContactModal,getAllContactData};
};

    
export default useProblem2;