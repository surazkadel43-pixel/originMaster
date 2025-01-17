import { useState, useEffect } from 'react';

type Review = {
    id: string;
    title: string;
    body: string;
    rating: number;
  };

    const [reviews, setReviews] = useState<Review[]>([]);
    const[isPending, setIsPending] = useState(true)
    const[name, setName] = useState('suraj')
    const[ modalOpen, setModalOpen] = useState(false)
    const [error, setError] = useState(null)

 const  useFetch = (url: string) => {
    //url = 'http://10.0.2.2:8000/reviews'
    useEffect(() =>
            {
              setTimeout(() => 
                {
                  console.log(name)
                  fetch(url).then(res => { 
                  
                      if(!res.ok){
                        throw new Error(`HTTP error! Status: ${res.status}`);
                      }
                            return res.json()}).then((data) => 
                          {
                        // console.log(data)
                        console.log('i am inside data')
                        setReviews(data)
                        setIsPending(false)  
                        setError(null)
                      }).catch(err => {
                        setError(err.message)
                        setIsPending(false)
                        console.log(err.message)
                      })
                }, 1000);
            },[url]);

            return {reviews, isPending, error}
}

export default useFetch