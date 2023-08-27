import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

import { ActiveSectionContext } from '@/context/active-section-context';
import { NavLinkType } from './data';

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within ActiveSectionContextProvider'
    );
  }

  return context;
};

export const useSectionInView = (
  sectionName: NavLinkType,
  threshold: number = 0.75
) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);

  return { ref };
};
