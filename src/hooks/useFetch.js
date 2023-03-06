import React from 'react'

const useFetch = () => {

  const useFetch = async () => { 
    const resp = await fetch('https://api.escuelajs.co/api/v1/products/4');
    const data = resp.json();

    console.log(data)
  }
  useEffect(() => {
    useFetch();
  }, [])
  

  return (
    <div>useFetch</div>
  )
}

export default useFetch