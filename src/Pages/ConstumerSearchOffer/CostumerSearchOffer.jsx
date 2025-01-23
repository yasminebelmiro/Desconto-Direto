import React from 'react'
import { useLocation } from 'react-router-dom'
import CostumerHeader from '../../components/CostumerHeader/CostumerHeader';
import CostumerCardList from '../../components/CostumerCardList/CostumerCardList';

const CostumerSearchOffer = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query')
  return (
   <>
   <CostumerHeader authenticated={true}/>
    <div>Resultados para: {query}</div>
    <CostumerCardList />

   </>
    
  )
}

export default CostumerSearchOffer