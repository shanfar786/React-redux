import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { messageData , amountofData} from '../index';

const Case = () => {
    const data =  useSelector(state => state);
     const dispatch = useDispatch();
    return (
        <>
          <img src = {data} alt ="img" />
          <br />
          <button onClick = {() => dispatch(messageData())} >Click here</button> <br />
          <button onClick = {() => dispatch(amountofData())} >Click here2</button>
        </>
    )
}

export default Case;
