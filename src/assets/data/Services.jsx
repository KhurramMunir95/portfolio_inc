import { TbWorldWww } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { GrVmMaintenance } from "react-icons/gr";

const services = [
    { 
      id: 1,
      title: 'Static Website Developement',
      content: `Create a stunning online presence with our Static Website Development services. 
      Perfect for small businesses and personal portfolios, our static websites are fast, secure, and easy to maintain. 
      Let us build you a sleek, professional website that captures your brand and engages your audience.`,
      image: <TbWorldWww className='icon' />
    },
    {
      id: 2,
      title: 'Dynamic Website Development',
      content: `Engage and interact with your visitors through our Dynamic Website Development solutions. 
      Whether you need an e-commerce platform, a content management system, or a user-driven website, 
      our dynamic sites offer flexibility, scalability, and robust functionality to meet your unique business needs.`,
      image: <BsDatabase className='icon' />
    },
    {
      id: 3,
      title: 'Website Maintenance',
      content: `Keep your website running smoothly and securely with our comprehensive Website Maintenance services. 
      From regular updates and backups to troubleshooting and performance optimization, we ensure your site remains up-to-date, 
      fast, and secure, allowing you to focus on your business.`,
      image: <GrVmMaintenance className='icon' />
    }
]

export default services;