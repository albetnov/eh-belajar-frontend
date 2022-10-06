type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto max-w-xl lg:max-w-full sm:col-start-2 row-start-2 sm:row-start-auto ${className} p-5`}
    >
      {children}
    </div>
  );
};

export default Container;
