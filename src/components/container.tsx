interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth }) => {
  return (
    <div
      className={`mx-auto px-2 sm:px-6 2xl:px-0 ${
        maxWidth ? "max-w-screen-2xl" : "max-w-7xl"
      } `}
    >
      {children}
    </div>
  );
};

export default Container;
