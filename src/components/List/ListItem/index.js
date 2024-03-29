import React from 'react';
import styled, { css } from 'styled-components';
import defaultTheme from '../../../themes/defaultTheme';
import PropTypes from 'prop-types';

const componentSizes = theme => ({
  medium: {
    padding: theme.components.listItemPaddingMedium,
    fontSize: theme.components.listItemFontSizeMedium
  },
  large: {
    padding: theme.components.listItemPaddingLarge,
    fontSize: theme.components.listItemFontSizeLarge
  }
});

export const StyledLeftContent = styled.div`
  margin-right: 19px;
  color: ${props =>
    props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};
  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.components.listItemColorDisabled};
    `}

  > svg {
    fill: ${props => (props.active ? props.theme.components.listItemColorActive : '')};
    ${props =>
      props.focused &&
      css`
        fill: ${props.theme.components.listItemColorFocused};
      `};
    ${props =>
      props.disabled &&
      css`
        fill: ${props.theme.components.listItemColorDisabled};
      `}
  }

  > * {
    ${props =>
      props.disabled &&
      css`
        color: ${props.theme.components.listItemColorDisabled};
      `}
    ${props =>
      props.focused &&
      css`
        color: ${props.theme.components.listItemColorFocused};
      `};
  }
`;

export const StyledComponent = styled(({ className, children, as: Component, theme, ...props }) =>
  Component ? (
    <Component className={className} {...props}>
      {children}
    </Component>
  ) : (
    <div className={className}>{children}</div>
  )
)``;

StyledComponent.defaultProps = {
  theme: defaultTheme
};

export const StyledRightContent = styled.div`
  margin-left: auto;
  color: ${props =>
    props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};
  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.components.listItemColorDisabled};
    `}

  > svg {
    fill: ${props => (props.active ? props.theme.components.listItemColorActive : '')};
    ${props =>
      props.disabled &&
      css`
        fill: ${props.theme.components.listItemColorDisabled};
      `}
    ${props =>
      props.focused &&
      css`
        fill: ${props.theme.components.listItemColorFocused};
      `};
  }

  > * {
    ${props =>
      props.disabled &&
      css`
        color: ${props.theme.components.listItemColorDisabled};
      `}
    ${props =>
      props.focused &&
      css`
        fill: ${props.theme.components.listItemColorFocused};
      `};
  }
`;

StyledRightContent.defaultProps = {
  theme: defaultTheme
};

const StyledListSeparator = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${props => props.theme.components.listItemSeparatorColor};
  margin: 0;
  padding: 0;
`;

StyledListSeparator.defaultProps = {
  theme: defaultTheme
};

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.active ? props.theme.components.listItemColorActiveHover : props.theme.color.white};
  color: ${props =>
    props.active
      ? props.theme.components.listItemColorActive
      : props.theme.components.listItemColorDefault};
  font-size: ${props => props.theme.components.listItemFontSize};
  font-family: ${props => props.theme.global.fontFamily};
  font-weight: ${props => props.theme.global.fontWeightMedium};
  transition: ${props => props.theme.global.transitionM};
  margin: ${props => props.theme.components.listItemMargin};
  line-height: 26px;
  cursor: ${props => (props.disabled ? 'default' : props.onClick ? 'pointer' : 'default')};
  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.components.listItemColorDisabled};
      background-color: ${props.theme.components.listItemBackgroundColorDisabled};
    `};
  ${props =>
    props.focused &&
    css`
      background-color: ${props.theme.components.listItemBackgroundColorFocused};
    `};
  ${props =>
    props.focused &&
    css`
      color: ${props.theme.components.listItemColorFocused};
    `};
  border-radius: ${props => props.theme.components.listItemBorderRadius};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    ${props =>
      !props.disabled &&
      css`
        background-color: ${props.active
          ? props.theme.components.listItemBackgroundColorActiveHover
          : props.theme.components.listItemBackgroundColorDefaultHover};
      `};
    ${props =>
      props.disabled &&
      css`
        background-color: ${props.theme.components.listItemBackgroundColorHoverDisabled};
      `};
    ${props =>
      props.focused &&
      css`
        background-color: ${props.theme.components.listItemBackgroundColorFocused};
      `};

    color: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefaultHover};

    ${StyledLeftContent} {
      ${props =>
        (props.focusContent || props.focusLeftContent) &&
        !props.disabled &&
        css`
          opacity: 1;
          transition: opacity 150ms ease-in-out;
        `};
    }

    ${StyledRightContent} {
      ${props =>
        (props.focusContent || props.focusRightContent) &&
        !props.disabled &&
        css`
          opacity: 1;
          transition: opacity 150ms ease-in-out;
        `};
    }
  }

  ${StyledLeftContent} {
    ${props =>
      (props.focusContent || props.focusLeftContent) &&
      !props.active &&
      css`
        opacity: 0;
      `};
  }

  ${StyledRightContent} {
    ${props =>
      (props.focusContent || props.focusRightContent) &&
      !props.active &&
      css`
        opacity: 0;
      `};
  }

  > ${StyledComponent} {
    display: flex;
    flex-basis: 100%;
    width: 100%;
    align-items: center;
    align-content: center;
    color: ${props =>
      props.active
        ? props.theme.components.listItemColorActive
        : props.theme.components.listItemColorDefault};
    font-weight: ${props => props.theme.components.listItemFontWeight};
    ${props => componentSizes(props.theme)[props.size]};
    ${props =>
      props.focused &&
      css`
        color: ${props.theme.components.listItemColorFocused};
      `};
    ${props =>
      props.focused &&
      css`
        font-weight: ${props.theme.components.listItemFontWeightFocused};
      `};

    ${props =>
      props.disabled &&
      css`
        color: ${props.theme.components.listItemColorDisabled};
      `};
    ${props =>
      props.disabled &&
      css`
        pointer-events: none;
      `};
  }
`;

StyledListItem.defaultProps = {
  theme: defaultTheme
};

const ListItem = React.forwardRef((props, ref) => {
  const {
    active,
    as: Component,
    children,
    className,
    disabled,
    focusContent,
    focusLeftContent,
    focusRightContent,
    focused,
    leftContent,
    onClick,
    rightContent,
    separator,
    size,
    ...other
  } = props;

  return separator ? (
    <StyledListSeparator />
  ) : (
    <StyledListItem
      active={active}
      disabled={disabled}
      focused={focused}
      onClick={e => {
        if (!disabled && onClick && typeof onClick === 'function') {
          onClick(e);
        }
      }}
      size={size}
      className={className}
      focusContent={focusContent}
      focusLeftContent={focusLeftContent}
      focusRightContent={focusRightContent}
    >
      <StyledComponent disabled={disabled} as={Component} {...other}>
        {leftContent ? (
          <StyledLeftContent active={active} disabled={disabled} focused={focused}>
            {leftContent}
          </StyledLeftContent>
        ) : null}

        {children}

        {rightContent ? (
          <StyledRightContent active={active} disabled={disabled} focused={focused}>
            {rightContent}
          </StyledRightContent>
        ) : null}
      </StyledComponent>
    </StyledListItem>
  );
});

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  focusContent: PropTypes.bool,
  focusLeftContent: PropTypes.bool,
  focusRightContent: PropTypes.bool,
  focused: PropTypes.bool,
  leftContent: PropTypes.node,
  onClick: PropTypes.func,
  rightContent: PropTypes.node,
  separator: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large'])
};

ListItem.defaultProps = {
  separator: false,
  active: false
};

export default ListItem;
