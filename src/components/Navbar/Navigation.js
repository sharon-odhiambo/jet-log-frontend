import { useState } from 'react';
import NavLinks from './NavLinks';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navigation;
