"use client";
import { cn } from '@/lib/utils';
import Container from './Container';
import {motion} from 'framer-motion';   
interface Props {
    children: React.ReactNode;
    className?: string;
};
const PageLayout = ({children, className}:Props) => {
  return (
   <Container className={cn(className)}>
  <motion.div initial={{opacity: 0}} animate={{
    opacity: 1,
    transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
  }}>

  </motion.div>
   </Container>
  )
}

export default PageLayout;