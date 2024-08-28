import styled from 'styled-components';
import introBackgroundImg from '../../../../assets/Background_Intro.png';
import { rgba } from 'polished';
import { TitleText } from '../../../../components/Typograph';

export const IntroContainer = styled.section`
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;

  width: 100%;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;

  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
`;
