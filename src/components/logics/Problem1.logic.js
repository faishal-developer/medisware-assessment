import { useRef, useState } from "react";

const useProblem1 = () => {
    const [data,setData]= useState([]);
    const [show, setShow] = useState('all');
    const [currentData,setCurrentData]=useState({name:'',status:''});
    const [error,setError]= useState('');

    const handleClick = (val) =>{
        setShow(val);
    }

    const onChangeHandler=(e)=>{
        setError('');
        setCurrentData({...currentData,[e.target.name]:e.target.value})
        console.log(currentData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!currentData.name || !currentData.status){
            console.log("error",currentData);
            setError('Name and status is required');
            return;
        }
        setData([...data,currentData]);
        setCurrentData({name:'',status:''});
    }

    const getData=()=>{
        if(show==='all'){
            return [
                ...data.filter(it=>it.status==='active'),
                ...data.filter(it=>it.status==='completed'),
                ...data.filter(it=>it.status!=='active' && it.status!=='completed')
            ]
        }
        return data.filter((item)=>item.status===show)
    }

    return {
        show,setShow,handleClick,data,onChangeHandler,currentData,handleSubmit,error,getData
    }
};

export default useProblem1;