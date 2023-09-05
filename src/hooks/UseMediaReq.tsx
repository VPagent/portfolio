import { useMediaQuery } from "react-responsive";

const useMediaReq = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return {
    isDesktop,
    isTablet,
  };
};

export default useMediaReq;
