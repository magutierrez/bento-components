import React from 'react';
import styled from 'styled-components';
import CardSkeleton from './CardSkeleton';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';

const StyledCard = styled.article`
  border: 1px solid ${({ theme }) => theme.color.charcoal400};
  box-sizing: border-box;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.shapes.borderRadiusMedium};
`;

StyledCard.defaultProps = {
  theme: defaultTheme
};

const Card = React.forwardRef((props, ref) => {
  const { children, className, loading, ...other } = props;

  return (
    <StyledCard className={className} {...other}>
      {loading ? <CardSkeleton /> : children}
    </StyledCard>
  );
});

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool
};

export default Card;
