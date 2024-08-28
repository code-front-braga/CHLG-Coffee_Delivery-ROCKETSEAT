import styled from 'styled-components';

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  iconBg: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${({ iconBg }) => iconBg};
  color: ${({theme}) => theme.colors['base-white']};
  border-radius: 50%;

  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
