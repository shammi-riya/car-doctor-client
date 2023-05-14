import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const BookingCard = ({ bokking, handleDelete, handleUpdateStutus }) => {
    const { users } = useContext(AuthContext)

    const { img, name, date, _id, stutus } = bokking;
    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="mask rounded-md w-24 ">
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{users?.email}</td>
            <td>
                {date}
            </td>

            <th>
                {
                    stutus == "confirm" ? <button
                        className='py-2 text-white rounded ml-3 px-4 border-0 bg-[#FF3811]'>Confirm</button>
                        :


                        <button onClick={() => handleUpdateStutus(_id)}
                            className='py-2 text-white rounded ml-3 px-4 border-0 bg-[#FF3811]'>Pending</button>

                }
            </th>
        </tr>






    );
};

export default BookingCard;