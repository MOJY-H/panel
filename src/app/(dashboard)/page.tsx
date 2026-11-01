"use client"
import { redirect } from 'next/navigation';

const Dashboard = () => {
  
  const path1 = localStorage.getItem('val1');
  const path2 = localStorage.getItem('val2');
  console.log( 'agas : ', path1 , 'asaasf' , path2 );
  
  return (
    <>

      {
        (`${path1}${path2}` == ' vendor ') ? (

          redirect('/vendor/home')

        ) : ( `${path1}${path2}` == ' admin ') ? (

          redirect('/admin/home')

        ) : (

          redirect('/user/home')
          
        )
      }

    </>
  )
}

export default Dashboard