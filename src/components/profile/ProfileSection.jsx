const ProfileSection = ({ title, children }) => {
  return (
    <>
      <h2 className="mb-6 font-manrope text-[32px] font-bold">{title}</h2>
      {children}
    </>
  );
};

export default ProfileSection;
