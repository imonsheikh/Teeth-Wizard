import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {

    const services = useLoaderData()
    console.log(services);
    

    return (
        <div>
             <Banner></Banner>
             <div className='mt-6 grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[80%] mx-auto max-w-[1200px]'>
                {
                    services.slice(0,4).map(service => <ServiceCard 
                        key={service.id}
                        service={service}></ServiceCard>)
                }
             </div>
               <button  className='border mx-auto block btn btn-primary mt-4'>
                <NavLink 
                to="/allTreatments"
               >Show More</NavLink>
              </button>
        </div>
    );
};

export default Home;