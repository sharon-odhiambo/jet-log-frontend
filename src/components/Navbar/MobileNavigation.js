import { useState } from 'react';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import NavLinks from './NavLinks';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound onClick={() => setIsOpen(!isOpen)} className="hamburger" />
  );
  const closeIcon = (
    <CgCloseO onClick={() => setIsOpen(!isOpen)} className="hamburger" />
  );

  return (
    <div className="mobileNavigation">
      {isOpen ? closeIcon : hamburgerIcon}
      {isOpen && <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default MobileNavigation;
