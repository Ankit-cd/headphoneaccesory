import { UpdateFollower } from 'react-mouse-follower';
import obj1 from '../assets/icons/obj1.png';
import obj2 from '../assets/icons/obj2.png';
import obj3 from '../assets/icons/obj3.png';
import { motion } from 'framer-motion';


export const fadeUp = (delay) =>{
    return {
      hidden:{
        opacity:0,
        y:100,
      },
      show:{
        opacity:1,
        y:0,
        transition:{
          duration:0.5,
          delay:delay,
        }
      }
    }
}


const servicesData = [
    {
        id:1,
        image:obj1,
        title:"Security",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay:0.5,
    },
    {
        id:2,
        image:obj2,
        title:"Gurantee",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay:0.8,
    },
    {
        id:3,
        image:obj3,
        title:"Affordability",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        delay:1.1,
    },
]

const Services = () => {
  return (
    <section className='bg-gray-100 font-poppins py-8'>
        <div className="container py-14">
            <motion.h1
             variants={fadeUp(0.2)}
             initial='hidden'
             whileInView='show'
             className='text-3xl font-bold text-center pb-10'>Services</motion.h1>      
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    servicesData.map((item)=>((
                        <UpdateFollower key={item.id} mouseOptions={
                            {
                                backgroundColor:'white',
                                zIndex:9999,
                                followSpeed:0.5,
                                rotate:720,
                                scale:5,
                                mixBlendMode:'darken',
                                backgroundElement:(
                                <div>
                                    <img src={item.image} alt="active1image" />
                                </div>)
                            }}>
                            <motion.div
                                variants={fadeUp(item.delay)}
                                initial='hidden'
                                whileInView='show'
                                className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white'>
                                <img className='w-[100px] mb-4' src={item.image} alt="iconimage" />
                                <div className='text-center space-y-2'>
                                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                                    <p className='text-center text-sm text-black/75'>{item.description}</p>
                                </div>
                            </motion.div>
                            


                        </UpdateFollower>
                    )))
                }
            </div>
        </div>
    </section>
  )
}

export default Services