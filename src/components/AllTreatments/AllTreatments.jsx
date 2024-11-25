import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatments = () => {

    const services = useLoaderData()

    return (
        <div className='mt-6 grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[80%] mx-auto max-w-[1200px] '>
           {
                     services.map(service => <ServiceCard 
                        key={service.id}
                        service={service}></ServiceCard>)
           }
        </div>
    );
};

export default AllTreatments;