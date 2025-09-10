import styled from "styled-components";

export const Container = styled.footer`
  border: 0px solid ${({ theme }) => theme.colors.detailSoft};
  background-color: ${({ theme }) => theme.colors.primaryStrong};
  border-top-width: 1px;
`;

export const FooterContent = styled.div`
  padding: 2rem 1rem;
  @media (min-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const Branding = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  img {
    height: 2rem;
    width: auto;
  }

  span {
    font-size: 1.125rem;
    font-weight: 600;
    color: #7a0019;
  }

  p {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Section = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textStrong};
  }

  ul {
    font-size: 0.875rem;

    a {
      padding: 0.25rem 0;
      display: block;
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      padding-left: 0;
      transition: all 200ms var(--custom-ease-out);

      &:hover,
      &:focus {
        padding-left: 0.3rem;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #e5e5e5;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};

  p + p {
    margin-top: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.contrastStrong}dd;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.secondarySoft};
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 620px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
    ${Branding} {
      grid-row: 1;
      grid-column-start: 1;
      grid-column-end: 3;
    }
    ${Section} {
      grid-row: 2;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
