export interface Props {
  children: React.ReactNode;
  closeButton: boolean;
  header?: React.ReactNode;
  headerColor?: string;
  offsetBottom?: string;
  offsetLeft?: string;
  offsetRight?: string;
  offsetTop?: string;
  onClose?: () => void;
  open: boolean;
  position: 'left' | 'right' | 'bottom';
  showOverlay?: boolean;
  subHeader?: React.ReactNode;
  width?: string;
  height?: string;
}

declare const Drawer: React.FunctionComponent<Props>;

export default Drawer;
