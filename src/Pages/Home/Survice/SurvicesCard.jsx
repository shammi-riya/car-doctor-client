
import { HiArrowRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const SurvicesCard = ({survice}) => {


  
    const  {_id ,title,img,price} = survice;
    return (
        <div className="card w-96 h-full bg-base-100 border-2">
        <figure className="p-6 ">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl">{title}</h2>
         
          <div className=" flex text-red-500 text-xl font-semibold justify-between items-center">
          <p >price:${price}</p>
           <Link to={`/survice/${_id}`}> <h3><HiArrowRight></HiArrowRight></h3></Link>
          </div>
        </div>
      </div>
    );
};

export default SurvicesCard;