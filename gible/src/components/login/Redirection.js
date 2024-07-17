import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loginConfig from '@/config/loginConfig'
import apiClient from '@/api/axios';
import Loading from '@/layouts/Loading';

const Redirection = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
        /*
          apiClient.post('/kakaologin', {
            clientId : loginConfig.CLIENT_ID,
            code
          })
        */
      
        // response받아서 setIsLoaded 호출
    
        navigate('/');
    }, [])

  return (
      <div>
        {(!isLoaded) ? <Loading /> : <div> </div>}
      </div>
  )
}

export default Redirection