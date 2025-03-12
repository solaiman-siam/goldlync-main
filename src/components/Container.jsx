const Container = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[1720px] px-4 md:px-5 xl:px-8">
      {children}
    </div>
  );
};

export default Container;
