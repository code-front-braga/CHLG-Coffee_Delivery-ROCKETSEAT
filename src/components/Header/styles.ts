import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  border-radius: 6px;
  border: none;

  position: relative;

  min-height: 2.3rem;
  height: 2.3rem;

  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 0.5rem;

  /* Variant */
  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['brand-purple']};
      }
    `}
`;
