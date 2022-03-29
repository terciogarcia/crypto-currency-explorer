import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div``;

export const PageHeader = styled(AppBar)`
  padding: .8rem 1.6rem;
  position: relative;
`;

export const HomeLink = styled(Link)`
  color: #fff !important;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const PageContent = styled.main`
  padding: 2rem .5rem;
  margin: auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
