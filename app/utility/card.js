import { FaBug, FaShieldAlt, FaLeaf, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute top-0 transform -translate-y-1/2 flex justify-center items-center w-20 h-20 bg-white rounded-full border border-[#e6e5e5] transition-colors group-hover:bg-red-500">
        <Icon className="w-8 h-8 text-red-500 transition-colors group-hover:text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center mt-10">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
