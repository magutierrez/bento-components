import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from '../../themes/defaultTheme';
import styled from 'styled-components';

const componentVariants = (theme, width, height) => ({
  text: {
    width: width,
    height: height,
    borderRadius: theme.shapes.borderRadiusSmall
  },
  circular: {
    width: width,
    height: width,
    borderRadius: '50%'
  },
  rounded: {
    width: width,
    height: height,
    borderRadius: theme.shapes.borderRadiusMedium
  },
  square: {
    width: width,
    height: width,
    borderRadius: '0px'
  }
});

const StyledSkeleton = styled.i`
  opacity: ${({ opacity }) => opacity};
  ${({ theme, width, height, variant }) => componentVariants(theme, width, height)[variant]};
  animation: ${({ theme }) => theme.animations.loading} 1s infinite ease-in-out;
  display: block;
`;

StyledSkeleton.defaultProps = {
  theme: defaultTheme
};

const Skeleton = React.forwardRef((props, ref) => {
  const { width, height, opacity, variant, ...other } = props;

  return (
    <StyledSkeleton variant={variant} width={width} height={height} opacity={opacity} {...other} />
  );
});

Skeleton.propTypes = {
  height: PropTypes.string,
  variant: PropTypes.oneOf(['square', 'circular', 'rounded', 'text']).isRequired,
  width: PropTypes.string.isRequired,
  opacity: PropTypes.string
};

Skeleton.defaultProps = {
  height: '10px',
  width: '100%',
  variant: 'text',
  opacity: '1'
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
