type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`container mx-auto max-w-xl lg:max-w-full ${className}`}>{children}</div>;
};

export default Container;
