export interface Props {
  className?: string;
  closable?: boolean;
  disabled?: boolean;
  enableClickOutside?: boolean;
  leftContent?: string;
  name?: string;
  onChange?: (ev: SyntheticInputEvent<HTMLInputElement>) => void | Promise<any>;
  onClose: () => void;
  placeholder?: string;
  tabIndex?: string;
  value?: string;
}

declare const Search: React.FunctionComponent<Props>;

export default Search;
