export interface TooltipProps {
  children: React.ReactNode;
  enterDelay?: number;
  enterNextDelay?: number;
  leaveDelay?: number;
  title: string | React.ReactNode | Array;
  value?: string;
  position?: 'top' | 'right' | 'left' | 'bottom';
  width?: string;
  className?: string;
}

declare const Tooltip: React.FunctionComponent<TooltipProps>;

export default Tooltip;
