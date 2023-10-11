import GetStarted from "@/components/getstarted";
import Auth from "./auth";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen = useMediaQuery('(min-width: 601px)');

  return (
    <>
      {isSmallScreen ? <GetStarted /> : null}
      {isLargeScreen ? <Auth /> : null}
    </>    
  )
}
