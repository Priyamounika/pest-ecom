import Card from '../utility/card';
import { FaBug, FaShieldAlt, FaLeaf, FaClock } from 'react-icons/fa';

const CardGrid = () => {
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-16">
      <Card
        icon={FaBug}
        title="Fast Pest Removal"
        description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum lorem quis."
      />
      <Card
        icon={FaClock}
        title="One-Time Extermination"
        description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum lorem quis."
      />
      <Card
        icon={FaShieldAlt}
        title="Licensed & Protected"
        description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum lorem quis."
      />
      <Card
        icon={FaLeaf}
        title="Eco Friendly Technologies"
        description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum lorem quis."
      />
    </div>
  );
};

export default CardGrid;
