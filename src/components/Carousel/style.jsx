import { motion } from "framer-motion";
import styled from "styled-components";

export const Carrosel = styled.div`
  width: 100%;

  margin: 0 auto;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const Inner = styled(motion.div)`
  display: flex;
  flex-direction: row;
 
`;

export const Item = styled(motion.div)`
  width: 100%;
  height: 300px;
  display: flex;
`;

export const Img = styled.img`
  pointer-events: none;
`;
